import React, { useContext } from "react";
import { ThemeMode } from "../../App";
import { AddButton, DetailsButton, RemoveButton } from "../Button/Button";

const Product = ({ product: { id, name, picture, price } }) => {
  const [theme] = useContext(ThemeMode);
  const handAdd = (event, id) => {
    event.stopPropagation();
    console.log("Add", id, " => Line No: 6");
  };
  const handleRemove = (event, id) => {
    event.stopPropagation();
    console.log("Remove", id, " => Line No: 10");
  };
  const handleDetails = (event, id) => {
    event.stopPropagation();
    console.log("details", id, " => Line No: 10");
  };
  return (
    <div onClick={(e) => handleDetails(e, id)} className={`max-w-sm bg-[#4338ca] p-2 border-2 border-solid border-blue-50 rounded-lg hover:cursor-pointer  duration-800 ${theme ? " hover:bg-[#191970] " : " hover:bg-[#191970]"}`}>
      <img className={`w-full rounded-lg h-96 object-cover ${!theme ? "brightness-100" : "brightness-50"}`} src={picture} alt={name} />
      <h2 title={name} className="text-xl py-1">
        Name: {name.length >= 14 ? name.slice(0, 14) : name}
      </h2>
      <h2 className="text-xl py-1">Price: ${price}</h2>
      <div className="flex w-full justify-evenly">
        <AddButton id={id} handler={handAdd}>
          Add
        </AddButton>
        <RemoveButton id={id} handler={handleRemove}>
          Remove
        </RemoveButton>
        <DetailsButton id={id} handler={handleDetails}>
          Details
        </DetailsButton>
      </div>
    </div>
  );
};

export default Product;
