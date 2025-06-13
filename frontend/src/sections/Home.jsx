import headshot from "../assets/headshot.jpg";

function Home() {
  return (
    <div className="home section" id="home">
      <div className="intro">
        <h1>Hello,</h1>
        <h1>
          I'm <span className="name">Sean</span>
        </h1>
        <h1>Software Engineer</h1>
        <div className="intro-buttons">
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="headshot-container">
        <img src={headshot} className="headshot" />
      </div>
    </div>
  );
}

export default Home;
