import { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
