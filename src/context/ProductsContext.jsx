import { createContext, useContext } from "react";
import { useProducts } from "./../hooks/useProducts";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const product = useProducts();

  // Filter products by category
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  return (
    <ProductsContext.Provider value={{ product, categories }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("ProductsContext was used outside of ProductsContext");
  return context;
}

export { ProductsProvider, useProduct };
