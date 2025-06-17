import AboutMeCard from "../components/AboutMeCard.jsx";
import TechTag from "../components/TechTag.jsx";
function About() {
  return (
    <div className="about section" id="about">
      <div className="card-container">
        <div className="card about-me-card">
          <p>Tech Stack</p>
          <div className="tech-stack">
            <TechTag text="React" />
            <TechTag text="Spring Boot" />
            <TechTag text="PostgreSQL" />
          </div>
        </div>
        <AboutMeCard title="Education" text="Rutgers University" />
        <AboutMeCard title="Major" text="Computer Science and Data Science" />
        <AboutMeCard title="Expected Graduation" text="2027" />
        <AboutMeCard title="Location" text="New Jersey, US" />
      </div>
      <div className="text-container">
        <h1>About Me</h1>
        <p>
          Computer Science and Data Science student at Rutgers University–New
          Brunswick with a passion for software engineering, machine learning,
          and artificial intelligence.
        </p>
        <div className="button-container">
          <a href="#experience" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
