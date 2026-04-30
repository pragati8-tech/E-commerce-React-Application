// useFetchProducts.js - Custom hook to fetch product list from API

import { useState, useEffect } from 'react';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []); 

  return { products, loading };
}

export default useFetchProducts;