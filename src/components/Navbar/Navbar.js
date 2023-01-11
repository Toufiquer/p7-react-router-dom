import React, { useContext } from "react";
import { ThemeMode, ThemeMode2 } from "../../App";
import CustomLink from "../CustomLink/CustomLink";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useScroll from "../../hooks/useScroll";
const Navbar = () => {
  const { scrollDirection } = useScroll();
  const [theme, setTheme] = useContext(ThemeMode);
  const [theme2, setTheme2] = useContext(ThemeMode2);
  const handleThemeClass = (theme) => {
    // theme ? setTheme2([1, 2, 3]) : setTheme2([4, 5, 6]);
    let color1, color2, color3;
    if (theme) {
      color1 = "bg-blue-600 hover:bg-blue-800";
      color2 = "bg-blue-700";
      color3 = "bg-blue-800";
    } else {
      color1 = "bg-red-600 hover:bg-red-800";
      color2 = "bg-red-700";
      color3 = "bg-red-800";
    }
    setTheme2({ color1, color2, color3 });
    console.log(theme2, theme2.color1, " => Line No: 10");
  };
  //
  return (
    <div className={`${scrollDirection !== "down" ? " block sticky top-0 " : " hidden "} +  ${theme ? "bg-darkFirst text-darkSecond" : "text-primaryText "} " z-50 py-2 w-full "`}>
      <div className="md:container mx-auto text-2xl ">
        <nav className="flex justify-between md:flex-row flex-col text-center">
          <h2>Toufiquer Website</h2>
          <div className="flex items-center">
            <ul className="flex justify-end my-1">
              <li className={theme2.color1}>For Testing purpose</li>
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
              </li>
            </ul>
            <ul
              onClick={() => {
                setTheme(!theme);
                handleThemeClass(!theme);
              }}
            >
              {!theme ? <MoonIcon className="h-6 w-6 cursor-pointer" /> : <SunIcon className="h-6 w-6 cursor-pointer" />}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
