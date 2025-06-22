import TechTag from "../components/TechTag";
function InfoCard({ img, link, title, t1, t2, t3, t4, t5, desc }) {
  return (
    <div className="card card-info">
      <div className="logo-container">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <div className="tech-stack">
          <p>
            <TechTag text={t1} />
          </p>
          <p>
            <TechTag text={t2} />
          </p>
          <p>
            <TechTag text={t3} />
          </p>
          <p>
            <TechTag text={t4} />
          </p>
          <p>
            <TechTag text={t5} />
          </p>
        </div>

        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}

export default InfoCard;
