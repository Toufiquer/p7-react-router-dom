const getProductById = (id, products) => {
  let product = products.find((curr) => curr.id === id);
  if (product) {
    return product;
  } else {
    return (product = {});
  }
};
const getProductsById = (ids, products) => {
  const allProducts = [];
  for (let id in ids) {
    const product = products.find((curr) => curr.id === id);
    if (product) {
      allProducts.push(product);
    }
  }
  return allProducts;
};
export { getProductById, getProductsById };
