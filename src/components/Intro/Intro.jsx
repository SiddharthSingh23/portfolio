import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import me from "../../assets/me.jpg";
// import riptide from "../../assets/riptide.mp3";

export const Intro = () => {
  // const song = new Audio(riptide);

  // const playSong = () => {
  //   song.play();
  // };

  // const pauseSong = () => {
  //   song.pause();
  // };

  const introRef = useRef();

  const handleMouseMove = (e) => {
    const introImg = document.getElementById("introImg");

    const screenWidth = introRef.current?.clientWidth ?? 0,
      screenHeight = introRef.current?.clientHeight ?? 0,
      degX = ((e.clientX / screenWidth) * 100 - 50) / 4,
      degY = ((e.clientY / screenHeight) * 100 - 75) / 4;

    introImg.animate(
      {
        transform: `rotateX(${degY}deg) rotateY(${degX}deg) translate3d(-50%, -50%, 0)`,
      },
      {
        duration: 5000,
        fill: "forwards",
      }
    );
  };

  return (
    <Box
      ref={introRef}
      onMouseMove={handleMouseMove}
      sx={{
        color: "white",
        height: "calc(100vh - 120px)",
        position: "relative",
      }}
    >
      <Box
        id="introImg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "rotateX(20deg) translate3d(-50%, -50%, 0)",
          width: "500px",
          aspectRatio: "1",
          borderRadius: "30px",
          backgroundImage: `url("${me}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
        // muted="muted"
        // onMouseEnter={playSong}
        // onMouseLeave={pauseSong}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "rotateX(0deg) translate(-50%, -50%)",
          width: "600px",
          "& .MuiTypography-root": {
            fontFamily: "Montserrat",
            fontWeight: "900",
            fontSize: "6rem",
            letterSpacing: "-.06em",
          },
          "& .MuiBox-root": {
            display: "flex",
            alignItems: "center",
            width: "100%",
          },
        }}
      >
        <Box sx={{ justifyContent: "flex-end" }}>
          <Typography>design is</Typography>
        </Box>
        <Box sx={{ justifyContent: "space-around" }}>
          <Typography>thinking</Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Montserrat",
              p: "0.8rem 2.5rem",
              cursor: "none",
              marginLeft: "1rem",
              borderRadius: "2rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              bgcolor: "rgb(255,208,116)",
              color: "rgb(0,0,0)",
            }}
          >
            Resume
          </Button>
        </Box>
        <Box sx={{ justifyContent: "flex-start" }}>
          <Typography>made visual</Typography>
        </Box>
      </Box>
    </Box>
  );
};
