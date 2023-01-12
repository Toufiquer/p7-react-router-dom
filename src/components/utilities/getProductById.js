const getProductById = (id, products) => {
  let product = products.find((curr) => curr.id === id);
  if (product) {
    return product;
  } else {
    return (product = {});
  }
};
export { getProductById };
