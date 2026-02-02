import { useEffect, useRef, useState } from 'react'

const fullName = 'Sean Lumasag'

const Hero = () => {
  const [typedName, setTypedName] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const nameRef = useRef(null)

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.dataset.typing = '1'
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedName(fullName)
      setIsTyping(false)
      if (nameRef.current) {
        nameRef.current.dataset.typing = '0'
      }
      return
    }

    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTypedName(fullName.slice(0, index))
      if (index >= fullName.length) {
        clearInterval(interval)
        setIsTyping(false)
        if (nameRef.current) {
          nameRef.current.dataset.typing = '0'
        }
      }
    }, 90)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="section hero">
      <h1 className="hero-name terminal-name matrix-hover no-warp">
        <span className={`hero-type${isTyping ? ' is-typing' : ''}`}>
          &gt;&nbsp;
          <span ref={nameRef} className="terminal-text no-terminal-cursor">
            {typedName}
          </span>
          <span className="terminal-cursor" />
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
