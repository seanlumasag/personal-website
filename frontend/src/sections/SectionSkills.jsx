import CardInfo from "../components/CardInfo";
import books from "../assets/books.png";
import code from "../assets/code.png";
import folder from "../assets/folder.png";
import wrench from "../assets/wrench.webp";

function Skills() {
  return (
    <div className="section section-skills" id="skills">
      <h2>Skills</h2>
      <div className="container-card">
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
          t1="Django"
          t2="React"
          t3="PyTorch"
        />
        <CardInfo
          img={wrench}
          title="Tools"
          t1="PostgreSQL"
          t2="Git"
          t4="Terminal"
        />
      </div>
    </div>
  );
}

export default Skills;
