const getItem = () => {
  let cart = localStorage.getItem("Theme-Bar-Cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = {};
  }
  return cart;
};
const saveToDB = (data) => {
  localStorage.setItem("Theme-Bar-Cart", JSON.stringify(data));
};
const addToDB = (id) => {
  const cart = getItem();
  let quantity = cart[id];
  if (quantity) {
    quantity += 1;
  } else {
    quantity = 1;
  }
  cart[id] = quantity;
  saveToDB(cart);
};
const removeFromDB = (id) => {
  const cart = getItem();
  let quantity = cart[id];
  if (quantity === 1) {
    delete cart[id];
  } else if (quantity > 1) {
    quantity -= 1;
    cart[id] = quantity;
  }
  saveToDB(cart);
};
export { getItem, addToDB, removeFromDB };
