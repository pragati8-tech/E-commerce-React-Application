// ProductItem.jsx - Represents a single product
// Props: product (object)
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="product-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-item__image"
      />
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>Price: ${product.price}</p>
      <button className="product-item__btn" onClick={handleAddToCart}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductItem;
