import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="headshot2-container">
        <img src={headshot} className="headshot2" />
      </div>
      <div className="about-title-text-button">
        <h1>About Me</h1>
        <p>
          Computer Science and Data Science student at Rutgers University–New Brunswick with a strong interest in software engineering, machine learning, and artificial intelligence. 
        </p>
        <div className="about-button">
          <a href="#experience">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
