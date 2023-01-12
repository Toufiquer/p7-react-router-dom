import axios from "axios";
import { useEffect, useState } from "react";

export const useColorData = () => {
  const [dark7, setDark7] = useState();
  const [light7, setLight7] = useState();
  const [dark14, setDark14] = useState();
  const [light14, setLight14] = useState();
  useEffect(() => {
    axios.get("colorTheme.json").then((d) => {
      let data = d.data;
      setDark7(data[0]["DarkThemeWith7Color"]);
      setDark14(data[1]["DarkThemeWith14Color"]);
      setLight7(data[2]["lightThemeWith7Color"]);
      setLight14(data[3]["lightThemeWith14Color"]);
    });
  }, []);
  return [dark7, light7, dark14, light14];
};
