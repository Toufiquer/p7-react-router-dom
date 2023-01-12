import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";
import { useProducts } from "../../hooks/useProducts";
import ProductsCartsItem from "../ProductsCartsItem/ProductsCartsItem";

const ProductsCarts = () => {
  const [products] = useProducts();
  products.length = 4;

  const [theme2] = useContext(ThemeMode2);
  const { backgroundII, border, text } = theme2;
  return (
    <div className={`min-h-screen ${backgroundII} relative p-4`}>
      <div className={` ${border} min-h-[400px] sticky top-[65px]`}>
        <h2 className={`${text} text-center text-2xl my-2`}>Products Carts</h2>
        <p className={`${text} text-center `}>
          Total Products in Cart: {"12"} And Total Item {"4"}
        </p>
        <div className="flex flex-col">{products.length >= 1 ? products.map((curr) => <ProductsCartsItem key={curr.id} product={curr}></ProductsCartsItem>) : <ProductsCartsItem empty="true"></ProductsCartsItem>}</div>
      </div>
    </div>
  );
};

export default ProductsCarts;
