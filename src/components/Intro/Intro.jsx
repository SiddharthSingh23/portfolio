import React from "react";
import { Box, Button, Typography } from "@mui/material";
import me from "../../assets/me.jpg";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <Box
      sx={{
        color: "white",
        height: "calc(100vh - 120px)",
        position: "relative",
        mb: "100px",
      }}
    >
      <Box
        id="introImg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "550px",
          borderRadius: "30px",
          backgroundImage: `url("${me}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
        }}
      />

      <motion.div
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1 }}
        initial={{ opacity: 0 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            "& .MuiTypography-root": {
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "6rem",
              letterSpacing: "-.06em",
              lineHeight: "1.1em",
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
      </motion.div>
    </Box>
  );
};
