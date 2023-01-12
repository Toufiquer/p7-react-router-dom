import axios from "axios";
import { useEffect, useState } from "react";

const useThemeTemplate = () => {
  const [darkTheme, setDarkTheme] = useState({});
  const [lightTheme, setLightTheme] = useState({});
  useEffect(() => {
    axios.get("/themeTemplate.json").then((data) => setDarkTheme(data.data[0]));
  }, []);
  return { darkTheme, lightTheme };
};

export default useThemeTemplate;
