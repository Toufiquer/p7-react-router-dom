const getItem = (name) => {
  let cart = localStorage.getItem(name);
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = {};
  }
  return cart;
};
const saveToDB = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
const addToDB = (id) => {
  const cart = getItem("Theme-Bar-Cart");
  let quantity = cart[id];
  if (quantity) {
    quantity += 1;
  } else {
    quantity = 1;
  }
  cart[id] = quantity;
  saveToDB("Theme-Bar-Cart", cart);
};
const removeFromDB = (id) => {
  const cart = getItem("Theme-Bar-Cart");
  let quantity = cart[id];
  if (quantity === 1) {
    delete cart[id];
  } else if (quantity > 1) {
    quantity -= 1;
    cart[id] = quantity;
  }
  saveToDB("Theme-Bar-Cart", cart);
};
const addUserToDB = (id) => {
  const cart = getItem("Theme-Users");
  let quantity = cart[id];
  if (quantity) {
    return;
  } else {
    quantity = 1;
  }
  cart[id] = quantity;
  saveToDB("Theme-Users", cart);
};
const removeUserFromDB = (id) => {
  const cart = getItem("Theme-Users");
  let quantity = cart[id];
  if (quantity === 1) {
    delete cart[id];
  }
  saveToDB("Theme-Users", cart);
};
export { getItem, addToDB, removeFromDB, removeUserFromDB, addUserToDB };
