import headshot from "../assets/headshot.jpg";

function Home() {
  return (
    <div id="home">
      <div id="intro">
        <p id="p1">Hello,</p>
        <p id="p2">
          I'm <span id="name">Sean</span>
        </p>
        <p id="p3">Software Engineer</p>
        <div id="intro-buttons">
          <a href="">Download Resume</a>
          <a href="#footer">Contact Info</a>
        </div>
      </div>
      <img src={headshot} id="headshot" />
    </div>
  );
}

export default Home;
