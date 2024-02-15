import { useProduct } from "../../context/ProductsContext";

function ProdctsUi() {
  // Got this from the productsContext i created for passing data through components
  const { product, categories } = useProduct();

  // Check if product data is not yet available
  if (!product) {
    return <p className="text-3xl text-center mt-10">🧐Loading...🧐</p>;
  }

  if (!product.products || product.products.length === 0) {
    return <p className="text-3xl text-center mt-10">No products found😓</p>;
  }

  // Render products for each category
  const productRows = categories.map((category) => {
    const categoryProducts = product?.products?.products.filter(
      (product) => product.category === category
    );

    return (
      <div key={category} className="my-8 mx-4">
        <h2 className="text-2xl font-semibold mb-4 uppercase hover:underline cursor-pointer text-center ">
          {category}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    );
  });

  return <main className="overflow-auto">{productRows}</main>;
}

export default ProdctsUi;
