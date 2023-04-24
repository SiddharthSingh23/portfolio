import React, { useState } from "react";
import { Box } from "@mui/material";
// import img from "../../assets/song.jpg";

export const Projects = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [prevPercent, setPrevPercent] = useState(0);
  const [nextPercent, setNextPercent] = useState(0);

  const items = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
    "Item7",
    "Item8",
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const relativePos = e.clientX - startPos;
    const maxPos = window.innerWidth / 2;

    const currentPercent = (relativePos / maxPos) * 100;
    const newPercent = prevPercent + currentPercent;

    // range 0-100
    const percent = Math.max(Math.min(newPercent, 0), -100);

    setNextPercent(percent);

    const projectCarousel = document.getElementById("projectCarousel");

    projectCarousel.animate(
      {
        transform: `translate(${percent}%, -50%)`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );

    for (const image of projectCarousel.getElementsByClassName(
      "projectImage"
    )) {
      image.animate(
        {
          objectPosition: `${100 + percent}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    setPrevPercent(nextPercent);
  };

  return (
    <Box
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        py: "100px",
        // transform: "rotateZ(6deg)",
      }}
    >
      <Box
        id="projectCarousel"
        sx={{
          display: "flex",
          gap: "3rem",
          position: "absolute",
          top: "50%",
          // starting point 50%
          left: "50%",
          transform: `translate(0, -50%)`,
        }}
      >
        <Box fontSize="0.8rem" fontWeight="600" color="rgb(163,116,255)">
          PROJECTS
        </Box>
        {items.map((data, index) => (
          <Box key={data} position="relative">
            <Box
              component="img"
              className="projectImage"
              draggable="false"
              src={`https://picsum.photos/550/350?japan=${index + 1}`}
              alt=""
              sx={{
                width: "350px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "right center",
                borderRadius: "20px",
                // opacity: 0.8,
                // transition: "1s",
                // "&:hover": { transform: "scale(1.1)", opacity: 1 },
              }}
            />
            {/* <Box
              sx={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "rotateZ(-6deg) translate(-50%, -50%)",
                color:"rgb(23,241,209)",
                fontSize: "1.4rem",
                p: "10px 20px",
                boxShadow: "revert"
              }}
            >
              {data}
            </Box> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
