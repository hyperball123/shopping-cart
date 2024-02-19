import { createContext, useContext, useState } from "react";
import { useProducts } from "./../hooks/useProducts";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const { products, error, loading } = useProducts();
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.title + " was added to the cart");
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  return (
    <ProductsContext.Provider
      value={{
        loading,
        error,
        products,
        categories,
        query,
        setQuery,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
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
