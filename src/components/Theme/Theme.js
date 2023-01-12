import React from "react";
import useThemeTemplate from "../../hooks/useThemeTemplate";
import DarkTheme from "./DarkTheme";

const Theme = () => {
  const { darkTheme } = useThemeTemplate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex border-2 border-solid border-blue-500 min-h-screen">{darkTheme.darkTheme && <DarkTheme data={darkTheme.darkTheme}></DarkTheme>}</div>
      <div className="flex border-2 border-solid border-blue-500 min-h-screen"></div>
    </div>
  );
};

export default Theme;
