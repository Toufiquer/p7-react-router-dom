import React, { useContext, useEffect, useState } from "react";
import { ThemeMode2 } from "../../App";
import { useProducts } from "../../hooks/useProducts";
import HomeCarts from "../HomeCarts/HomeCarts";
import HomeContainer from "../HomeContainer/HomeContainer";
import { getItem } from "../utilities/manageDB";
import { getProductsById } from "../utilities/getProductById";
const Home = () => {
  const [products] = useProducts();
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const getStoredCart = getItem("Theme-Bar-Cart");
    const storedProducts = getProductsById(getStoredCart, products);
    setCartProducts(storedProducts);
  }, [products]);
  const [theme2] = useContext(ThemeMode2);
  const { background } = theme2;
  return (
    <div className={`${background}  min-h-screen w-full grid grid-cols-1 md:grid-cols-[1fr_400px]`}>
      <HomeContainer cartProducts={cartProducts} setCartProducts={setCartProducts}></HomeContainer>
      <HomeCarts products={cartProducts}></HomeCarts>
    </div>
  );
};

export default Home;
