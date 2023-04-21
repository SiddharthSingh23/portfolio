import "./App.css";
import { Box } from "@mui/material";

import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Cursor } from "./components/Cursor/Cursor";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Details/Experience";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Box width="100%" id="App" overflow="hidden">
      <Cursor />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
