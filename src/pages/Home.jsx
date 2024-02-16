import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import ProductsUi from "../features/products/ProductsUi";

function Home() {
  return (
    <>
      <header className="flex flex-col gap-2 sm:flex-row items-center justify-between px-4 py-2 shadow-lg sticky ">
        <Logo />
        <SearchBar />
      </header>
      
      <ProductsUi />
    </>
  );
}

export default Home;
