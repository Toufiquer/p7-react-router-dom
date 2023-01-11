/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 *  credit goes to Pratik Sharma || https://dev.to/biomathcode/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98
 */

import { useState, useEffect } from "react";

export default function useScroll() {
  const [dataArr, setDataArr] = useState([]);
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setLastScrollTop(-bodyOffset.top);
    const newArr = [lastScrollTop, ...dataArr];
    newArr.length = 16;
    setDataArr(newArr);
    setScrollDirection(dataArr[0] > dataArr[15] ? "down" : "up");
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollDirection,
  };
}
