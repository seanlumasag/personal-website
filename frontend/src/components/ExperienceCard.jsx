import dataStorytellingImg from "../assets/data-storytelling.png";

function ExperienceCard({ img, link, experienceTitle }) {
  return (
    <div className="experience-card">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <h1>{experienceTitle}</h1>
    </div>
  );
}

export default ExperienceCard;
