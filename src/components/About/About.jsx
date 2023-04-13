import React from "react";
import { Box } from "@mui/material";
import SongBg from "../../assets/song.jpg";
import Riptide from "../../assets/riptide.mp3";

export const About = () => {
  const song = new Audio(Riptide);

  const playSong = () => {
    song.play();
  };

  const pauseSong = () => {
    song.pause();
  };

  return (
    <Box
      sx={{
        color: "white",
        height: "calc(100vh - 120px)",
      }}
    >
      <p id="a"></p>
      <Box
        sx={{
          m: "0 auto",
          width: "550px",
          aspectRatio: "1",
          borderRadius: "30px",
          backgroundImage: `url("${SongBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.7",
        }}
        muted="muted"
        onMouseEnter={playSong}
        onMouseLeave={pauseSong}
      ></Box>
    </Box>
  );
};
