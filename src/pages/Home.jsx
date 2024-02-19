import Logo from "../ui/Logo";
import ProductsUi from "../features/products/ProductsUi";
import { NavLink } from "react-router-dom";
import { useProduct } from "../context/ProductsContext";
import SearchBar from "../ui/SearchBar";

function Home() {
  const { cart } = useProduct();
  const cartNumber = cart.length;

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    // Refresh the page to log out
    window.location.reload();
  };

  return (
    <>
      <header className="flex flex-col gap-2 sm:flex-row items-center justify-between px-4 py-2 shadow-lg sticky">
        <NavLink to="/cart" className="relative text-lg">
          <span className="absolute -top-2 left-[0.6rem] rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center">
            {cartNumber}
          </span>
          <Logo />
        </NavLink>

        <SearchBar />

        <div className="mt-3 sm:mt-0">
          <button
            onClick={handleLogout}
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      <ProductsUi />
    </>
  );
}

export default Home;
