import { memo } from "react";
import { useUrlSync } from "../hooks/useUrlSync";
import { useGetCategoriesQuery } from "../api/catalog";
import { setCategory } from "../feature/productsSlice";

function SideBar() {
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  const [categoryParam, setCategoryParam] = useUrlSync(
    "category",
    (state) => state.productFilters,
    setCategory,
  );

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
            ${categoryParam.category === category.name && `border-l-2 border-secondary`}
            text-sm font-light cursor-pointer pl-3
            `}
            onClick={() => setCategoryParam(category.name)}
          >
            {category.name}
          </li>
        ))}
    </ul>
  );
}

export default memo(SideBar);
