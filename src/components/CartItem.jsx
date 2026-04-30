
function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p className="cart-item__price">Price: ${item.price}</p>

      {/* Quantity controls */}
      <div className="cart-item__quantity">
      <button>-</button>
      <span>{item.quantity}</span>
      <button>+</button>
        </div>
      {/* Remove button */}
      <button className="cart-item__remove">Remove ❌</button>
    </div>
  );
}

export default CartItem;