import React from "react";
import { useProducts } from "../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="bg-blue-100 min-h-screen w-full grid grid-cols-1 md:grid-cols-[1fr_400px]">
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
