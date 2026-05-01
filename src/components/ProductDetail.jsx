// ProductDetail.jsx - Shows detailed information about a single product
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
function ProductDetail() {
  // const product = {
  //   id: 1,
  //   title: 'iPhone 9',
  //   price: 549,
  //   description: 'An apple mobile which is nothing like apple',
  //   rating: 4.6,
  //   stock: 94,
  //   brand: 'Apple',
  //   category: 'smartphones',
  // };
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        // agar response ok nahi hai to error throw karo
        if (!res.ok) {
          throw new Error("Failed to fetch product details. Please try again.");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        // error ko state mein store karo
        setError(err.message);
        setLoading(false);
      });
  }, [id]);
  // Add to Cart handler
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart'); // cart page pe redirect karo
  }
  if (loading) {
    return <p>Loading product...</p>;
  }
  if (error) {
    return (
      <div className="error-box">
        <h2>⚠️ Something went wrong!</h2>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <button className="product-item__btn" onClick={handleAddToCart}>Add to Cart 🛒</button>
    </div>
  );
}

export default ProductDetail;
