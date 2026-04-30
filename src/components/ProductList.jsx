// ProductList.jsx - Displays list of products (static data for now)

const dummyProducts = [
  { id: 1, title: 'iPhone 9', price: 549 },
  { id: 2, title: 'iPhone X', price: 899 },
  { id: 3, title: 'Samsung Galaxy', price: 299 },
];

function ProductList() {
  return (
    <section className="product-list">
      <h2 className="product-list__heading">All Products</h2>
      <ul>
        {dummyProducts.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;