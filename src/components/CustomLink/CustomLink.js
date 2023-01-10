import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const style = "px-4 text-xl hover:text-blue-600 duration-200";
  const active = style.concat("text-blue-600 underline");
  const inActive = style;
  return (
    <Link className={match ? active : inActive} to={to} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
