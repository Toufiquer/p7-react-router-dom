import React from "react";
import { useProducts } from "../../hooks/useProducts";
import Product from "../Product/Product";

const HomeContainer = () => {
  const [products] = useProducts();
  const customProducts = [...products];
  customProducts.length = 3;
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ">
        {customProducts.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
