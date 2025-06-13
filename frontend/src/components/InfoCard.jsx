import dataStorytellingImg from "../assets/data-storytelling.png";

function InfoCard({ img, link, title, t1, t2, t3, desc }) {
  return (
    <div className="card info-card">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="text-container">
        <h1>{title}</h1>
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

export default InfoCard;
