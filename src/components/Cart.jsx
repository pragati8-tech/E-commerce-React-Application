// Cart.jsx - Displays items added to cart with quantity and remove options
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
  // const cartItems = [
  //   { id: 1, title: "iPhone 9", price: 549, quantity: 1 },
  //   { id: 2, title: "iPhone X", price: 899, quantity: 2 },
  // ];
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart 🛒</h2>
        <p className="cart__empty">
          Your cart is empty. <Link to="/">Continue Shopping</Link>
        </p>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* Cart Total */}
      <div className="cart__total">
        <strong>Total: ${cartTotal}</strong>
      </div>

      {/* Checkout Button */}
      <Link to="/checkout" className="cart__checkout-btn">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;
