import ExperienceCard from "./ExperienceCard";
import dataStorytellingImg from "../assets/data-storytelling.png";
import hadoopExpressImg from "../assets/hadoop-express.png";
import tagOnlineImg from "../assets/tag-online.png";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="card-container">
        <ExperienceCard
          img={dataStorytellingImg}
          link="https://devonmcguinness.com"
          experienceTitle="Software Engineering Intern"
        />
        <ExperienceCard
          img={hadoopExpressImg}
          link="https://www.hadoopexpress.com"
          experienceTitle="Coding Instructor"
        />
        <ExperienceCard
          img={tagOnlineImg}
          link="https://tagonline.com"
          experienceTitle="Software Engineering Intern"
        />
      </div>
    </div>
  );
}

export default Experience;
