import AboutCard from "../components/AboutCard.jsx";

function About() {
  return (
    <div className="about" id="about">
      <div className="info-container">
        <AboutCard title="Education" text="Rutgers University" />
        <AboutCard title="Major" text="Computer Science" />
        <AboutCard title="Expected Graduation" text="2027" />
        <AboutCard title="Location" text="New Jersey, USA" />
        <div className="tech-stack about-card">
          <p>Tech Stack</p>
          <div className="tech">
            <p>Node</p>
            <p>React</p>
            <p>Java</p>
          </div>
        </div>
      </div>
      <div className="about-title-text-button">
        <h1>About Me</h1>
        <p>
          Computer Science and Data Science student at Rutgers University–New
          Brunswick with a strong interest in software engineering, machine
          learning, and artificial intelligence.
        </p>
        <div className="about-button">
          <a href="#experience">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default About;
