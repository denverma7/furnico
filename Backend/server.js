const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT
const mongoURI = process.env.MONGODB_URI


// MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

mongoose.connect(mongoURI,{})
.then(() =>{
    console.log('Connected to MongoDB...')
    // createAdminAccount();
})
.catch(error => console.error(`MongoDB connection error: ${error}`))

// Import Routes
const messageRoutes = require("./src/Routes/messageRoutes");
app.use("/api/messages", messageRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.listen(port, () =>{
//     console.log(`Server is running on port ${port}`)
// })