const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="projects-inner">
      <div className="projects-header">
        <h2>Explore my projects.</h2>
      </div>
        <div className="project-stack">
        <article className="project-card">
            <div className="project-content">
              <h3>Live Messaging App</h3>
              <p>
                Built a real-time chat platform with Spring Boot APIs,
                JWT-secured access, WebSocket/STOMP messaging, and PostgreSQL
                history.
              </p>
              <ul className="project-tech">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>WebSockets</li>
                <li>PostgreSQL</li>
                <li>React</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn primary"
                  href="https://livechat-seanlumasag.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/live-messaging-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </article>

        <article className="project-card">
            <div className="project-content">
              <h3>Job Application Tracker</h3>
              <p>
                Built a workflow-driven job tracker with analytics dashboards,
                JWT auth, audit trails, and a React/TypeScript frontend.
              </p>
              <ul className="project-tech">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>PostgreSQL</li>
                <li>JWT</li>
                <li>Docker</li>
                <li>React</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn primary"
                  href="https://jobtrack-seanlumasag.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="btn ghost"
                  href="https://github.com/seanlumasag/job-application-tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </article>

        <article className="project-card">
            <div className="project-content">
              <h3>API Gateway</h3>
              <p>
                Built a centralized API gateway with OAuth2/JWT validation,
                Redis-backed rate limiting, and Prometheus metrics.
              </p>
              <ul className="project-tech">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>OAuth2/JWT</li>
                <li>Redis</li>
                <li>Prometheus</li>
              </ul>
              <div className="project-actions">
                <a
                  className="btn primary"
                  href="https://github.com/seanlumasag/api-gateway"
                  target="_blank"
                  rel="noreferrer"
                >
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
