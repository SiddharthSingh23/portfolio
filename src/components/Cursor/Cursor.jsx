import React, { useEffect } from "react";
import { Box } from "@mui/material";

export const Cursor = () => {
  useEffect(() => {
    const customCursor = document.getElementById("customCursor");
    const customCursorMain = document.getElementById("customCursorMain");

    const handleMouseMove = (e) => {
      const posX = e.clientX - customCursor.offsetWidth / 2;
      const posY = e.clientY - customCursor.offsetHeight / 2;

      const mainPosX = e.clientX - customCursorMain.offsetWidth / 2;
      const mainPosY = e.clientY - customCursorMain.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${posX}px, ${posY}px)`,
      };

      const keyframesMain = {
        transform: `translate(${mainPosX}px, ${mainPosY}px)`,
      };

      customCursor.animate(keyframes, {
        duration: 5000,
        fill: "forwards",
      });

      customCursorMain.animate(keyframesMain, {
        duration: 50,
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
          height: "500px",
          width: "500px",
          background: `linear-gradient(
						to right, 
            #805E97,
						#AA9384
					)`,
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.8,

          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -5,
          pointerEvents: "none",
        }}
      />

      <Box
        id="customCursorMain"
        sx={{
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgb(23,241,209)",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      />

      <Box
        id="customCursorBlur"
        sx={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          zIndex: -2,
          backdropFilter: "blur(60px)",
        }}
      />
    </>
  );
};
// #7D5885,