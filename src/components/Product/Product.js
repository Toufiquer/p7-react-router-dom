import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeMode, ThemeMode2 } from "../../App";
import { useProducts } from "../../hooks/useProducts";
import { AddButton, DetailsButton, RemoveButton } from "../Button/Button";
import { addToCart, removeFromCart } from "../utilities/eventHandler";
import { getProductById, getProductsById } from "../utilities/getProductById";
import { getItem } from "../utilities/manageDB";

const Product = ({ setCartProducts, cartProducts, product: { id, name, picture, price } }) => {
  const products = useProducts();
  const navigate = useNavigate();
  const [theme] = useContext(ThemeMode);
  const handAdd = (event, id) => {
    event.stopPropagation();
    addToCart(id);
    const product = getProductById(id, products);
    const updateCartProducts = [...cartProducts, product];
    setCartProducts(updateCartProducts);
  };
  const handleRemove = (event, id) => {
    event.stopPropagation();
    removeFromCart(id);

    const updateCartProducts = cartProducts.filter((curr) => curr.id !== id);
    console.log(updateCartProducts, id, cartProducts, " => Line No: 26");
    setCartProducts(updateCartProducts);
  };
  const handleDetails = (event, id) => {
    event.stopPropagation();
    navigate(`/products/${id}`);
  };
  const [theme2] = useContext(ThemeMode2);
  const { backgroundI, borderI, text } = theme2;
  return (
    <div onClick={(e) => handleDetails(e, id)} className={`max-w-sm  p-2 ${borderI}  duration-800  ${backgroundI}`}>
      <img className={`w-full rounded-sm h-96 object-cover ${!theme === "dark" ? "brightness-100" : "brightness-50"}`} src={picture} alt={name} />
      <h2 title={name} className={`${text} text-2xl`}>
        Name: {name.length >= 14 ? name.slice(0, 14) : name}
      </h2>
      <h2 className={`${text} text-3xl font-extralight`}>Price: ${price}</h2>
      <div className="flex w-full justify-evenly flex-col">
        <div className="flex w-full justify-evenly my-1 gap-1">
          <AddButton id={id} handler={handAdd}>
            Add
          </AddButton>
          <RemoveButton id={id} handler={handleRemove}>
            Remove
          </RemoveButton>
        </div>
        <div>
          <DetailsButton id={id} handler={handleDetails}>
            Details
          </DetailsButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
