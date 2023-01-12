import { addToDB, removeFromDB } from "./manageDB";

const addToCart = (id) => {
  addToDB(id);
};
const removeFromCart = (id) => {
  removeFromDB(id);
};

export { addToCart, removeFromCart };
