import "@fontsource/montserrat";
import "./App.css";
import { Box } from "@mui/material";

import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Cursor } from "./components/Cursor/Cursor";

function App() {
  return (
    <Box width="100%" id="App">
      <Cursor />
      <Navbar />
      <About />
    </Box>
  );
}

export default App;
