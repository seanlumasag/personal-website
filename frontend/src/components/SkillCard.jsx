function SkillCard({ SkillType, SkillTech }) {
  return (
    <div className="skill-card">
      <h1>{SkillType}</h1>
      <h1>{SkillTech}</h1>
    </div>
  );
}

export default SkillCard;