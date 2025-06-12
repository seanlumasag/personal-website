import dataStorytellingImg from "../assets/data-storytelling.png";

function ExperienceCard({ img, link, experienceTitle, b1, b2, b3, b4, b5 }) {
  return (
    <div className="experience-card">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="text-container">
        <h1>{experienceTitle}</h1>
        <ul className="bullets">
          <li>
            <p>{b1}</p>
          </li>
          <li>
            <p>{b2}</p>
          </li>
          <li>
            <p>{b3}</p>
          </li>
          <li>
            <p>{b4}</p>
          </li>
          <li>
            <p>{b5}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
