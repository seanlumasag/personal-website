import dataStorytellingImg from "../assets/data-storytelling.png";
import hadoopExpressImg from "../assets/hadoop-express.png";
import tagOnlineImg from "../assets/tag-online.png";
import InfoCard from "../components/InfoCard";
function Experience() {
  return (
    <div className="experience section" id="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="card-container">
        <InfoCard
          img={dataStorytellingImg}
          link="https://devonmcguinness.com"
          title="Software Engineering Intern"
          t1="TBD"
          t2="TBD"
          t3="TBD"
          desc="TBD"
        />
        <InfoCard
          img={hadoopExpressImg}
          link="https://www.hadoopexpress.com"
          title="Coding Instructor"
          t1="Python"
          t2="Block Coding"
          t3="Robotics"
          desc="Led weekly STEM sessions for 20+ students, teaching Python, block coding, and robotics using platforms like WeDo and EV3, while implementing 50+ hands-on projects to reinforce concepts. Achieved a 90% module completion rate by designing and executing a structured robotics curriculum."
        />
        <InfoCard
          img={tagOnlineImg}
          link="https://tagonline.com"
          title="Software Engineering Intern"
          t1="HTML"
          t2="CSS"
          t3="JavaScript"
          desc="Enhanced UI for 500+ monthly client site visitors by developing frontend layouts using HTML, CSS, and JavaScript, while increasing average site load speed by 10% through legacy site migration to WordPress. Collaborated with 7 interns to divide tasks, customize 20+ plugins, develop branded pages, and maintain consistent styling across five legacy codebases."
        />
      </div>
    </div>
  );
}

export default Experience;
