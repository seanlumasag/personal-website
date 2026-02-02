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
            [&quot;seanlumasag15@email.com&quot;, &quot;LinkedIn&quot;, &quot;GitHub&quot;]
          </p>
          <p>&nbsp;</p>
          <p>&gt; Sean.resume</p>
          <p className="terminal-accent">&quot;resume.pdf&quot;</p>
          <p>&nbsp;</p>
          <p>&gt; Sean.education</p>
          <p className="terminal-accent">&quot;Rutgers University–New Brunswick&quot;</p>
          <p>&nbsp;</p>
          <p>&gt; Sean.languages</p>
          <p className="terminal-warm">
            [&quot;Java&quot;, &quot;Python&quot;, &quot;TypeScript&quot;]
          </p>
          <p>&nbsp;</p>
          <p>
            &gt; <span className="terminal-text"> </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default TerminalCard
