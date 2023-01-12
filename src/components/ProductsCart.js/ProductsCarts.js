import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeMode2 } from "../../App";
import { useProducts } from "../../hooks/useProducts";
import useScroll from "../../hooks/useScroll";
import { DetailsPage } from "../Button/Button";
import ProductsCartsItem from "../ProductsCartsItem/ProductsCartsItem";
const ProductsCarts = () => {
  const { scrollDirection } = useScroll();
  const [products] = useProducts();
  products.length = 4;
  const navigate = useNavigate();
  const [theme2] = useContext(ThemeMode2);
  const { backgroundII, border, text } = theme2;
  return (
    <div className={`min-h-screen ${backgroundII} relative p-4`}>
      <div className={` ${border} min-h-[430px] sticky ${scrollDirection !== "down" ? "top-[65px]" : "top-[10px]"} `}>
        <h2 className={`${text} text-center text-2xl my-2`}>Products Carts</h2>
        <p className={`${text} text-center `}>
          Total Products in Cart: {"12"} And Total Item {"4"}
        </p>
        <div className="flex flex-col">
          {products.length >= 1 ? products.map((curr) => <ProductsCartsItem key={curr.id} product={curr}></ProductsCartsItem>) : <ProductsCartsItem empty="true"></ProductsCartsItem>}
          {products.length >= 4 && (
            <div className=" w-3/4 flex justify-center my-4 mx-auto">
              <DetailsPage className="h-4 flex justify-center" path="/products" navigate={navigate}>
                <h2 className="inline">Cart Details</h2>
                <ArrowRightIcon className="h-4 inline ml-4" />
              </DetailsPage>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCarts;
