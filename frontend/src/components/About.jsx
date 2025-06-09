import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="headshot2-container">
        <img src={headshot} className="headshot2" />
      </div>
      <div className="about-title-text-button">
        <p className="about-title">About</p>
        <p className="about-text">
          Computer Science and Data Science student at Rutgers University–New Brunswick with a strong interest in software engineering, machine learning, and artificial intelligence. 
        </p>
        <div className="about-button">
          <a href="#experience">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
