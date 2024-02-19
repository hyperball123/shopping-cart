import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import ProductsUi from "../features/products/ProductsUi";
import { NavLink } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";

function Home() {
  const { cart } = useProduct();
  const cartNumber = cart.length;

  return (
    <>
      <header className="flex flex-col gap-2 sm:flex-row items-center justify-between px-4 py-2 shadow-lg sticky ">
        <NavLink to="/cart" className="relative text-lg">
          <span className="absolute -top-2 left-[0.6rem] rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center">
            {cartNumber}
          </span>
          <Logo />
        </NavLink>
        <SearchBar />
      </header>

      <ProductsUi />
    </>
  );
}

export default Home;
