import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeMode2 } from "../../App";
import { useProducts } from "../../hooks/useProducts";
import { getProductById } from "../utilities/getProductById";
import { DetailsPage } from "../Button/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { name, picture, price, details } = product;
  const [products] = useProducts();
  const id = useParams();
  useEffect(() => {
    const product = getProductById(id.id, products);
    setProduct(product);
  }, [id, products]);
  const [theme2] = useContext(ThemeMode2);
  const { text, card, background, border } = theme2;
  console.log(product, " => Line No: 20");
  return (
    <div className={`${background} m-0 min-h-screen py-12`}>
      {product ? (
        <div className={` ${card} ${border} max-w-[600px] min-h-[400px] mx-auto my-4 p-2 py-8`}>
          <img src={picture} alt={name} />
          <h2 className={` ${text} text-3xl font-bold mt-8`}>Name: {name}</h2>
          <h2 className={` ${text} text-3xl font-100 mt-4`}>Price: ${price}</h2>
          <p className={` ${text} text-xl mt-4`}>
            <span className="font-bold">Details:</span> {details || "Nothing was Found!"}
          </p>
        </div>
      ) : (
        <div className={`text-3xl text-center ${text} my-4`}>Ops! Nothing Was Found.</div>
      )}
      <div className="w-full flex justify-center mt-4">
        <DetailsPage className="h-4 flex justify-center " path="/" navigate={navigate}>
          <ArrowLeftIcon className="h-4 inline mx-4" />
          <h2 className="inline">Back To Home</h2>
        </DetailsPage>
      </div>
    </div>
  );
};

export default ProductDetails;
