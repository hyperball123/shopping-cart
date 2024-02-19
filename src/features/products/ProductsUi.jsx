import { useProduct } from "../../context/ProductsContext";
import FilteredProducts from "./FilteredProducts";

function ProdctsUi() {
  const { products, error, loading } = useProduct();

  if (loading) {
    return <p className="text-3xl text-center mt-10">🧐 Loading... 🧐</p>;
  }

  if (error) {
    return <p className="text-3xl text-center mt-10">Error: {error.message}</p>;
  }

  if (!products.products || products.products.length === 0) {
    return <p className="text-3xl text-center mt-10">No products found 😓</p>;
  }

  const selectedProducts = products.products;

  return (
    <main className="overflow-auto">
      <FilteredProducts searchedProducts={selectedProducts} />
    </main>
  );
}

export default ProdctsUi;
