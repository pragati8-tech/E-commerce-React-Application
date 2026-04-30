// ProductItem.jsx - Represents a single product
// Props: product (object)

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button className="product-item__btn">Add to Cart 🛒</button>
    </div>
  );
}

export default ProductItem;