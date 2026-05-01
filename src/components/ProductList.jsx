// ProductList.jsx - Displays list of products (static data for now)
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "../store/cartSlice";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
// const dummyProducts = [
//   { id: 1, title: 'iPhone 9', price: 549 },
//   { id: 2, title: 'iPhone X', price: 899 },
//   { id: 3, title: 'Samsung Galaxy', price: 299 },
// ];

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
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

      {/* Search Bar - Redux state update karo */}
      <div className="product-list__search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="product-list__search-input"
        />
      </div>

      {/* Agar koi product nahi mila */}
      {filteredProducts.length === 0 ? (
        <p className="product-list__no-result">
          No products found for "<strong>{searchQuery}</strong>"
        </p>
      ) : (
        <div className="product-list__grid">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
