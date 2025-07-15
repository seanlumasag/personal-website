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
          link="https://github.com"
          title="CKDPredict"
          t1="Django"
          t2="PyTorch"
          t3="PostgreSQL"
          t4="React"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
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
