import { useEffect, useState } from "react";
// import { useProduct } from "../context/ProductsContext";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // const { query } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []); // Dependency array is empty, fetch only once when component mounts

  async function fetchProducts() {
    let response;
    try {
      // if (query) {
      //   response = query;
      // } else {
      //   response = await fetch("https://dummyjson.com/products");
      // }
      response = await fetch("https://dummyjson.com/products");

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
