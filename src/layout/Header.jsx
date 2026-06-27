import { Link } from "react-router";
import HomeSVG from "../assets/HomeSVG";
import BasketSVG from "../assets/BasketSVG";
import { useCart } from "../store/cartStore";
import ToggleButton from "../components/ToggleButton";
import Cart from "../components/Cart";

function Header() {
  const cartProducts = useCart((state) => state.products);
  const cartItems = useCart((state) => state.cartItems);

  return (
    <>
      <header
        className="flex items-center w-full 
        dark:bg-overlay-light
        backdrop-blur-2xl text-secondary
        border-b border-secondary 
        sticky top-0 z-10"
      >
        <div className="mx-auto w-full md:max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link
                to="/"
                className="p-2 -ml-2 hover:bg-muted rounded-full transition-all duration-200"
              >
                <HomeSVG className="size-5 stroke-secondary " />
              </Link>
              <h2 className="text-sm ml-5 ">Hidy Shop</h2>
            </div>
            <div className="flex items-center">
              <ToggleButton />

              <div className="flex relative group">
                <Link
                  to="/checkout"
                  className="
                  p-2  
                  rounded-full 
                  transition-all duration-200
                hover:bg-muted"
                >
                  <BasketSVG className="w-5 h-5 stroke-secondary" />
                  <span
                    className="
                  size-5 flex items-center justify-center
                  border-2 border-primary rounded-full
                  bg-secondary text-primary
                  absolute -top-2 -right-2
                  text-xs font-light 
                  "
                  >
                    {cartItems}
                  </span>
                </Link>
                <div
                  className="hidden group-hover:flex flex-col gap-2 bg-primary
                  w-100 min-h-50 h-fit max-h-140 overflow-y-scroll p-2 absolute top-full right-0
                  border border-secondary rounded-xl"
                >
                  {cartItems ? (
                    cartProducts.map((item) => (
                      <Cart
                        key={item.product.id}
                        product={item.product}
                        className="shrink"
                      />
                    ))
                  ) : (
                    <div
                      className="w-full h-full grid place-items-center flex-1
                    border border-secondary rounded-md border-dashed"
                    >
                      The basket is empty
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
