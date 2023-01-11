import React, { useContext } from "react";
import { ThemeMode } from "../../App";

const SingleColorList = ({ color }) => {
  const [theme, setTheme] = useContext(ThemeMode);
  return <div className={theme ? `bg-${color} w-12 h-4` : `bg-slate-200`}> Copy</div>;
};

export default SingleColorList;
