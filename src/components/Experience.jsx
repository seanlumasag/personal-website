const Experience = () => {
  return (
    <section id="experience" className="section projects experience">
      <div className="projects-inner">
        <div className="projects-header">
          <h2>View my experience.</h2>
        </div>
        <div className="project-stack">
          <article className="project-card">
            <div className="project-content">
              <h3>Software Engineer Intern</h3>
              <p className="experience-org">
                Data Storytelling
              </p>
              <p>
                Built a payment-to-fulfillment pipeline with TypeScript and
                Supabase, implementing secure auth and RLS policies to ensure
                auditable transactions and consistent dashboards.
              </p>
              <ul className="project-tech">
                <li>React</li>
                <li>TypeScript</li>
                <li>Supabase</li>
              </ul>
            </div>
          </article>
          <article className="project-card">
            <div className="project-content">
              <h3>Coding Instructor</h3>
              <p className="experience-org">
                Hadoop Express
              </p>
              <p>
                Designed 50+ hands-on lessons in Python, block coding, and
                robotics while leading weekly instruction for 20+ students.
              </p>
              <ul className="project-tech">
                <li>Python</li>
                <li>Robotics</li>
                <li>Instruction</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
