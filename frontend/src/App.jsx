import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/*
      <Skills />
      */}
    </div>
  );
}

export default App;
