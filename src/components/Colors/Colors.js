import React from "react";
import { useColorData } from "../../hooks/useColorData";
import SingleColorList from "./SingleColorList";

const Colors = () => {
  const [dark7, light7, dark14, light14] = useColorData();
  const containerStyle = "border-2 border-solid border-blue-800 p-4 flex flex-col justify-center items-center";
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={containerStyle}>
          <h2 className="text-2xl text-semibold text-center my-2 underline">Color For Dark Theme</h2>
          <ul className="w-[400px] flex flex-col items-center">{dark7 && dark7.map((curr) => <SingleColorList key={curr.modelNumber} data={curr}></SingleColorList>)}</ul>
          <ul className="w-[400px] flex flex-col items-center">{dark14 && dark14.map((curr) => <SingleColorList key={curr.modelNumber} data={curr}></SingleColorList>)}</ul>
        </div>
        <div className={containerStyle}>
          <h2 className="text-2xl text-semibold text-center my-2 underline">Color For Light Theme</h2>
          <ul className="w-[400px] flex flex-col items-center">{light7 && light7.map((curr) => <SingleColorList key={curr.modelNumber} data={curr}></SingleColorList>)}</ul>
          <ul className="w-[400px] flex flex-col items-center">{light14 && light14.map((curr) => <SingleColorList key={curr.modelNumber} data={curr}></SingleColorList>)}</ul>
        </div>
      </div>
    </>
  );
};

export default Colors;
