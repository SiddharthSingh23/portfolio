import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Experience = () => {
  const ohlocal = (e) => {};

  const habilelabs = (e) => {};

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
        pt="100px"
        fontFamily="Montserrat"
        fontSize="1rem"
        fontWeight="600"
        color="rgb(163,116,255)"
        textAlign="center"
      >
        EXPERIENCE
      </Box>
      <Box
        sx={{
          py: "100px",
          display: "flex",
          justifyContent: "center",
          gap: "10rem",
          "& .MuiTypography-root": {
            fontFamily: "Montserrat",
          },
        }}
      >
        <Box onMouseMove={ohlocal}>
          <Typography fontSize="1.2rem" color="rgb(23,241,209)">
            OhLocal
          </Typography>
          <Typography fontSize="1.8rem" color="rgb(255,255,255)">
            Frontend Web Developer
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgb(242, 220, 217,0.8)"
            maxWidth="500px"
          >
            During my internship at OhLocal as a frontend web developer, I had
            the opportunity to work on the company's main website, which is an
            e-commerce platform. My primary responsibility was to improve the
            user interface and user experience of the website. I was the head
            front-end web developer in the starup.
          </Typography>
        </Box>

        <Box onMouseMove={habilelabs}>
          <Typography fontSize="1.2rem" color="rgb(255,208,116)">
            HabileLabs
          </Typography>
          <Typography fontSize="1.8rem" color="rgb(255,255,255)">
            Associate Software Engineer
          </Typography>
          <Typography
            fontSize="1rem"
            color="rgb(242, 220, 217,0.8)"
            maxWidth="500px"
          >
            As an associate software engineer at HabileLabs, I got the
            opportunity to work as a full stack web developer. During my
            internship, I developed two web applications, each with separate
            user interfaces for the administrators and users. From designing to
            implementation including backend, all was done solely by me.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
