import Navigation from "./components/Navigation";
import Home from "./sections/SectionHome";
import About from "./sections/SectionAbout";
import Experience from "./sections/SectionExperience";
import Projects from "./sections/SectionProjects";
import Skills from "./sections/SectionSkills";
import Contact from "./sections/SectionContact";

function App() {
  return (
    <>
      {/*
      <Navigation />
      */}
      <div className="div-app">
        <div className="div-fixed">
          <Home />
        </div>
        <div className="div-scroll">
          <About />
          
          <Experience />
          <Projects />
          <Contact />
          {/*
          <Skills />
          */}
        </div>
      </div>
    </>
  );
}

export default App;
