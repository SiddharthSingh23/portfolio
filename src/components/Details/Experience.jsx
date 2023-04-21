import { Box, Typography } from "@mui/material";
import React from "react";

export const Experience = () => {
  const ohlocal = (e) => {};

  const habilelabs = (e) => {};

  return (
    <Box>
      <Box
        pt="100px"
        fontFamily="Montserrat"
        fontSize="0.8rem"
        fontWeight="600"
        color="rgb(163,116,255)"
        textAlign="center"
      >
        EXPERIENCE
      </Box>
      <Box
        sx={{
          p: "60px 0 100px 0",
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
          <Typography fontSize="1rem" color="rgb(255,208,116)" maxWidth="500px">
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
          <Typography fontSize="1rem" color="rgb(23,241,209)" maxWidth="500px">
            As an associate software engineer at HabileLabs, I got the
            opportunity to work as a full stack web developer. During my
            internship, I developed two web applications, each with separate
            user interfaces for the administrators and users. From designing to
            implementation including backend, all was done solely by me.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// OhLocal
// During my internship at OhLocal as a frontend web developer, I had
// the opportunity to work on the company's main website, which is an
// e-commerce platform. My primary responsibility was to improve the
// user interface and user experience of the website. I collaborated
// with the design team to implement design changes that would enhance
// the website's functionality and appeal. I also worked on optimizing
// the website's performance, making sure it loads faster and provides
// a seamless user experience. The experience taught me a lot about
// working in a team environment, utilizing agile methodologies, and
// developing my technical skills as a frontend developer. Overall, it
// was an enriching experience that helped me gain valuable insights
// into the world of e-commerce web development.

// HabileLabs
// As an associate software engineer at Habilelabs, I had the
// opportunity to work as a full stack web developer. During my
// internship, I developed two web applications, each with separate
// user interfaces for the administrators and users. My main
// responsibilities included designing and developing the front-end
// using HTML, CSS, and JavaScript, and developing the back-end using
// PHP and MySQL. I collaborated with the design team to ensure that
// the user interface was intuitive and user-friendly. Additionally, I
// worked on optimizing the performance of the applications to provide
// a seamless experience for the users. The experience helped me
// develop my technical skills as a full stack developer and provided
// me with insights into the agile development process. Overall, it was
// a rewarding experience that helped me grow both professionally and
// personally.
