import { Link } from "react-router";
function Cart({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex flex-col
      bg-muted overflow-hidden  
      border border-muted rounded-lg
      transition-all duration-300
      hover:scale-105"
    >
      <div className="w-full relative aspect-square">
        {product.images[1] ? (
          <img
            loading="eager"
            fetchPriority="low"
            className="w-full h-full object-cover "
            src={product.images[1]}
            alt=""
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
        <span className="absolute top-1 left-1 bg-overlay border border-muted rounded-md text-[8px] font-light p-1">
          {product.category.name}
        </span>
        <span className="absolute top-7 left-1 bg-red-100 border border-red-300 rounded-md text-[8px] font-light p-1">
          50%
        </span>
      </div>
      <div className="flex flex-col justify-between h-full p-2">
        <h3 className="text-sm font-light line-clamp-1 mt-2">
          {product.title}
        </h3>
        <p className="text-sm font-extralight line-clamp-2 mt-5">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-5">
          <div>Price: ${product.price}</div>
          <button></button>
        </div>
      </div>
    </Link>
  );
}

export default Cart;
