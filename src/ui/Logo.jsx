import { GiShoppingCart } from "react-icons/gi";

function Logo() {
  return (
    <h3 className="text-2xl font-semibold flex items-center gap-4 cursor-pointer">
      <span>
        <GiShoppingCart className="h-[2.4rem] w-[2.4rem]" />
      </span>
      <span>Shopping-Cart</span>
    </h3>
  );
}

export default Logo;
