import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          mt: "100px",
          bgcolor: "rgb(163,116,255)",
          height: "200px",
          borderRadius: "50% 50% 0 0",
        }}
      />
      <Box
        sx={{
          bgcolor: "rgb(163,116,255)",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          gap: "10rem"
        }}
      >
        <Box
          sx={{
            "& .MuiTypography-root": {
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "3rem",
              letterSpacing: "-.06em",
            },
          }}
        >
          <Typography>get in touch</Typography>
        </Box>

        <Box
          sx={{
            "& .MuiTypography-root": {
              fontFamily: "Montserrat",
              fontWeight: "500",
              fontSize: "1.5rem",
              letterSpacing: "-.04em",
              textTransform: "uppercase"
            },
          }}
        >
          <Typography>siddharthsinghjaipur@gmail.com</Typography>
          <Typography>9887102560</Typography>
          <Typography>Jaipur, Rajasthan, India</Typography>
        </Box>
      </Box>
    </>
  );
};
