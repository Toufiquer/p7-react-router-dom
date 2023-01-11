import axios from "axios";
import { useEffect, useState } from "react";

export const useColorData = () => {
  const [dark7, setDark7] = useState();
  const [lite7, setLite7] = useState();
  const [dark14, setDark14] = useState();
  const [lite14, setLite14] = useState();
  useEffect(() => {
    axios.get("colorTheme.json").then((d) => {
      let data = d.data;
      setDark7(data[0]["DarkThemeWith7Color"]);
      setDark14(data[1]["DarkThemeWith14Color"]);
      setLite7(data[2]["liteThemeWith7Color"]);
      setLite14(data[3]["liteThemeWith14Color"]);
    });
  }, []);
  return [dark7, lite7, dark14, lite14];
};
