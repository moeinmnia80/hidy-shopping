export const setProductsFilter = (products, search, category) => {
  let filteredProducts = products.filter((product) => {
    const searchText = search.trim().toLowerCase().split(" ");
    const productTitle = product.title.trim().toLowerCase();
    return !search
      ? product
      : searchText.some((word) => productTitle.includes(word));
  });
  filteredProducts = filteredProducts.filter((product) => {
    const categoryText = category.toLowerCase();
    const productCategory = product.category.name.toLowerCase();
    return !category ? product : categoryText === productCategory;
  });
  return filteredProducts;
};

// Cart Store
export const calculateCart = (products) => {
  if (!products.length) {
    return { cartItems: 0, totalPrice: 0 };
  }
  console.log(products, products.length);
  products[0].product.price;
  const cartItems = products.reduce((acc, cur) => acc + cur.qty, 0);
  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.qty * cur.product.price,
    0,
  );

  return {
    cartItems,
    totalPrice: Number(totalPrice.toFixed(2)),
  };
};
