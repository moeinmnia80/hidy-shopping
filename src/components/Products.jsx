import Cart from "../components/Cart";
import Error from "../components/Error";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { setLimit } from "../feature/productsSlice";
import { useGetProductsQuery } from "../api/catalog";
import { useDispatch, useSelector } from "react-redux";
import { setProductsFilter } from "../utils/utils";

function Products() {
  const dispatch = useDispatch();
  const { search, category, limit, offset } = useSelector(
    (state) => state.productFilters,
  );
  const {
    data: products,
    isLoading,
    isError,
    isFetching,
  } = useGetProductsQuery({ limit, offset });

  const filteredProducts = products
    ? setProductsFilter(products, search, category)
    : null;

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="flex flex-col items-center md:w-3/4 mt-10">
      <div
        className="grid w-full
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        auto-rows-auto gap-2 content-center @container"
      >
        {!isLoading && filteredProducts.length ? (
          filteredProducts.map((item) => <Cart key={item.id} product={item} />)
        ) : (
          <div
            className="w-full col-span-3 
            grid place-items-center h-85
            border border-secondary rounded-md"
          >
            No products found.
          </div>
        )}
      </div>
      <Button
        className={`${filteredProducts ? "flex" : "hidden"}
        w-36 h-12 mt-10 justify-center
        border border-secondary rounded-md
        transition duration-200 delay-75`}
        isLoading={isFetching}
        text="Load More"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setLimit());
        }}
      />
    </div>
  );
}

export default Products;
