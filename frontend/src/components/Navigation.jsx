function Nav() {
  return (
    <nav className="navigation" id="navigation">
      <div className="navbar-container">
        <a href="#home" className="name">
          Sean <span className="accent">Lumasag</span>
        </a>
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
          {/*
        <li>
          <a href="#skills">Skills</a>
        </li>
        */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
