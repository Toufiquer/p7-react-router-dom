import React, { useState } from "react";
import ColorList from "./ColorList";

const SingleColorList = ({ data }) => {
  const [tooltipTime, setTooltipTime] = useState(false);
  const styleColor = "relative flex h-8 w-[280px] my-4 pl-2 cursor-pointer justify-between border-2 border-solid border-blue-800 items-center justify-center";
  const styleTooltip = "w-[240px] h-6 bg-red-600 absolute top-[-25px] flex item s-center justify-center ";
  const dataArr = [];
  for (const curr in data.color) {
    const newData = curr.concat("-").concat(data.color[curr]);
    dataArr.push(newData);
  }
  const tooltip = <div className={`${tooltipTime ? " block " : " hidden "} + ${styleTooltip}`}>Code has been copied</div>;
  return (
    <>
      <ul>
        <li className={styleColor + "  uppercase w-full bg-blue-400"}>
          <p className="text-center w-full">Model : {data.modelNumber}</p>
        </li>

        {dataArr.map((curr) => (
          <ColorList key={curr} styleColor={styleColor} data={curr}>
            {tooltip}
          </ColorList>
        ))}
      </ul>
    </>
  );
};

export default SingleColorList;
