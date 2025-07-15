function ProjectButton({ text, link }) {
  return (
    <a href={link} target="_blank">
      <p className="project-button">{text}</p>
    </a>
  )
}

export default ProjectButton;
