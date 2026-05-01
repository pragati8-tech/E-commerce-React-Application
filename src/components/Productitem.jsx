// ProductItem.jsx - Represents a single product
// Props: product (object)
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-item__image"
      />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button
        className="product-item__btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductItem;
