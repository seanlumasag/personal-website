import CardInfo from "../components/CardInfo";
import websiteImg from "../assets/favicon.png";
import books from "../assets/books.png";
import code from "../assets/code.png";
import scaffolding from "../assets/scaffolding.png";
import wrench from "../assets/wrench.webp";

function Skills() {
  return (
    <div className="section section-skills" id="skills">
      <h2>Skills</h2>
      <div className="container-card">
        <CardInfo
          img={code}
          title="Languages"
          t1="Java"
          t2="Python"
          t3="C++"
          t4="JavaScript"
          t5="HTML"
          t6="CSS"
        />
        <CardInfo
          img={scaffolding}
          title="Frameworks"
          t1="React"
          t2="Spring Boot"
          t3="Django"
        />
        <CardInfo
          img={books}
          title="Libraries"
          t1="TensorFlow"
          t2="Numpy"
          t3="Pandas"
          t4="Matplotlib"
        />
        <CardInfo
          img={wrench}
          title="Tools"
          t1="PostgreSQL"
          t2="Git"
          t3="GitHub"
          t4="Terminal"
        />
      </div>
    </div>
  );
}

export default Skills;
