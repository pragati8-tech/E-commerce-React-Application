// Cart.jsx - Displays items added to cart with quantity and remove options

function Cart() {
  
  const cartItems = [
    { id: 1, title: 'iPhone 9', price: 549, quantity: 1 },
    { id: 2, title: 'iPhone X', price: 899, quantity: 2 },
  ];

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>

          {/* Quantity controls */}
          <button>-</button>
          <span>{item.quantity}</span>
          <button>+</button>

          {/* Remove button */}
          <button>Remove ❌</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;