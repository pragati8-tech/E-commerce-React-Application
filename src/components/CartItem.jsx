
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
function CartItem({ item }) {
  const dispatch = useDispatch()
  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p className="cart-item__price">Price: ${item.price}</p>

      {/* Quantity controls */}
      <div className="cart-item__quantity">
      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      {/* Remove button */}
      <button onClick={() => dispatch(removeFromCart(item.id))} className="cart-item__remove">Remove ❌</button>
    </div>
  );
}

export default CartItem;