import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";
import { useProducts } from "../../hooks/useProducts";
import Product from "../Product/Product";
import ProductsCarts from "../ProductsCart.js/ProductsCarts";

const Products = () => {
  const [products] = useProducts();
  const [theme2] = useContext(ThemeMode2);
  const { background } = theme2;
  return (
    <div className={`${background} bg-blue-100 min-h-screen w-full grid grid-cols-1 md:grid-cols-[1fr_400px]`}>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
      <ProductsCarts></ProductsCarts>
    </div>
  );
};

export default Products;
