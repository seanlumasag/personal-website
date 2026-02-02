const TerminalCard = () => {
  return (
    <section className="section terminal-section">
      <div className="terminal-card">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-body">
          <p>&gt; Sean.location</p>
          <p className="terminal-accent">&quot;New Jersey, USA&quot;</p>
          <p>&nbsp;</p>
          <p>&gt; Sean.contact</p>
          <p className="terminal-accent">
            [
            <a className="terminal-link" href="mailto:seanlumasag15@gmail.com">
              &quot;seanlumasag15@gmail.com&quot;
            </a>
            ,{' '}
            <a
              className="terminal-link"
              href="https://www.linkedin.com/in/seanlumasag/"
              target="_blank"
              rel="noreferrer"
            >
              &quot;LinkedIn&quot;
            </a>
            ,{' '}
            <a
              className="terminal-link"
              href="https://github.com/seanlumasag"
              target="_blank"
              rel="noreferrer"
            >
              &quot;GitHub&quot;
            </a>
            ]
          </p>
          <p>&nbsp;</p>
          <p>&gt; Sean.resume</p>
          <p className="terminal-accent">
            <a
              className="terminal-link"
              href="/Lumasag_Sean_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              &quot;resume.pdf&quot;
            </a>
          </p>
          <p>&nbsp;</p>
          <p>&gt; Sean.education</p>
          <p className="terminal-accent">&quot;Rutgers University–New Brunswick&quot;</p>
          <p>&nbsp;</p>
          <p>&gt; Sean.languages</p>
          <p className="terminal-warm">
            [&quot;Java&quot;, &quot;Python&quot;, &quot;TypeScript&quot;]
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </section>
  )
}

export default TerminalCard
