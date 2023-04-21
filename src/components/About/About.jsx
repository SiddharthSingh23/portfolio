import { Box } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Box
      sx={{
        paddingY: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        gap: "5rem"
      }}
    >
      <Box fontFamily="Montserrat" fontSize="0.8rem" fontWeight="600" color="rgb(163,116,255)">ABOUT ME</Box>

      <Box sx={{ width: "500px", color: "white", fontSize: "1.5rem" }}>
        Passionate{" "}
        <Box component="span" color="rgb(163,116,255)">
          Fullstack developer
        </Box>{" "}
        seeking a challenging role where I can utilize my{" "}
        <Box component="span" color="rgb(23,241,209)">
          skills and experience
        </Box>{" "}
        to create innovative and high-quality{" "}
        <Box component="span" color="rgb(255,208,116)">
          web applications
        </Box>
      </Box>
    </Box>
  );
};

// Proficient in a range of programming languages such as HTML,
// CSS, JavaScript, and Python, and experienced in using frameworks like
// ReactJs. For the back-end I have expertise in NodeJs, MongoDB & PostgreSQL
// I am excited to work on projects that have a real-world impact and am
// eager to collaborate with others to bring new ideas to life. Let's build
// something great together
