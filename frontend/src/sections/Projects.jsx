import InfoCard from "../components/CardInfo";
import websiteImg from "../assets/favicon.png";

function Projects() {
  return (
    <div className="projects section" id="projects">
      <h1>Projects</h1>
      <div className="container-card">
        <InfoCard
          img={websiteImg}
          link="https://github.com"
          title="Personal Website"
          t1="React"
          t2="JavaScript"
          t3="HTML"
          t4="CSS"
          desc="TBD"
        />
      </div>
    </div>
  );
}

export default Projects;
