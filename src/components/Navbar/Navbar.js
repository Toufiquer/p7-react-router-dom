import React, { useContext } from "react";
import { ThemeMode, ThemeMode2 } from "../../App";
import CustomLink from "../CustomLink/CustomLink";
import { MoonIcon, SparklesIcon, SunIcon } from "@heroicons/react/24/solid";
import useScroll from "../../hooks/useScroll";
import getThemeVariants from "../utilities/getThemeVariants";
const Navbar = () => {
  const { scrollDirection } = useScroll();
  const [theme, setTheme] = useContext(ThemeMode);
  const [theme2, setTheme2] = useContext(ThemeMode2);

  const handleThemeClass = (theme) => {
    if (theme === "dark") {
      const getThemeData = getThemeVariants("sky");
      // console.log(getThemeData, " => sky");
      setTheme2(getThemeData);
      setTheme("sky");
      return;
    } else if (theme === "light") {
      const getThemeData = getThemeVariants("dark");
      // console.log(getThemeData, " => dark");
      setTheme2(getThemeData);
      setTheme("dark");
      return;
    } else if (theme === "sky") {
      const getThemeData = getThemeVariants("light");
      // console.log(getThemeData, " => light");
      setTheme2(getThemeData);
      setTheme("light");
    }
  };
  const { backgroundI, hoverBackgroundII, text, hoverText } = theme2;
  const iconStyle = ` h-6 w-6 cursor-pointer ${text} ${hoverText}`;
  return (
    <div className={`${scrollDirection !== "down" ? " block sticky top-0 " : " hidden "}  ${backgroundI} ${hoverBackgroundII} z-50 py-2 w-full "`}>
      <div className="md:container mx-auto text-2xl ">
        <nav className="flex justify-between md:flex-row flex-col text-center">
          <h2 className={` ${text} ${hoverText} font-semibold text-3xl`}>Toufiquer Website</h2>
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
              {(theme === "light" && <MoonIcon className={iconStyle} />) || (theme === "sky" && <SunIcon className={iconStyle} />) || (theme === "dark" && <SparklesIcon className={iconStyle} />) || "Icon"}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
