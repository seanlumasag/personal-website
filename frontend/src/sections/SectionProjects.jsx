import CardInfo from "../components/CardInfo";
import websiteImg from "../assets/favicon.png";

function Projects() {
  return (
    <div className="section section-projects" id="projects">
      <h1>Projects</h1>
      <div className="container-card">
        <CardInfo
          img={websiteImg}
          link="https://github.com"
          title="Personal Website"
          t1="React"
          t2="JavaScript"
          t3="HTML"
          t4="CSS"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
}

export default Projects;
