import headshot from "../assets/headshot.jpg";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="section-home" id="home">
      <div className="container-hero">
        <div className="container-text">
          <div className="container-name-title">
            <h1>Sean Lumasag</h1>
            <h3>Software Engineer</h3>
          </div>
          <div className="home-text">
            <p>
              Transforming complex, innovative ideas into real, impactful
              solutions
            </p>
          </div>
          <div className="container-button">
            <a href="#contact" className="cta-button">
              Resume
            </a>
          </div>
        </div>
        <div className="container-headshot">
          <img src={headshot} alt="headshot " />
        </div>
      </div>

      <div className="container-contact">
        <ul className="contact-icons">
          <li>
            <a href="mailto:seanlumasag15@gmail.com" target="_blank">
              <FaEnvelope size={30} className="icon" />
            </a>
          </li>
          <li>
            <a href="tel:+18622418905" target="_blank">
              <FaPhone size={30} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/seanlumasag" target="_blank">
              <FaLinkedin size={30} className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/seanlumasag" target="_blank">
              <FaGithub size={30} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
