import React from "react";
import { useProduct } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useProduct();
  const cartProducts = cart;

  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="container mx-auto mt-8 px-2">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <Link to="/" className="block mt-4 text-blue-500 hover:underline">
        &larr; Back to Home
      </Link>
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="flex items-center border-b border-gray-300 py-4"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-16 h-16 mr-4"
          />
          <div>
            <p className="text-lg font-semibold">{product.title}</p>
            <p className="text-gray-600">${product.price}</p>
          </div>
          <button
            className="text-lg ml-auto bg-gray-200 hover:bg-gray-400 transition-all duration-300 rounded-full p-4"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      ))}
      {cartProducts.length === 0 && (
        <p className="text-2xl text-center">Your cart is empty.</p>
      )}
      {cartProducts.length > 0 && (
        <div className="flex justify-between mt-8">
          <p className="text-xl font-semibold">Total Amount: ${totalAmount}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
