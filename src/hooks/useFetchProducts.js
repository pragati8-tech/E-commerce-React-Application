// useFetchProducts.js - Custom hook to fetch product list from API

import { useState, useEffect } from 'react';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    
    fetch('https://dummyjson.com/products')
      .then((res) => {
        // agar response ok nahi hai to error throw karo
        if (!res.ok) {
          throw new Error('Failed to fetch products. Please try again.');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      }).catch((err) => {
        // error ko state mein store karo
        setError(err.message);
        setLoading(false);
      })
  }, []); 

  return { products, loading, error };
}

export default useFetchProducts;