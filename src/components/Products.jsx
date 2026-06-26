import Cart from "../components/Cart";
import Error from "../components/Error";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { setLimit } from "../feature/productsSlice";
import { useGetProductsQuery } from "../api/catalog";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const { limit, offset } = useSelector((state) => state.productFilters);
  const {
    data: products,
    isLoading,
    isError,
    isFetching,
  } = useGetProductsQuery({ limit, offset });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div
      className="flex flex-col items-center
          md:w-3/4 mt-10"
    >
      <div
        className="grid 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            auto-rows-auto gap-5 content-center
            "
      >
        {!isLoading &&
          products.map((item) => <Cart key={item.id} product={item} />)}
      </div>
      <Button
        isLoading={isFetching}
        text="Load More"
        clickHandler={(e) => {
          e.preventDefault();
          dispatch(setLimit());
        }}
      />
    </div>
  );
}

export default Products;
