import AboutCard from "../components/AboutCard.jsx";
import TechTag from "../components/TechTag.jsx"
function About() {
  return (
    <div className="about section" id="about">
      <div className="info-container">
        <div className="card tech-stack about-card">
          <p>Tech Stack</p>
          <div className="tech-stack">
            <TechTag text="React"/>
            <TechTag text="Spring Boot"/>
            <TechTag text="PostgreSQL"/>
          </div>
        </div>

        <AboutCard title="Education" text="Rutgers University" />
        <AboutCard title="Major" text="Computer Science" />
        <AboutCard title="Expected Graduation" text="2027" />
        <AboutCard title="Location" text="New Jersey, US" />
      </div>
      <div className="about-title-text-button">
        <h1>About Me</h1>
        <p>
          Computer Science and Data Science student at Rutgers University–New
          Brunswick with a strong interest in software engineering, machine
          learning, and artificial intelligence.
        </p>
        <div className="about-button">
          <a href="#experience" className="cta-button">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default About;
