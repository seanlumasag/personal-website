import InfoCard from "../components/InfoCard";
import websiteImg from "../assets/website.jpg";
function Projects() {
  return (
    <div className="projects section" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        <InfoCard
          img={websiteImg}
          link="https://github.com"
          title="Personal Website"
          t1="React"
          t2="JavaScript"
          t3=""
          desc="Led weekly STEM sessions for 20+ students, teaching robotics, block coding, and Python using platforms like WeDo and EV3, while implementing 50+ hands-on projects to reinforce concepts. Achieved a 90% module completion rate by designing and executing a structured robotics curriculum."
        />
      </div>
    </div>
  );
}

export default Projects;
