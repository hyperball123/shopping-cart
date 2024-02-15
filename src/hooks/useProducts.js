import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []); // Dependency array is empty, fetch only once when component mounts

  async function fetchProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError("Products fetch failed");
      console.error("Products fetch failed", error);
    }
  }

  return { products, error };
}
