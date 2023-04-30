import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const About = () => {
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
          py: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "5rem",
        }}
      >
        <Box
          fontFamily="Montserrat"
          fontSize="1rem"
          fontWeight="600"
          color="rgb(163,116,255)"
        >
          ABOUT ME
        </Box>

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
    </motion.div>
  );
};
