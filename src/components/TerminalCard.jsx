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
            <span className="terminal-quote">&quot;</span>
            <a className="terminal-link" href="mailto:seanlumasag15@gmail.com">
              seanlumasag15@gmail.com
            </a>
            <span className="terminal-quote">&quot;</span>
            ,{' '}
            <span className="terminal-quote">&quot;</span>
            <a
              className="terminal-link"
              href="https://www.linkedin.com/in/seanlumasag/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="terminal-quote">&quot;</span>
            ,{' '}
            <span className="terminal-quote">&quot;</span>
            <a
              className="terminal-link"
              href="https://github.com/seanlumasag"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="terminal-quote">&quot;</span>
            ]
          </p>
          <p>&nbsp;</p>
          <p>&gt; Sean.resume</p>
          <p className="terminal-accent">
            <span className="terminal-quote">&quot;</span>
            <a
              className="terminal-link"
              href="/Lumasag_Sean_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              resume.pdf
            </a>
            <span className="terminal-quote">&quot;</span>
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
