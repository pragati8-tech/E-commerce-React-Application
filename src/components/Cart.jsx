// Cart.jsx - Displays items added to cart with quantity and remove options
import CartItem from './CartItem';
function Cart() {
  const cartItems = [
    { id: 1, title: "iPhone 9", price: 549, quantity: 1 },
    { id: 2, title: "iPhone X", price: 899, quantity: 2 },
  ];

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
