import axios from "axios";
import { useEffect, useState } from "react";

const useColorTheme = () => {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    axios.get("themeColor.json").then((data) => setColors(data.data));
  }, []);
  return [colors, setColors];
};

export default useColorTheme;
