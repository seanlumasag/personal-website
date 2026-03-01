import { useEffect, useState } from 'react'
import './App.css'
import { Experience, Hero, Projects, Skills, TerminalCard } from './components'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ?? (prefersDark ? 'dark' : 'light')
    document.documentElement.dataset.theme = initial
    setTheme(initial)
  }, [])

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

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    window.localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <div className="app" id="top">
      <header className="top-nav">
        <nav className="top-nav-inner" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>
      <div className="page">
        <Hero />
        <TerminalCard />
        <Projects />
        <Experience />
        <Skills />
      </div>
      <footer className="footer">
        <div className="footer-inner">
          <label className="theme-toggle" aria-label="Toggle color theme">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span className="theme-slider" aria-hidden="true" />
          </label>
          <p>© 2026 Sean Lumasag. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
