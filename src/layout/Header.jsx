import { Link } from "react-router";
import HomeSVG from "../assets/HomeSVG";
import BasketSVG from "../assets/BasketSVG";
import ToggleButton from "../components/ToggleButton";

function Header() {
  return (
    <>
      <header className="flex items-center w-full bg-overlay backdrop-blur-2xl border-b border-secondary sticky top-0 z-10">
        <div className="mx-auto w-full md:max-w-2xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">
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

              <Link
                to="/checkout"
                className="p-2 hover:bg-muted rounded-full transition-all duration-200"
              >
                <BasketSVG className="w-5 h-5 stroke-secondary" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
