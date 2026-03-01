import { useEffect } from 'react'
import './App.css'
import { Experience, Hero, Projects, Skills, TerminalCard } from './components'

function App() {
  useEffect(() => {
    const selector =
      '.section > *, .project-card > *, .terminal-card > *, .projects-header, .projects-inner > *, .skills-row > *, .skills-item'
    const elements = Array.from(document.querySelectorAll(selector))

    elements.forEach((el) => el.classList.add('reveal'))

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            target.classList.add('reveal-visible')

            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app" id="top">
      <div className="page">
        <Hero />
        <TerminalCard />
        <Projects />
        <Experience />
        <Skills />
      </div>
      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 Sean Lumasag. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
