import CardAbout from "../components/CardAbout.jsx";
import TechTag from "../components/TechTag.jsx";

function About() {
  return (
    <div className="section section-about" id="about">
      <h2>About</h2>
      <div className="container-card">
        <CardAbout title="Computer Science and Data Science student at Rutgers University–New Brunswick with a passion for software engineering, machine learning, and artificial intelligence. Actively seeking internship opportunities and always open to connecting with professionals, peers, and mentors in the tech industry." />
      </div>
      <div className="container-card">
        <div className="card card-about">
          <p>Tech Stack</p>
          <div className="tech-stack">
            <TechTag text="React" />
            <TechTag text="Django" />
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
