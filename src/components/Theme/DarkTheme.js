import React from "react";
import ListItem from "./ListItem";

const DarkTheme = ({ data }) => {
  const { modelNumber, color } = data[0];
  return (
    <div className="w-full">
      <h2 className="text-xl text-center my-2 w-full font-semibold">{modelNumber}</h2>
      {color && Object.keys(color).map((curr) => <ListItem key={curr} name={curr} value={color[curr]}></ListItem>)}
    </div>
  );
};

export default DarkTheme;
