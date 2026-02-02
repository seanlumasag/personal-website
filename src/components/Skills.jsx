const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="skills-inner">
        <div className="projects-header">
          <h2 className="type-title matrix-hover">&gt; My technical skills.</h2>
        </div>
        <div className="skills-grid">
          <article className="skills-card">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </article>
          <article className="skills-card">
            <h3>Frameworks</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </article>
          <article className="skills-card">
            <h3>Tools</h3>
            <ul className="skill-list">
              <li>Figma</li>
              <li>GitHub</li>
              <li>Docker</li>
              <li>Vite</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills
