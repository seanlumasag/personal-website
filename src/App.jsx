import { useEffect, useRef } from 'react'
import './App.css'
import { Experience, Hero, Projects, Skills, TerminalCard } from './components'

function App() {
  const navRef = useRef(null)

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

  useEffect(() => {
    const nav = navRef.current
    const sections = Array.from(
      document.querySelectorAll('#hero, #projects, #experience, #skills')
    )

    if (!nav || sections.length === 0) return

    const setActive = (id) => {
      const links = nav.querySelectorAll('a[data-section]')
      links.forEach((link) => {
        link.classList.toggle('active', link.dataset.section === id)
      })
    }

    let ticking = false
    const getActive = () => {
      const marker = 120
      const current =
        sections.findLast((section) => section.getBoundingClientRect().top <= marker) ||
        sections[0]
      if (current) setActive(current.id)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(getActive)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="app" id="top">
      <aside className="sidebar">
        <nav ref={navRef} aria-label="Primary">
          <ul className="side-links">
            <li>
              <a href="#top" data-section="hero">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" data-section="projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" data-section="experience">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" data-section="skills">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </aside>
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
