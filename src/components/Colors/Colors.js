import React from "react";
import SingleColorList from "./SingleColorList";

const Colors = () => {
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
