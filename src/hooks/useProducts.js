import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/products.json").then((data) => setProducts(data.data));
  }, []);
  return [products, setProducts];
};
