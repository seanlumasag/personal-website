function ProjectCard({ img, link, projectTitle }) {
  return (
    <div className="projects-card">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <h1>{projectTitle}</h1>
    </div>
  );
}

export default ProjectCard;
