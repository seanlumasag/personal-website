import headshot from "../assets/headshot.jpg";

function Home() {
  return (
    <div className="home section" id="home">
      <div className="conainer-text">
        <h1>Hello,</h1>
        <h1>
          I'm <span className="accent">Sean</span>
        </h1>
        <h1>Software Engineer</h1>
        <div className="container-button">
          <a href="#contact" className="cta-button">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
