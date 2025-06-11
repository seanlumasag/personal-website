import headshot from "../assets/headshot.jpg";
import linkedinIcon from "../assets/linkedin-icon.webp"
import githubIcon from "../assets/github-icon.png"

function Contact() {
  return (
    <footer className="contact" id="contact">
      <ul className="icons">
        <li>
          <a href="https://github.com/seanlumasag" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/seanlumasag" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>Copyright © 2025 Sean Lumasag | All rights reserved</p>
    </footer>
  );
}

export default Contact;
