import React, { useContext } from "react";
import { ThemeMode } from "../../App";
import CustomLink from "../CustomLink/CustomLink";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeMode);
  return (
    <div className={` ${theme ? "bg-darkFirst text-darkSecond" : "text-primaryText "} " py-2 w-full"`}>
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
              </li>
            </ul>
            <ul onClick={() => setTheme(!theme)}>{!theme ? <MoonIcon className="h-6 w-6 cursor-pointer" /> : <SunIcon className="h-6 w-6 cursor-pointer" />}</ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
