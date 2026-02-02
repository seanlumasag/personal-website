const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="skills-inner">
        <div className="projects-header">
          <h2 className="type-title matrix-hover">&gt; My technical skills</h2>
        </div>
        <div className="skills-rows">
          <article className="skills-row">
            <h3 className="skills-subtitle">Languages</h3>
            <div className="skills-items">
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">Java</p>
                  <p className="skills-meta">Backend systems</p>
                </div>
              </div>
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">Python</p>
                  <p className="skills-meta">Data + automation</p>
                </div>
              </div>
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">TypeScript</p>
                  <p className="skills-meta">Typed frontend</p>
                </div>
              </div>
            </div>
          </article>
          <article className="skills-row">
            <h3 className="skills-subtitle">Frameworks</h3>
            <div className="skills-items">
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">React</p>
                  <p className="skills-meta">Component UI</p>
                </div>
              </div>
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">Spring Boot</p>
                  <p className="skills-meta">REST + services</p>
                </div>
              </div>
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">Vite</p>
                  <p className="skills-meta">Build tooling</p>
                </div>
              </div>
            </div>
          </article>
          <article className="skills-row">
            <h3 className="skills-subtitle">Tools</h3>
            <div className="skills-items">
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">Figma</p>
                  <p className="skills-meta">UI design</p>
                </div>
              </div>
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">Docker</p>
                  <p className="skills-meta">Containers</p>
                </div>
              </div>
              <div className="skills-item">
                <span className="skills-icon" aria-hidden="true" />
                <div>
                  <p className="skills-name">GitHub</p>
                  <p className="skills-meta">Version control</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills
