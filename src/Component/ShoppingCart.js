import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [basketItems, setBasketItems] = useState(["Item 1", "Item 2"]); // Initial basket items

  // Function to handle checkout
  const handleCheckout = () => {
    // Simulate a checkout process (could be an API call, etc.)
    console.log("Processing checkout...");
    setTimeout(() => {
      // After a simulated successful checkout, update basketItems to an empty array
      setBasketItems([]);
      console.log("Checkout completed!");
    }, 2000); // Simulating a delay for the checkout process
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {basketItems.length > 0 ? (
          basketItems.map((item, index) => (
            <div key={index} className="cart-item">
              {item}
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <p>Items in Cart: {basketItems.length > 0 ? basketItems.length : "0"}</p>
      <button onClick={handleCheckout} disabled={basketItems.length === 0}>
        Checkout
      </button>
    </div>
  );
}

export default ShoppingCart;
