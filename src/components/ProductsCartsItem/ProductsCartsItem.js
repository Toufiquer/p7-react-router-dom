import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";

const ProductsCartsItem = ({ product, empty = false }) => {
  const [theme2] = useContext(ThemeMode2);
  const { text, border } = theme2;
  if (empty) {
    return (
      <div className={`w-[320px] ${text} ${border} p-2 mx-auto mt-2 flex`}>
        <h2>Ops! Nothing Was found. Please Add Some Products</h2>
      </div>
    );
  } else {
    const { picture, name, price } = product;
    return (
      <div className={`w-[320px] ${text} ${border} p-2 mx-auto mt-2 flex`}>
        <img className="w-12 h-12 bg-cover mr-2" src={picture} alt={name} />
        <div className="flex justify-between w-full items-center cursor-pointer">
          <div>
            <h2 className="font-semibold" title={name}>
              {name.slice(0, 24)}
            </h2>
            <p>Price: ${price}</p>
          </div>
          <div>
            <InformationCircleIcon className="w-6 h-6"></InformationCircleIcon>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductsCartsItem;
