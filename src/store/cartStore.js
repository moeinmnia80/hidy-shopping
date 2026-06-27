import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateCart } from "../utils/utils";

export const useCart = create(
  persist(
    (set, get) => ({
      products: [],
      cartItems: 0,
      totalPrice: 0,

      addToCart: (product) => {
        // get state
        const { products } = get();
        // check
        const exists = products.find((item) => item.product.id === product.id);
        //
        const updatedProducts = exists
          ? products.map((item) =>
              item.product.id === product.id
                ? { ...item, qty: item.qty + 1 }
                : item,
            )
          : [...products, { product, qty: 1 }];

        set({
          products: updatedProducts,
          ...calculateCart(updatedProducts),
        });
      },
      removeFromCart: (product) => {
        // get state
        const { products } = get();
        // check
        const exists = products.find((item) => item.product.id === product.id);
        //
        const updatedProducts =
          exists.qty > 1
            ? products.map((item) =>
                item.product.id === product.id
                  ? { ...item, qty: item.qty - 1 }
                  : item,
              )
            : products.filter((item) => item.product.id !== product.id);

        set({
          products: updatedProducts,
          ...calculateCart(updatedProducts),
        });
      },
    }),
    { name: "cart-store" },
  ),
);
