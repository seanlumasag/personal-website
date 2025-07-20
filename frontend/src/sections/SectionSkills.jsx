import CardInfo from "../components/CardInfo";
import code from "../assets/code.png";
import folder from "../assets/folder.png";
import wrench from "../assets/wrench.webp";

import { Fade } from "react-awesome-reveal";

function Skills() {
  return (
    <div className="section section-skills" id="skills">
      <h2>Skills</h2>
      <div className="container-card">
        <Fade
          cascade
          direction={"up"}
          damping={0.15}
          delay={100}
          duration={800}
          fraction={0.3}
          triggerOnce
        >
          <CardInfo
            img={code}
            title="Languages"
            t1="Python"
            t2="Java"
            t3="C++"
            t4="JavaScript"
            t5="HTML"
            t6="CSS"
          />
          <CardInfo
            img={folder}
            title="Frameworks"
            t1="React"
            t2="Spring Boot"
            t3="PyTorch"
          />
          <CardInfo
            img={wrench}
            title="Tools"
            t1="PostgreSQL"
            t2="Git"
            t3="Terminal"
            t4="Vercel"
            t5="Render"
            t6="Neon"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
