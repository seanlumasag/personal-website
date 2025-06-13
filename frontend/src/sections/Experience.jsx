import ExperienceCard from "../components/ExperienceCard";
import dataStorytellingImg from "../assets/data-storytelling.png";
import hadoopExpressImg from "../assets/hadoop-express.png";
import tagOnlineImg from "../assets/tag-online.png";

function Experience() {
  return (
    <div className="experience section" id="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="card-container">
        <ExperienceCard
          img={dataStorytellingImg}
          link="https://devonmcguinness.com"
          experienceTitle="Software Engineering Intern"
          t1="JavaScript"
          t2="React"
          t3=""
          desc="Enhanced UI for 500+ monthly client site visitors by developing frontend layouts with HTML, CSS, and JavaScript"
        />
        <ExperienceCard
          img={hadoopExpressImg}
          link="https://www.hadoopexpress.com"
          experienceTitle="Coding Instructor"
          t1="Robotics"
          t2="Python"
          t3="Block Coding"
          desc="Led weekly STEM instruction to 20+ students by guiding them through programming and engineering challenges"
        />
        <ExperienceCard
          img={tagOnlineImg}
          link="https://tagonline.com"
          experienceTitle="Software Engineering Intern"
          t1="HTML"
          t2="CSS"
          t3="JavaScript"
          desc="Enhanced UI for 500+ monthly client site visitors by developing frontend layouts with HTML, CSS, and JavaScript"
        />
      </div>
    </div>
  );
}

export default Experience;
