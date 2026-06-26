/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "../components/Search";
import SideBar from "../components/SideBar";
import Products from "../components/Products";
import { useSearchParams } from "react-router";
import { setFilters } from "../feature/productsSlice";

function ProductsPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchP = searchParams.get("search") || "";
    const categoryP = searchParams.get("category") || "";
    dispatch(setFilters({ search: searchP, category: categoryP }));
  }, []);

  return (
    <section className="flex flex-col justify-center">
      <Search
        className="flex items-center  
        w-fit 
        border border-secondary rounded-full
        mt-10 pt-2 pb-2 pl-5 pr-5"
      />
      <div className="flex gap-5">
        <Products />
        <SideBar />
      </div>
    </section>
  );
}

export default ProductsPage;
