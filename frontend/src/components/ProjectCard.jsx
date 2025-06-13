function ProjectCard({ img, link, projectTitle, t1, t2, t3, desc }) {
  return (
    <div className="card project-card">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="text-container">
        <h1>{projectTitle}</h1>
        <div className="tech-stack">
          <p>{t1}</p>
          <p>{t2}</p>
          <p>{t3}</p>
        </div>

        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
