import BreadCrumbs from "../components/BreadCrumbs";
import Button from "../components/Button";
import Cart from "../components/Cart";
import { useCart } from "../store/cartStore";

function CheckoutPage() {
  const products = useCart((state) => state.products);
  const cartItems = useCart((state) => state.cartItems);
  const totalPrice = useCart((state) => state.totalPrice);

  return (
    <>
      <BreadCrumbs path="Products" title="Cart" />
      <section
        className="flex flex-col-reverse md:flex-row
        mt-10 gap-2 min-h-70 animate-fade-in"
      >
        <div className="w-full md:w-1/4 h-fit bg-muted p-2 rounded-lg">
          <div
            className="flex items-center justify-between 
            text-sm font-light"
          >
            <span className="font-extralight">Number of items:</span>{" "}
            {cartItems}
          </div>
          <div
            className="flex items-center justify-between 
            text-sm font-light
            mt-2"
          >
            <span className="font-extralight">Total:</span> ${totalPrice}
          </div>
          <Button
            className="w-full h-10 
          bg-secondary text-primary mt-2
            border border-secondary rounded-md
            enabled:hover:bg-muted enabled:hover:text-secondary
            transition-all duration-150 delay-75
            disabled:opacity-15"
            text="Checkout"
            disabled={cartItems ? false : true}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-3/4">
          {cartItems ? (
            products.map((item) => (
              <Cart
                key={item.product.id}
                product={item.product}
                className="max-h-48"
              />
            ))
          ) : (
            <div
              className="w-full min-h-80 grid place-items-center flex-1
              border border-secondary rounded-md border-dashed font-light"
            >
              Please Choose a product Then back here
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default CheckoutPage;
