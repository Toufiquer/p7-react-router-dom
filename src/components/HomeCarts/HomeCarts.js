import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";
import useScroll from "../../hooks/useScroll";
import SummaryCart from "../SummaryCart/SummaryCart";

const HomeCarts = ({ products }) => {
  const { scrollDirection } = useScroll();
  const [theme2] = useContext(ThemeMode2);
  const { backgroundII, border, text } = theme2;

  return (
    <div className={`min-h-screen ${backgroundII} relative p-4`}>
      <div className={` ${border} min-h-[400px] sticky ${scrollDirection !== "down" ? "top-[65px]" : "top-[10px]"} `}>
        <h2 className={`${text} text-center text-2xl my-2`}>Summary</h2>
        <div className="flex flex-col">{products.length >= 1 ? <SummaryCart name={"Products"} value={products.length} /> : <SummaryCart empty={true}></SummaryCart>}</div>
      </div>
    </div>
  );
};

export default HomeCarts;
