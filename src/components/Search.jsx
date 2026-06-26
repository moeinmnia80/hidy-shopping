import { memo } from "react";
import SearchSVG from "../assets/SearchSVG";
import { useUrlSync } from "../hooks/useUrlSync";
import { setSearch as setSearchQuery } from "../feature/productsSlice";

function Search(props) {
  const [searchParam, setSearchParam] = useUrlSync(
    "search",
    (state) => state.productFilters,
    setSearchQuery,
  );
  const changeHandler = (event) => {
    const value = event.target.value;
    setSearchParam(value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={props.className}>
      <input
        className="w-full max-w-60
        font-extralight text-md 
        outline-none"
        type="search"
        name="search"
        aria-label="search"
        value={searchParam.search}
        onChange={changeHandler}
      />
      <SearchSVG
        className="
        size-7 stroke-secondary 
        pl-2 ml-1
        border-l border-secondary"
      />
    </form>
  );
}

export default memo(Search);
