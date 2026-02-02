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
              <div className="media-gradient" />
            </div>
            <div className="project-content">
              <h3>Travlr</h3>
              <p>
                Travel smarter by saving the places you want to go. Built with
                maps, pins, and interactive lists.
              </p>
              <ul className="project-tech">
                <li>React</li>
                <li>TypeScript</li>
                <li>Maps API</li>
                <li>Vite</li>
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
              <div className="media-gradient alt-one" />
            </div>
            <div className="project-content">
              <h3>Charted</h3>
              <p>
                A stock dashboard that turns market data into clear trends and
                actionable insights.
              </p>
              <ul className="project-tech">
                <li>React</li>
                <li>Node</li>
                <li>Charts</li>
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
              <h3>Focus</h3>
              <p>
                A lightweight habit tracker with gentle nudges and streaks that
                make routines feel achievable.
              </p>
              <ul className="project-tech">
                <li>React</li>
                <li>Supabase</li>
                <li>Tailwind</li>
                <li>Framer</li>
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
