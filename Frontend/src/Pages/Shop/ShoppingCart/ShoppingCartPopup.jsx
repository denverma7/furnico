import React from "react";

function ShoppingCartPopup({ isCartOpen, toggleCart }) {
  return (
    <>
      {/* Backdrop: Covers the entire screen */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleCart} // Clicking the backdrop also closes the cart
        ></div>
      )}

      {/* Shopping Cart Popup */}
      <div
        className={`fixed top-20 right-32 bg-white z-50 rounded-lg shadow-lg p-6 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "300px", height: "400px" }}
      >
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <p>Your cart is currently empty.</p>
        {/* Example cart content */}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={toggleCart}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default ShoppingCartPopup;
