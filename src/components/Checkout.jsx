// Checkout.jsx - Order place functionality with cart summary and redirect

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../store/cartSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // Order placed message state
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  // Form input change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Place Order handler
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.city ||
      !form.phone
    ) {
      alert("Please fill all the details!");
      return;
    }

    setOrderPlaced(true);

    // empty Cart
    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // Order placed message
  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>✅ Order Placed!</h2>
        <p>Thank you for shopping with ShoppyGlobe.</p>
        <p>Redirecting to Home page...</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {/* User Details Form */}
      <div className="checkout__form">
        <h3>Your Details</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {/* Cart Summary */}
      <div className="checkout__summary">
        <h3>Order Summary</h3>

        {/* Agar cart empty hai */}
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="checkout__summary-item">
              <span>{item.title}</span>
              <span>x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))
        )}

        {/* Total */}
        <div className="checkout__total">
          <strong>Total:</strong>
          <strong>${cartTotal}</strong>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="checkout__btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
