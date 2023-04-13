import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

export const Cursor = () => {
  // const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const customCursor = document.getElementById("customCursor");
    const handleMouseMove = (e) => {
      const posX = e.clientX - customCursor.offsetWidth / 2;
      const posY = e.clientY - customCursor.offsetHeight / 2;

      // setPos({
      //   x: posX,
      //   y: posY,
      // });

      const keyframes = {
        transform: `translate(${posX}px, ${posY}px)`,
      };

      customCursor.animate(keyframes, {
        duration: 1000,
        fill: "forwards",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Box
        id="customCursor"
        sx={{
          height: "200px",
          width: "200px",
          background: `linear-gradient(
						to right, 
						aquamarine,
						mediumpurple
					)`,
          borderRadius: "50%",

          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -2,
          pointerEvents: "none",
        }}
      />

      <Box
        id="customCursorBlur"
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: -1,
          backdropFilter: "blur(200px)",
        }}
      />
    </>
  );
};
