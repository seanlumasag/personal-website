import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        <ProjectCard
          projectTitle="Personal Website"
          projectTech="React, Javascript, HTML, CSS"
        />
      </div>
    </div>
  );
}

export default Projects;
