import CardAbout from "../components/CardAbout.jsx";
import TechTag from "../components/TechTag.jsx";
function About() {
  return (
    <div className="section section-about" id="about">
      <h2>About Me</h2>
      <div className="container-card">
        <div className="card card-about">
          <p>Tech Stack</p>
          <div className="tech-stack">
            <TechTag text="React" />
            <TechTag text="Spring Boot" />
            <TechTag text="PostgreSQL" />
          </div>
        </div>
        <CardAbout title="Education" text="Rutgers University" />
        <CardAbout title="Major" text="Computer Science and Data Science" />
        <CardAbout title="Expected Graduation" text="2027" />
        <CardAbout title="Location" text="New Jersey, US" />
      </div>
    </div>
  );
}

export default About;
