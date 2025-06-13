import ProjectCard from "./ProjectCard";
import websiteImg from "../assets/website.jpg";
function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        <ProjectCard
          img={websiteImg}
          link="https://github.com"
          projectTitle="Personal Website"
          t1="React"
          t2="JavaScript"
          t3=""
          desc="Personal portfolio website to showcase my projects and experiences"
        />
      </div>
    </div>
  );
}

export default Projects;
