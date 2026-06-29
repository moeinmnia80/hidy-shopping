import { memo } from "react";
import { useDispatch } from "react-redux";
import { useUrlSync } from "../hooks/useUrlSync";
import { useGetCategoriesQuery } from "../api/catalog";
import { setCategory, setFilters } from "../feature/productsSlice";

function SideBar() {
  const dispatch = useDispatch();
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  const [data, setData] = useUrlSync(
    "category",
    (state) => state.productFilters,
    setCategory,
  );
  const setCategoryHandler = (category) => {
    dispatch(setFilters({ search: data.search, category: "" }));
    setData(category);
  };
  return (
    <ul
      className={`hidden
      ${isLoading ? "hidden" : "md:flex"} flex-col gap-2
      sticky top-25 w-1/4 h-fit bg-muted
      border border-secondary rounded-md
      mt-10 p-5 
      overflow-hidden`}
    >
      {!isLoading &&
        categories?.map((category) => (
          <li
            key={category.id}
            className={`
            ${data.category === category.name && `border-l-2 border-secondary`}
            text-sm font-light cursor-pointer pl-3
            `}
            onClick={() => setCategoryHandler(category.name)}
          >
            {category.name}
          </li>
        ))}
    </ul>
  );
}

export default memo(SideBar);
