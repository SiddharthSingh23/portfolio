import React from "react";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        height: "120px",
        display: "flex",
        justifyContent: "space-between",
        placeItems: "center",
        fontWeight: 600,
        px: "40px",
      }}
    >
      <Box
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "900",
          fontSize: "35px",
          letterSpacing: "-.06em",
          color: "rgb(163,116,255)",
        }}
      >
        Siddharth S
      </Box>

      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            borderColor: "rgb(163,116,255)",
            color: "white",
            borderRadius: "30px",
            fontSize: "17px",
            p: "14px 32px",
            fontWeight: 700,
            letterSpacing: "-.5px",
            fontFamily: "Montserrat",
          }}
        >
          Get in touch
        </Button>
        <MenuIcon
          sx={{
            fontSize: "30px",
            backgroundColor: "rgb(163,116,255)",
            borderRadius: "50px",
            p: "15px",
          }}
        />
      </Box>
    </Box>
  );
};
