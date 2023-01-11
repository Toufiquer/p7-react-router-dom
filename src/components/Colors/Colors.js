import React from "react";
import { useColorData } from "../../hooks/useColorData";
import SingleColorList from "./SingleColorList";

const Colors = () => {
  const [dark7, lite7, dark14, lite14] = useColorData();
  const containerStyle = "border-2 border-solid border-blue-800 p-4 flex flex-col justify-center items-center";
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={containerStyle}>
          <h2 className="text-2xl text-semibold text-center my-2 underline">Color For Dark Theme</h2>
          <ul className="w-[400px] flex flex-col items-center">{dark7 && dark7.map((curr) => <SingleColorList key={curr.modelNumber} data={curr}></SingleColorList>)}</ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className=" bg-[#4B0082] ">Theme 1</li>
            <li>Theme 1</li>
            <li>Theme 1</li>
            <li>Theme 1</li>
            <li>Theme 1</li>
            <li>Theme 1</li>
            <li>Theme 1</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Colors;
