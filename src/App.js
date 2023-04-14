import "./App.css";
import { Box } from "@mui/material";

import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Cursor } from "./components/Cursor/Cursor";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <Box width="100%" id="App" overflow="hidden">
      <Cursor />
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </Box>
  );
}

export default App;
