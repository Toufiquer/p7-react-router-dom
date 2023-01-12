import React, { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ThemeMode2 } from "../../App";

const CustomLink = ({ children, to, ...props }) => {
  const [theme2] = useContext(ThemeMode2);
  const { text, hoverText } = theme2;
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const style = `px-4 duration-200 ${text} ${hoverText}`;
  const active = style.concat(" underline");
  const inActive = style.concat(" decoration-none");
  return (
    <Link className={match ? active : inActive} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
