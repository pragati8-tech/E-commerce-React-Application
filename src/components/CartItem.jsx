
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
function CartItem({ item }) {
  const dispatch = useDispatch()
  // Remove product event handler
   const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  }  
  // Quantity increase event handler
  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  }
  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  }
  return (
    <div className="cart-item">
      <p>{item.title}</p>
      <p className="cart-item__price">Price: ${item.price}</p>

      {/* Quantity controls */}
      <div className="cart-item__quantity">
      <button onClick={handleDecrease}>-</button>
      <span>{item.quantity}</span>
      <button onClick={handleIncrease}>+</button>
        </div>
      {/* Remove button */}
      <button onClick={handleRemove} className="cart-item__remove">Remove ❌</button>
    </div>
  );
}

export default CartItem;