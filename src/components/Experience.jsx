const Experience = () => {
  return (
    <section id="experience" className="section projects experience">
      <div className="projects-inner">
        <div className="projects-header">
          <h2 className="type-title matrix-hover">&gt; View my experience.</h2>
        </div>
        <div className="project-stack">
          <article className="project-card project-row">
            <div className="project-media">
              <div className="media-gradient alt-one" />
            </div>
            <div className="project-content">
              <h3>Software Engineer Intern</h3>
              <p className="experience-org">Data Storytelling</p>
              <p>
                Built user-facing features, improved performance, and partnered
                with design to ship polished experiences.
              </p>
              <ul className="project-tech">
                <li>React</li>
                <li>TypeScript</li>
                <li>Supabase</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
