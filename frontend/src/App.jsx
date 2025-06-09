import { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
