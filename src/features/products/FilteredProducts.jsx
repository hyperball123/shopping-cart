import { useState } from "react";
import { useProduct } from "../../context/ProductsContext";
import PriceRangeDropDown from "../../ui/PriceRangeDropDown";

function FilteredProducts({ searchedProducts }) {
  const { categories, query, addToCart } = useProduct();
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
  };

  let filteredProducts = searchedProducts;

  // Filter products based on search query
  if (query) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter products based on selected price range
  if (selectedPriceRange) {
    const [minPrice, maxPrice] = selectedPriceRange.split("-");
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= parseInt(minPrice) &&
        product.price <= parseInt(maxPrice)
    );
  }

  // Render products for each category
  const productRows = categories.map((category) => {
    const categoryProducts = filteredProducts.filter(
      (product) => product.category === category
    );

    if (categoryProducts.length === 0) {
      return null;
    }

    return (
      <div key={category} className="my-8 mx-4">
        <h2 className="text-2xl font-semibold mb-4 uppercase hover:underline cursor-pointer text-center ">
          {category}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md flex flex-col justify-between"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-blue-500">
                    Price: ${product.price}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Discount: {product.discountPercentage}%
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Rating: {product.rating}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Stock: {product.stock}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Brand: {product.brand}
                  </p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-200"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });

  // Render no results message if applicable
  const noResultsMessage =
    query && filteredProducts.length === 0 ? (
      <p className="text-3xl text-center mt-10">No relevant products found😓</p>
    ) : null;

  return (
    <>
      <div className="w-full flex justify-end p-4">
        <PriceRangeDropDown onChange={handlePriceRangeChange} />
      </div>
      {noResultsMessage}
      {productRows}
    </>
  );
}

export default FilteredProducts;
