import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

const IMG_URL = "https://user-images.githubusercontent.com/4661784/" + "56037265-88219f00-5d37-11e9-95ef-9cb24be0190e.png";

export const ImageZoom = ({ fnDefault }) => {
  const imgRef = useRef();
  console.log(fnDefault, " => Line No: 8");
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;
    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <QuickPinchZoom
      // onUpdate={onUpdate}
      // `onUpdate` is one required prop
      onUpdate={({ scale, x, y }) => console.log(" --- onUpdate", { scale, x, y })}
      //   inertia={true}
      //   inertiaFriction={0.96}
      //   tapZoomFactor={1}
      //   zoomOutFactor={1.3}
      //   animationDuration={250}
      //   maxZoom={5}
      //   minZoom={0.5}
      //   draggableUnZoomed={true}
      //   lockDragAxis={false}
      //   setOffsetsOnce={false}
      //   verticalPadding={0}
      //   horizontalPadding={0}
      //   onZoomStart={() => console.log(" --- onZoomStart")}
      //   onZoomEnd={() => console.log(" --- onZoomEnd")}
      //   onZoomUpdate={() => console.log(" --- onZoomUpdate")}
      //   onDragStart={() => console.log(" --- onDragStart")}
      //   onDragEnd={() => console.log(" --- onDragEnd")}
      //   onDragUpdate={() => console.log(" --- onDragUpdate")}
      //   onDoubleTap={() => console.log(" --- onDoubleTap")}
    >
      <img ref={imgRef} src={IMG_URL} alt="Name test" />
    </QuickPinchZoom>
  );
};
