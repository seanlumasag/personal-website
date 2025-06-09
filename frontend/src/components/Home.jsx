import headshot from "../assets/headshot.jpg";

function Home() {
  return (
    <div className="home" id="home">
      <div className="intro">
        <p className="p1">Hello,</p>
        <p className="p2">
          I'm <span className="name">Sean</span>
        </p>
        <p className="p3">Software Engineer</p>
        <div className="intro-buttons">
          <a href="">Download Resume</a>
          <a href="#footer">Contact Info</a>
        </div>
      </div>
      <div className="headshot-container">
        <img src={headshot} className="headshot" />
      </div>
    </div>
  );
}

export default Home;
