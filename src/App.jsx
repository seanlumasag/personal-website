import { useEffect, useRef } from 'react'
import './App.css'
import { Experience, Hero, Projects, Skills, TerminalCard } from './components'

function App() {
  const navRef = useRef(null)

  useEffect(() => {
    const selector =
      '.section > *, .project-card > *, .terminal-card > *, .projects-header, .projects-inner > *, .type-title, .skills-row > *, .skills-item'
    const elements = Array.from(document.querySelectorAll(selector))

    elements.forEach((el) => el.classList.add('reveal'))

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-='

    const wrapText = (el) => {
      if (el.dataset.wrapped === '1') return
      if (el.dataset.typing === '1') return
      const text = el.textContent ?? ''
      el.textContent = ''
      text.split(/(\s+)/).forEach((token) => {
        if (!token) return
        if (/^\s+$/.test(token)) {
          const space = document.createElement('span')
          space.className = 'matrix-space'
          space.textContent = token
          el.appendChild(space)
          return
        }
        const word = document.createElement('span')
        word.className = 'matrix-word'
        Array.from(token).forEach((char) => {
          const span = document.createElement('span')
          span.className = 'matrix-char'
          span.dataset.originalChar = char
          span.dataset.scramble = /[A-Za-z0-9]/.test(char) ? '1' : '0'
          span.textContent = char
          word.appendChild(span)
        })
        el.appendChild(word)
      })
      el.classList.add('matrix-scramble')
      el.dataset.wrapped = '1'
    }

    const scrambleChar = (span) => {
      if (span.dataset.scrambling === '1') return
      span.dataset.scrambling = '1'
      const original = span.dataset.originalChar ?? ''
      let tick = 0
      const interval = setInterval(() => {
        span.textContent = charset[Math.floor(Math.random() * charset.length)]
        tick += 1
        if (tick > 8) {
          clearInterval(interval)
          span.textContent = original
          span.dataset.scrambling = '0'
        }
      }, 45)
    }

    const attachMatrix = (el) => {
      wrapText(el)
      if (el.dataset.matrixAttached === '1') return
      el.dataset.matrixAttached = '1'
      el.addEventListener('pointerover', (event) => {
        const target = event.target
        if (!(target instanceof HTMLElement)) return
        const word = target.closest('.matrix-word')
        if (!word || !el.contains(word)) return
        if (word.dataset.scrambling === '1') return
        word.dataset.scrambling = '1'
        word.querySelectorAll('.matrix-char[data-scramble="1"]').forEach((span) => {
          scrambleChar(span)
        })
        setTimeout(() => {
          word.dataset.scrambling = '0'
        }, 900)
      })
    }

    const setupTypeTitle = (target) => {
      if (target.dataset.typed === '1') return
      const text = target.textContent ?? ''
      target.textContent = ''
      const textSpan = document.createElement('span')
      textSpan.className = 'type-text'
      textSpan.textContent = text
      textSpan.dataset.typing = '1'
      const cursorSpan = document.createElement('span')
      cursorSpan.className = 'type-cursor'
      target.append(textSpan, cursorSpan)
      target.dataset.typed = '1'
      target.style.setProperty('--chars', String(text.length))
      target.classList.add('is-typing')

      if (prefersReducedMotion) {
        textSpan.dataset.typing = '0'
        attachMatrix(textSpan)
        target.classList.remove('is-typing')
        return
      }

      textSpan.classList.add('typing')
      setTimeout(() => {
        textSpan.classList.remove('typing')
        textSpan.dataset.typing = '0'
        attachMatrix(textSpan)
        target.classList.remove('is-typing')
      }, 1400)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            target.classList.add('reveal-visible')

            if (target.classList.contains('type-title')) {
              setupTypeTitle(target)
            }

            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    if (!prefersReducedMotion) {
      document.querySelectorAll('.terminal-text').forEach((el) => {
        attachMatrix(el)
        if (el.dataset.typing === '1') {
          const interval = setInterval(() => {
            if (el.dataset.typing !== '1') {
              clearInterval(interval)
              attachMatrix(el)
            }
          }, 100)
        }
      })
    }

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    let raf = 0
    const update = () => {
      const offset = -window.scrollY * 0.2
      document.documentElement.style.setProperty('--dot-translate', `${offset}px`)
      raf = 0
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="app" id="top">
      <div className="parallax-bg" aria-hidden="true" />
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
