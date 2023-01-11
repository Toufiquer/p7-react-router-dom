import React, { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ThemeMode } from "../../App";

const CustomLink = ({ children, to, ...props }) => {
  const [theme] = useContext(ThemeMode);
  console.log(theme, " => Line No: 7");
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const style = `" px-4 duration-200 hover:underline ${theme ? " text-darkSecond " : " text-[#86198f] "}"`;
  const active = style.concat(" underline");
  const inActive = style.concat(" decoration-none");
  return (
    <Link className={match ? active : inActive} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
