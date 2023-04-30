import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { techStack } from "./techStack";
import Lottie from "react-lottie-player";
import cubeJson from "../../assets/cubes.json";

export const Skills = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 3,
      }}
    >
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
            pt: "80px",
          }}
        >
          {techStack.map((data) => (
            <Box
              key={data.name}
              component="img"
              src={data.icon}
              alt={data.name}
              width={data.size}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};
