import CardInfo from "../components/CardInfo";
import websiteImg from "../assets/favicon.png";
import ckdpredict from "../assets/ckdpredict.png";
function Projects() {
  return (
    <div className="section section-projects" id="projects">
      <h2>Projects</h2>
      <div className="container-card">
        <CardInfo
          img={ckdpredict}
          title="CKDPredict"
          t1="React"
          t2="Spring Boot"
          t3="PostgreSQL"
          t4="PyTorch"
          a1="Live Site"
          b1="http://ckdpredict.vercel.app"
          a2="Github"
          b2="https://github.com/seanlumasag/CKDPredict"
desc="Developed a full-stack web app serving as a risk predictor of Chronic Kidney Disease based on user health inputs, designed RESTful APIs with Spring Boot, persisted prediction data using PostgreSQL, and integrated a PyTorch machine learning model via a Python microservice using FastAPI
"
        />
        <CardInfo
          img={websiteImg}
          title="Personal Website"
          t1="React"
          t2="JavaScript"
          t3="HTML"
          t4="CSS"
          a1="Live Site"
          b1="http://seanlumasag.vercel.app"
          a2="Github"
          b2="https://github.com/seanlumasag/personal-website"
                  desc="Developed a responsive personal portfolio website to showcase my experiences, projects, and skills, and built with React and deployed on Vercel for fast, scalable hosting"

        />
      </div>
    </div>
  );
}

export default Projects;
