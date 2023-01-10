import React from "react";
import { AddButton, DetailsButton, RemoveButton } from "../Button/Button";

const Product = ({ product: { id, name, picture, price } }) => {
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
    <div onClick={(e) => handleDetails(e, id)} className="max-w-sm bg-blue-400 p-2 border-2 border-solid border-blue-50 rounded-lg hover:cursor-pointer hover:bg-blue-500 duration-800">
      <img className="w-full rounded-lg h-96 object-cover" src={picture} alt={name} />
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
