import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const textValue = "Siddharth S";

export const Navbar = () => {
  const [text, setText] = useState(textValue);
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = (e) => {
    let iterations = 0;
    const interval = setInterval(() => {
      const textLetters = e.target.innerText.split("");

      const x = textLetters
        .map((lettter, i) => {
          if (i < iterations) return textValue[i];

          return alphabets[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(x);

      if (iterations > text.length) clearInterval(interval);

      iterations += 1 / 4;
    }, 30);
  };

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
        onMouseOver={handleMouseOver}
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "900",
          fontSize: "35px",
          letterSpacing: "-.06em",
          color: "rgb(163,116,255)",
        }}
      >
        {text}
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
