function ProjectCard({ projectTitle, projectTech }) {
  return (
    <div className="projects-card">
      <h1>{projectTitle}</h1>
      <h1>{projectTech}</h1>
    </div>
  );
}

export default ProjectCard;
