const express = require("express");
const router = express.Router();
const Message = require("../Models/message");

// POST: Add a new message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, Email, and Message are required" });
    }

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // console.log(`Message saved successfully.`)
    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET: Fetch all messages (optional for admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
