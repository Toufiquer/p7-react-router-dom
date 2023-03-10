import { useEffect, useState } from "react";

export const useMouseMove = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    // window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      // window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return { coords, globalCoords, handleMouseMove, setCoords, setGlobalCoords };
};

/*
 * if you want to use mouse move event then add the handler in div
 * onMouseMove={handleMouseMove}
 */
