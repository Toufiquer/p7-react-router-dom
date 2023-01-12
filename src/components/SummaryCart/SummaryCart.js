import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { ThemeMode2 } from "../../App";

const SummaryCart = ({ value, name, empty = false }) => {
  const [theme2] = useContext(ThemeMode2);
  const { border, text } = theme2;
  const handleSummary = (name) => {
    console.log(name, " => Line No: 9");
  };
  if (empty) {
    return (
      <div className={`w-[320px] ${border} mx-auto ${text} p-2 text-xl`}>
        <div className="flex justify-between items-center cursor-pointer">Please Add some Products ...</div>
      </div>
    );
  }
  return (
    <div onClick={() => handleSummary(name)} className={`w-[320px] ${border} mx-auto ${text} p-2 text-xl`}>
      <div className="flex justify-between items-center cursor-pointer">
        Your Total {name} : {value} {<EllipsisHorizontalCircleIcon className="h-6 w-6"></EllipsisHorizontalCircleIcon>}
      </div>
    </div>
  );
};

export default SummaryCart;
