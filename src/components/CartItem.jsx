
function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p>Price: ${item.price}</p>

      {/* Quantity controls */}
      <button>-</button>
      <span>{item.quantity}</span>
      <button>+</button>

      {/* Remove button */}
      <button>Remove ❌</button>
    </div>
  );
}

export default CartItem;