function CardSkill({ skillType, t1, t2, t3, t4, t5, t6 }) {
  return (
    <div className="card card-skill">
      <div className="container-logo">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="container-text">
        <h3>{skillType}</h3>
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
      </div>
    </div>
  );
}

export default CardSkill;
