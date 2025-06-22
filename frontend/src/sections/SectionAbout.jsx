import CardAboutMe from "../components/CardAboutMe.jsx";
import TechTag from "../components/TechTag.jsx";
function About() {
  return (
    <div className="section section-about" id="about">
      <div className="container-card">
        <div className="card card-about-me">
          <p>Tech Stack</p>
          <div className="tech-stack">
            <TechTag text="React" />
            <TechTag text="Spring Boot" />
            <TechTag text="PostgreSQL" />
          </div>
        </div>
        <CardAboutMe title="Education" text="Rutgers University" />
        <CardAboutMe title="Major" text="Computer Science and Data Science" />
        <CardAboutMe title="Expected Graduation" text="2027" />
        <CardAboutMe title="Location" text="New Jersey, US" />
      </div>
      <div className="container-text">
        <h1>About Me</h1>
        <p>
          Computer Science and Data Science student at Rutgers University–New
          Brunswick with a passion for software engineering, machine learning,
          and artificial intelligence.
        </p>
        <div className="container-button">
          <a href="#experience" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
