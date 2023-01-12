import React, { useState } from "react";
import { copyTextToClipboard } from "../utilities/copyTextToClipboard";

const ListItem = ({ name, value }) => {
  const [tooltips, setTooltips] = useState(false);
  const copyText = (text) => {
    copyTextToClipboard(text);
    setTooltips(true);
    setTimeout(() => {
      setTooltips(false);
    }, 1300);
    console.log(text, " => Line No: 5");
  };
  const listStyle = "w-[600px] mx-auto m-2 flex items-center justify-between h-12 border-2 border-solid border-blue-800 hover:cursor-editor relative";
  const itemStyle = "flex bg-blue-200 items-center justify-start pl-2 text-xl h-full";
  const tooltipsStyle = `w-[400px] h-12 bg-blue-600 text-white font-semibold absolute top-[-3rem] ${tooltips ? " block " : " hidden "} `;
  return (
    <li onClick={() => copyText(name)} className={listStyle}>
      <div className={tooltipsStyle}>
        Bootstrap Color Copied {value[0]} || {name}
      </div>
      <div className="flex w-[350px] h-full">
        <div title={"Click to copy " + value} className={itemStyle + "  w-[230px]"}>
          {name}
        </div>
        <div className={itemStyle + "  w-[120px]"}>{value[1]}</div>
      </div>
      <div style={{ backgroundColor: value[1] }} className={`flex h-full w-full`}></div>
    </li>
  );
};

export default ListItem;
