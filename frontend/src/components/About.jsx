import headshot from "../assets/headshot.jpg";

function About() {
  return (
    <div id = "about">
      <img src={headshot} id="headshot2" />
      <div id="about-title-text-button">
        <p id="about-title">About</p>
        <p id="about-text">I am a current student at Rutgers University</p>
        <a href="#experience">Read More</a>
      </div>
    </div>
  );
}

export default About;
