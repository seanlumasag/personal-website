const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="projects-inner">
      <div className="projects-header">
        <h2 className="type-title matrix-hover">&gt; Explore my projects.</h2>
      </div>
        <div className="project-stack">
        <article className="project-card project-row">
            <div className="project-media">
              <div className="media-gradient alt-one" />
            </div>
            <div className="project-content">
              <h3>Job Application Tracker</h3>
              <p>
                A job application tracker to manage your job search process
                effectively.
              </p>
              <ul className="project-tech">
                <li>React</li>
                <li>Spring Boot</li>
                <li>Postgres</li>
              </ul>
              <div className="project-actions">
                <a className="btn primary" href="#">
                  Live Demo
                </a>
                <a className="btn ghost" href="#">
                  View Source
                </a>
              </div>
            </div>
          </article>

        <article className="project-card project-row">
            <div className="project-media">
              <div className="media-gradient alt-two" />
            </div>
            <div className="project-content">
              <h3>API Gateway</h3>
              <p>
                Backend service with auth, rate limiting, and logging for
                microservices architecture.
              </p>
              <ul className="project-tech">
                <li>Java</li>
                <li>Spring Boot</li>
              </ul>
              <div className="project-actions">
                <a className="btn primary" href="#">
                  Live Demo
                </a>
                <a className="btn ghost" href="#">
                  View Source
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
