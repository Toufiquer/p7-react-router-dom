import React from "react";

const ColorList = ({ styleColor, data }) => {
  const colorData = `bg-[${data.split("-")[1]}]`;
  console.log(colorData, " => Line No: 4");
  return (
    <li title="click to copy #[hex]" className={styleColor}>
      {data.split("-")[0]} <div style={{ backgroundColor: `${data.split("-")[1]}` }} className={`w-[200px] h-full`}></div>
    </li>
  );
};

export default ColorList;
