import React from "react";

const ColorBox = ({ data }) => {
  return (
    <>
      <div style={{ backgroundColor: `${data}` }} className={`w-[200px] h-full flex items-center justify-center`}></div>
      <span className="text-white bg-[#404040] px-1 w-[110px]  h-full ">{data}</span>
    </>
  );
};

export default ColorBox;
