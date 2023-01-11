import React from "react";
import { useColorData } from "../../hooks/useColorData";
import SingleColorList from "./SingleColorList";

const Colors = () => {
  const [dark7, setDark7, lite14, dark14] = useColorData();
  console.log(dark7, setDark7, lite14, dark14, " => Line No: 7");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <ul>
            <li>Theme 1 {<SingleColorList color={"darkFirst"}></SingleColorList>}</li>
            <li>Theme 1 {}</li>
            <li>Theme 1 {}</li>
            <li>Theme 1 {}</li>
            <li>Theme 1 {}</li>
            <li>Theme 1 {}</li>
            <li>Theme 1 {}</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li>Theme 1</li>
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
