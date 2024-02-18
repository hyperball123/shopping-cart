import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true); // Set loading state to true before fetching

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
    } finally {
      setLoading(false); // Set loading state to false after fetching (success or error)
    }
  }

  return { products, loading, error }; // Include loading state in the return value
}
