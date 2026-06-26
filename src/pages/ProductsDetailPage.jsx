import Error from "../components/Error";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import BreadCrumbs from "../components/BreadCrumbs";
import { useGetProductsByIdQuery } from "../api/catalog";

function ProductsDetailPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductsByIdQuery({ id });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      <BreadCrumbs path="product" title={product?.title} />
      <div
        className="flex items-center justify-center 
        w-full mt-10"
      >
        <div className="w-2/5 h-full">
          {product?.images[1] ? (
            <img
              loading="eager"
              fetchPriority="low"
              className="w-full h-full object-cover rounded-xl"
              src={product.images[1]}
              alt={product.title}
            />
          ) : (
            <div
              className="
              flex items-center justify-center
              w-full h-full bg-muted"
            >
              Picture
            </div>
          )}
        </div>
        <div className="w-3/5 h-full p-10">
          <h3 className="text-5xl font-bold">{product?.title}</h3>
          <p className="text-md text-justify font-light mt-5">
            {product?.description}
          </p>
          <p className="text-xl font-bold mt-5">${product?.price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default ProductsDetailPage;
