// ProductDetail.jsx - Shows detailed information about a single product
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> ⭐ {product.rating}
      </p>
      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <button className="product-item__btn">Add to Cart 🛒</button>
    </div>
  );
}

export default ProductDetail;
