import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div className="bg-blue-300 py-2 w-full">
      <div className="md:container mx-auto text-2xl ">
        <nav className="flex justify-between md:flex-row flex-col text-center">
          <h2>Toufiquer Website</h2>
          <ul className="flex justify-center my-1">
            <li className="list-none">
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
