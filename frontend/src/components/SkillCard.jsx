function SkillCard({ skillType, t1, t2, t3, t4, t5, t6 }) {
  return (
    <div className="card skill-card">
      <h1>{skillType}</h1>
      <div className="tech-stack">
        <p>{t1}</p>
        <p>{t2}</p>
        <p>{t3}</p>
        <p>{t4}</p>
        <p>{t5}</p>
        <p>{t6}</p>
      </div>
    </div>
  );
}

export default SkillCard;
