import dataStorytellingImg from "../assets/data-storytelling.png";
import hadoopExpressImg from "../assets/hadoop-express.png";
import tagOnlineImg from "../assets/tag-online.png";
import CardInfo from "../components/CardInfo";

function Experience() {
  return (
    <div className="section section-experience" id="experience">
      <h2 className="experience-title">Experience</h2>
      <div className="container-card">
        <CardInfo
          img={dataStorytellingImg}
          link="https://devonmcguinness.com"
          title="Software Engineering Intern"
          t1="PostgreSQL"
          t2="React"
          t3="JavaScript"
          desc="Developed payment-processing features for a transactional fundraising web application using React, PayPal API, and PostgreSQL, enabling secure user purchases; integrated Supabase into the payment system to store and manage transaction and user data"
        />
        <CardInfo
          img={hadoopExpressImg}
          link="https://www.hadoopexpress.com"
          title="Coding Instructor"
          t1="Python"
          t2="Block Coding"
          t3="Robotics"
          desc="Led weekly STEM instruction to students by guiding them through programming and engineering challenges; instructed Python, block coding, and robotics concepts by utilizing WeDo, EV3, and other learning platforms."
        />
        <CardInfo
          img={tagOnlineImg}
          link="https://tagonline.com"
          title="Software Engineering Intern"
          t1="HTML"
          t2="CSS"
          t3="JavaScript"
          desc="Developed responsive frontend components for business client websites by using HTML, CSS, and JavaScript; optimized site performance by refactoring and migrating legacy websites using WordPress CMS."
        />
      </div>
    </div>
  );
}

export default Experience;
