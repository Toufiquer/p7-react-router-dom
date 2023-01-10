import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { DetailsPage } from "../Button/Button";
import Product from "../Product/Product";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const HomeContainer = () => {
  const [products] = useProducts();
  const customProducts = [...products];
  customProducts.length = 3;
  const navigate = useNavigate();
  return (
    <div className="p-4">
      {/* Display 3 Products in home page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ">
        {customProducts.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <div className="w-full flex justify-center mt-4">
        {" "}
        <DetailsPage className="h-4 flex justify-center " path="/products" navigate={navigate}>
          <h2 className="inline">View More</h2>
          <ArrowRightIcon className="h-4 inline ml-4" />
        </DetailsPage>
      </div>
    </div>
  );
};

export default HomeContainer;
