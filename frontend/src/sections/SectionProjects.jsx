import CardInfo from "../components/CardInfo";
import websiteImg from "../assets/favicon.png";
import ckdpredict from "../assets/ckdpredict.png";
function Projects() {
  return (
    <div className="section section-projects" id="projects">
      <h2>Projects</h2>
      <div className="container-card">
        <CardInfo
          img={ckdpredict}
          title="CKDPredict"
          t1="Django"
          t2="PyTorch"
          t3="PostgreSQL"
          t4="React"
          a1="Live Demo"
          b1="https://github.com"
          a2="Github"
          b2="https://github.com"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <CardInfo
          img={websiteImg}
          title="Personal Website"
          t1="React"
          t2="JavaScript"
          t3="HTML"
          t4="CSS"
          a1="Live Demo"
          b1="https://github.com"
          a2="Github"
          b2="https://github.com"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
}

export default Projects;
