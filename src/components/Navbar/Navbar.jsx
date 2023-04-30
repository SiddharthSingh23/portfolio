import React, { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const textValue = "SIDDHARTH S";

export const Navbar = () => {
  const ref = useRef(null);

  const [text, setText] = useState(textValue);
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = () => {
    let iterations = 0;
    let myName = document.getElementById("myName");

    const interval = setInterval(() => {
      const textLetters = myName.innerText.split("");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is in view
          setTimeout(() => {
            handleMouseOver();
          }, 2000);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    let curr = ref.current;

    if (curr) {
      observer.observe(curr);
    }

    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, delay: 2 }}
    >
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
          ref={ref}
          onMouseOver={handleMouseOver}
          id="myName"
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
    </motion.div>
  );
};
