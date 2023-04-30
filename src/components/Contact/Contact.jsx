import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 3,
      }}
    >
      <Box sx={{ height: "100vh", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100%",
            "& .MuiTypography-root": {
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "7rem",
              letterSpacing: "-.06em",
              color: "white",
              lineHeight: "1em",
            },
            "& .MuiBox-root": {
              display: "flex",
              alignItems: "center",
              width: "100%",
            },
          }}
        >
          <Box sx={{ justifyContent: "center" }}>
            <Typography>let's make</Typography>
          </Box>
          <Box sx={{ justifyContent: "center", gap: "2rem" }}>
            <Typography>great work</Typography>
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
              Get in touch
            </Button>
          </Box>
          <Box sx={{ justifyContent: "center" }}>
            <Typography>together</Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
