import { GiShoppingCart } from "react-icons/gi";
import Logo from "../../ui/Logo";

import LoginForm from "./LoginForm";

function LoginUi() {
  return (
    <>
      <header className="hidden sm:block px-4 py-2 border-b">
        <Logo />
      </header>

      <section className="h-full max-w[400px] sm:max-w-[700px] my-6 mx-[1rem] sm:mx-auto">
        <h1 className="text-center text-xl font-semibold sm:text-3xl flex justify-center items-center gap-2">
          Welcome to Shopping-cart
          <GiShoppingCart className="h-[2rem] w-[1.8rem] sm:h-[2.4rem] sm:w-[2.4rem]" />
        </h1>
        <p className="text-sm pt-2 text-center">Sign in to continue.</p>
        <div className="mt-4 px-2">
          <LoginForm />
        </div>
      </section>
    </>
  );
}

export default LoginUi;
