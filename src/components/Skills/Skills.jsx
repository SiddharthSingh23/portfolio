import React from "react";
import { Box, Typography } from "@mui/material";
import Lottie from "react-lottie-player";
import cubeJson from "../../assets/cubes.json";
import { techStack } from "./techStack";

export const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        my: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          loop
          play
          speed="0.6"
          animationData={cubeJson}
          style={{ width: 150, height: 150 }}
        />

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "rgb(163,116,255)",
            textTransform: "uppercase",
          }}
        >
          Technologies I work with
        </Typography>

        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: "600",
            color: "rgb(163,116,255)",
            textTransform: "uppercase",
          }}
        >
          + there's even more
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          gap: "5rem",
          pt: "80px"
        }}
      >
        {techStack.map((data) => (
          <Box
            component="img"
            src={data.icon}
            alt={data.name}
            width={data.size}
          />
        ))}
      </Box>
    </Box>
  );
};
