import CardAbout from "../components/CardAbout.jsx";
import TechTag from "../components/TechTag.jsx";

import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <div className="section section-about" id="about">
      <h2>About</h2>
      <Fade
        cascade
        direction={"up"}
        damping={0.15}
        delay={100}
        duration={800}
        fraction={0.3}
        triggerOnce
      >
        <div className="container-card">
          <CardAbout title="Computer Science and Data Science student at Rutgers University–New Brunswick with a passion for software engineering and machine learning. Actively seeking internship opportunities and always open to connecting with professionals, peers, and mentors in the tech industry." />
        </div>
      </Fade>
      <Fade
        cascade
        direction={"up"}
        damping={0.15}
        delay={100}
        duration={800}
        fraction={0.3}
        triggerOnce
      >
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
      </Fade>
    </div>
  );
}

export default About;
