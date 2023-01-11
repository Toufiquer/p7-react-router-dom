import React, { useState } from "react";
import { copyTextToClipboard } from "../utilities/copyTextToClipboard";
import ColorBox from "./ColorBox";

const ColorList = ({ styleColor, data }) => {
  const [tooltipTime, setTooltipTime] = useState(false);
  const colorCode = data.split("-")[1];
  const showTooltip = () => {
    setTooltipTime(!tooltipTime);
    setTimeout(() => {
      setTooltipTime(tooltipTime);
    }, 1300);
  };
  const styleTooltip = "w-[240px] h-6 bg-red-600 absolute top-[-25px] flex item s-center justify-center ";
  const tooltip = <div className={`${tooltipTime ? " block " : " hidden "} + ${styleTooltip}`}>Code has been copied {colorCode}</div>;
  return (
    <li
      onClick={() => {
        copyTextToClipboard(colorCode);
        showTooltip();
      }}
      title="click to copy #[hex]"
      className={styleColor + " bg-blue-200 hover:bg-blue-500"}
    >
      <span className="w-[80px]">{data.split("-")[0]}</span> <ColorBox data={colorCode}></ColorBox>
      {tooltip}
    </li>
  );
};

export default ColorList;
