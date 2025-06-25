import headshot from "../assets/headshot.jpg";
import linkedinIcon from "../assets/linkedin-icon.webp";
import githubIcon from "../assets/github-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/email-icon.webp";

function Home() {
  return (
    <div className="section section-home" id="home">
      <div className="container-hero">
        <div className="container-text">
          <div className="container-name-title">
            <h1>Sean Lumasag</h1>
            <h3>Software Engineer</h3>
          </div>
          <div className="home-text">
            <p>
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>
          <div className="container-button">
            <a href="#contact" className="cta-button">
              Contact
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
      </div>
    </div>
  );
}

export default Home;
