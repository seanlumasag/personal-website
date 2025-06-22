import linkedinIcon from "../assets/linkedin-icon.webp";
import githubIcon from "../assets/github-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/email-icon.webp";
function Contact() {
  return (
    <footer className="contact section" id="contact">
      <ul className="contact-icons">
        <li>
          <a href="mailto:seanlumasag15@gmail.com" target="_blank">
            <div className="container-img">
              <img src={emailIcon} alt="Email" />
            </div>
          </a>
        </li>
        <li>
          <a href="tel:+18622418905" target="_blank">
            <div className="container-img">
              <img src={phoneIcon} alt="Phone" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/seanlumasag" target="_blank">
            <div className="container-img">
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/seanlumasag" target="_blank">
            <div className="container-img">
              <img src={githubIcon} alt="GitHub" />
            </div>
          </a>
        </li>
      </ul>

      <ul className="navbar">
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
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>Copyright © 2025 Sean Lumasag. All rights reserved.</p>
    </footer>
  );
}

export default Contact;
