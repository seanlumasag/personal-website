function ProjectButton({ text, link }) {
  return (
    <a href={link}>
      <p className="project-button">{text}</p>
    </a>
  )
}

export default ProjectButton;
