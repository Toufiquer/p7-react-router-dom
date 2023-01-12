import React, { useContext } from "react";
import { ThemeMode, ThemeMode2 } from "../../App";
import CustomLink from "../CustomLink/CustomLink";
import { MoonIcon, SparklesIcon, SunIcon } from "@heroicons/react/24/solid";
import useScroll from "../../hooks/useScroll";
import getVariables from "../utilities/getVariables";
const Navbar = () => {
  const { scrollDirection } = useScroll();
  const [theme, setTheme] = useContext(ThemeMode);
  const [theme2, setTheme2] = useContext(ThemeMode2);

  const handleThemeClass = (theme) => {
    if (theme === "dark") {
      const getVar = getVariables("sky");
      console.log(getVar.background, " => sky");
      setTheme2(getVar);
      setTheme("sky");
    } else if (theme === "light") {
      const getVar = getVariables("dark");
      console.log(getVar.background, " => dark");
      setTheme2(getVar);
      setTheme("dark");
    } else if (theme === "sky") {
      const getVar = getVariables("light");
      console.log(getVar.background, " => light");
      setTheme2(getVar);
      setTheme("light");
    }
  };
  const { background } = theme2;
  return (
    <div className={`${scrollDirection !== "down" ? " block sticky top-0 " : " hidden "}  ${background} z-50 py-2 w-full "`}>
      <div className="md:container mx-auto text-2xl ">
        <nav className="flex justify-between md:flex-row flex-col text-center">
          <h2>Toufiquer Website</h2>
          <div className="flex items-center">
            <ul className="flex justify-end my-1">
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/products">Products</CustomLink>
              </li>
              <li>
                <CustomLink to="/users">Users</CustomLink>
              </li>
              <li>
                <CustomLink to="/charts">Charts</CustomLink>
              </li>
              <li>
                <CustomLink to="/colors">Colors</CustomLink>
                <CustomLink to="/theme">Theme</CustomLink>
              </li>
            </ul>
            <ul
              onClick={() => {
                handleThemeClass(theme);
              }}
            >
              {(theme === "dark" && <MoonIcon className="h-6 w-6 cursor-pointer" />) || (theme === "light" && <SunIcon className="h-6 w-6 cursor-pointer" />) || (theme === "sky" && <SparklesIcon className="h-6 w-6 cursor-pointer" />) || "Icon"}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
