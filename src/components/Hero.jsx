import { useEffect, useRef } from 'react'

const fullName = 'Sean Lumasag'

const Hero = () => {
  const nameRef = useRef(null)

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.dataset.typing = '0'
    }
  }, [])

  return (
    <section id="hero" className="section hero">
      <h1 className="hero-name terminal-name">
        <span className="hero-type">
          <span ref={nameRef} className="terminal-text">
            {fullName}
          </span>
        </span>
      </h1>
      <div className="lead-block">
        <p>I am a software engineer who builds backend systems.</p>
        <p>
          Check out my <a href="#projects">projects</a> below.
        </p>
      </div>
    </section>
  )
}

export default Hero
