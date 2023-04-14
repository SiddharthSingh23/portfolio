import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import img from "../../assets/song.jpg";

export const Projects = () => {
  const items = ["item1", "item2", "item3", "item4", "item5"];

  const [imgTrack, setImgTrack] = useState(0);
  const [isDown, setIsDown] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setImgTrack(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDown) {
      const mouseDelta = imgTrack - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percent = (mouseDelta / maxDelta) * 100;
    }
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  return (
    <Box
      sx={{
        paddingY: "100px",
        display: "flex",
        gap: "3rem",
        transform: "translate(50%, 0%)",
      }}
    >
      <Box
        fontSize="0.7rem"
        fontWeight="600"
        paddingTop="10px"
        color="rgb(163,116,255)"
      >
        PROJECTS
      </Box>
      {items.map((data) => (
        <Box
          key={data}
          sx={{
            width: "350px",
            borderRadius: "20px",
            aspectRatio: "1",
            bgcolor: "white",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            draggable="false"
            maxWidth="100%"
            src={img}
            alt=""
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        </Box>
      ))}
    </Box>
  );
};
