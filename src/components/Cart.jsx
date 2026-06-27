import Button from "./Button";
import { Link } from "react-router";
import BuySVG from "../assets/BuySVG";
import PlusSVG from "../assets/PlusSVG";
import MinusSVG from "../assets/MinusSVG";
import { useCart } from "../store/cartStore";
import { useShallow } from "zustand/shallow";

function Cart({ product, className }) {
  const items = useCart((state) => state.products);
  const addToCart = useCart(useShallow((state) => state.addToCart));
  const removeFromCart = useCart(useShallow((state) => state.removeFromCart));
  const cartItem = items.find((item) => item.product.id === product.id);

  return (
    <Link
      to={`/products/${product.id}`}
      className={`flex 
      bg-muted overflow-hidden  
      border border-muted rounded-lg
      transition-all duration-300 shrink-0
      @container
      ${className}
      `}
    >
      <div className="w-full h-1/2 @sm:h-full @md:w-2/5 relative aspect-square">
        {product?.images[1] ? (
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
      <div
        className="flex flex-col justify-between h-full p-2
        w-full @md:w-3/5"
      >
        <h3 className="text-md @md:text-sm font-light @md:line-clamp-1 @md:mt-2">
          {product.title}
        </h3>
        <p className="text-sm font-extralight line-clamp-2 mt-2 @md:mt-5">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2 @md:mt-5">
          <div>Price: ${product.price}</div>
          {cartItem ? (
            <Button
              className={`flex items-center gap-2
              w-20 @md:w-24 h-8 @md:h-10 justify-between
              border border-secondary rounded-md`}
              text=""
              onClick={(event) => event.preventDefault()}
            >
              <MinusSVG
                className="h-full p-2 @md:p-3 stroke-secondary"
                onClick={() => removeFromCart(product)}
              />
              {cartItem.qty}
              <PlusSVG
                className="h-full p-2 @md:p-3  stroke-secondary"
                onClick={() => addToCart(product)}
              />
            </Button>
          ) : (
            <Button
              className={`flex items-center gap-2
              w-24 h-10 pl-3 pr-3 justify-center
              border border-secondary rounded-md`}
              text="Add"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                addToCart(product);
              }}
            >
              <BuySVG className="size-5 stroke-secondary" />
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Cart;
