import CardInfo from "../components/CardInfo";
import websiteImg from "../assets/favicon.png";
import ckdpredict from "../assets/ckdpredict.png";
import quantilabs from "../assets/quantilabs.png";

import { Fade } from "react-awesome-reveal";

function Projects() {
  return (
    <div className="section section-projects" id="projects">
      <h2>Projects</h2>
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
            img={quantilabs}
            title="QuantiLabs"
            t1="React"
            t2="Spring Boot"
            t3="PostgreSQL"
            link="https://github.com/seanlumasag/QuantiLabs"
            desc="Developed a full-stack web application serving as a quantitative backtester based on 6+ user market parameter inputs through an interactive React interface; designed and implemented 5 RESTful APIs using Spring Boot to handle user input and persist backtesting results in PostgreSQL"
          />
          <CardInfo
            img={ckdpredict}
            title="CKDPredict"
            t1="React"
            t2="Spring Boot"
            t3="PostgreSQL"
            t4="PyTorch"
            link="https://github.com/seanlumasag/CKDPredict"
            desc="Developed a full-stack web application serving as a risk predictor of Chronic Kidney Disease based on user health inputs; designed RESTful APIs with Spring Boot, persisted prediction data using PostgreSQL, and integrated a PyTorch machine learning model via a Python microservice using FastAPI"
          />
          <CardInfo
            img={websiteImg}
            title="Personal Website"
            t1="React"
            t2="JavaScript"
            t3="HTML"
            t4="CSS"
            link="https://github.com/seanlumasag/personal-website"
            desc="Developed a responsive personal portfolio website to showcase my experiences, projects, and skills; built with React and deployed on Vercel for fast, scalable hosting"
          />
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
