// ProductList.jsx - Displays list of products (static data for now)
import ProductItem from './ProductItem'
import useFetchProducts from '../hooks/useFetchProducts'
// const dummyProducts = [
//   { id: 1, title: 'iPhone 9', price: 549 },
//   { id: 2, title: 'iPhone X', price: 899 },
//   { id: 3, title: 'Samsung Galaxy', price: 299 },
// ];

function ProductList() {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <p>Loading products...</p>;
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
    <section className="product-list">
      <h2 className="product-list__heading">All Products</h2>
      <div className="product-list__grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;