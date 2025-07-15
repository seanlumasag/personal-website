import TechTag from "./TechTag";
import ProjectButton from "../components/ProjectButton";

function CardInfo({
  img,
  link,
  title,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  a1,
  b1,
  a2,
  b2,
  desc,
}) {
  return (
    <div className="card card-info">
      <div className="container-logo">
        <a href={link} target="_blank">
          <img src={img} alt="" />
        </a>
      </div>
      <div className="container-text">
        <h3>{title}</h3>

        <p className="desc">{desc}</p>
        <div className="tag-container">
          <div className="tech-stack">
            {t1 && <TechTag text={t1} />}
            {t2 && <TechTag text={t2} />}
            {t3 && <TechTag text={t3} />}
            {t4 && <TechTag text={t4} />}
            {t5 && <TechTag text={t5} />}
            {t6 && <TechTag text={t6} />}
            {t7 && <TechTag text={t7} />}
            {t8 && <TechTag text={t8} />}
            {t9 && <TechTag text={t9} />}
          </div>
          <div className="project-button-container">
            {a1 && <ProjectButton text={a1} link={b1} />}
            {a2 && <ProjectButton text={a2} link={b2} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
