// Checkout.jsx - Dummy form to collect user details with cart summary

import { Link } from 'react-router-dom';

function Checkout() {
  // Static cart summary for now - Redux baad mein aayega
  const cartItems = [
    { id: 1, title: 'iPhone 9', price: 549, quantity: 1 },
    { id: 2, title: 'iPhone X', price: 899, quantity: 2 },
  ];

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {/* User Details Form */}
      <div className="checkout__form">
        <h3>Your Details</h3>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Phone Number" />
      </div>

      {/* Cart Summary */}
      <div className="checkout__summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout__summary-item">
            <span>{item.title}</span>
            <span>x{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="checkout__total">
          <strong>Total:</strong>
          <strong>
            ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </strong>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="checkout__btn">Place Order</button>
    </div>
  );
}

export default Checkout;