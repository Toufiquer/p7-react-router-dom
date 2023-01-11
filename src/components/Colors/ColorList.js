import React from "react";
import { copyTextToClipboard } from "../utilities/copyTextToClipboard";
import ColorBox from "./ColorBox";

const ColorList = ({ styleColor, data, children }) => {
  const colorCode = data.split("-")[1];

  return (
    <li onClick={() => copyTextToClipboard(colorCode)} title="click to copy #[hex]" className={styleColor}>
      {data.split("-")[0]} <ColorBox data={colorCode}></ColorBox>
      {children}
    </li>
  );
};

export default ColorList;
