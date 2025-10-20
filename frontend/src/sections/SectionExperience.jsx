import dataStorytellingImg from "../assets/data-storytelling.png";
import hadoopExpressImg from "../assets/hadoop-express.png";
import tagOnlineImg from "../assets/tag-online.png";
import CardInfo from "../components/CardInfo";
import blueprint from "../assets/blueprint.jpeg";
import rutgers from "../assets/rutgers.jpeg";

import { Fade } from "react-awesome-reveal";

function Experience() {
  return (
    <div className="section section-experience" id="experience">
      <h2 className="experience-title">Experience</h2>
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
            img={rutgers}
            link="https://www.rutgers.edu"
            title="Machine Learning Research Intern"
            t1="Python"
            t2="PyTorch"
            t3="Torchvision"
            t4="NumPy"
            desc="Collaborating with research team members to evaluate model performance using industry standard metrics to identify areas for improvement in model design."
          />
          <CardInfo
            img={blueprint}
            link="https://www.linkedin.com/company/blueprint-rutgers/"
            title="Software Engineering Fellow"
            t1="Python"
            t2="SQL"
            t3="Git"
            desc="Selected for a backend software development fellowship, developing Python, SQL, and Git/GitHub skills through hands-on projects in database management, client-server systems, and HTTP protocols."
          />
          <CardInfo
            img={dataStorytellingImg}
            link="https://devonmcguinness.com"
            title="Software Engineering Intern"
            t1="PostgreSQL"
            t2="JavaScript"
            t3="React"
            desc="Developed transactional backend features for a fundraising web application using PostgreSQL, JavaScript and React; implemented real-time synchronization of user and payment data by integrating Supabase and PayPal APIs."
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
        </Fade>
      </div>
    </div>
  );
}

export default Experience;
