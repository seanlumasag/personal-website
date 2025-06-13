import dataStorytellingImg from "../assets/data-storytelling.png";

function ExperienceCard({ img, link, experienceTitle, t1, t2, t3, desc }) {
  return (
    <div className="experience-card">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="text-container">
        <h1>{experienceTitle}</h1>
        <div className="tech-stack">
          <p>{t1}</p>
          <p>{t2}</p>
          <p>{t3}</p>
        </div>

        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
