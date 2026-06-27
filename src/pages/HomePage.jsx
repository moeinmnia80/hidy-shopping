import { Link } from "react-router";
import ChevronRIght from "../assets/ChevronRIght";

function HomePage() {
  return (
    <section className="flex flex-col h-[55dvh] mt-10 animate-fade-in">
      <div className="flex items-center gap-2 mb-5 text-sm font-light">
        <ChevronRIght className="w-4 h-4 stroke-secondary" />
        <Link to="/products">Products</Link>
      </div>
    </section>
  );
}

export default HomePage;
