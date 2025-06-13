import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <div className="skills section" id="skills">
      <h1>Skills</h1>
      <div className="card-container">
        <SkillCard
          skillType="Languages"
          t1="Java"
          t2="Python"
          t3="JavaScript"
        />
        <SkillCard SkillType="Frameworks" SkillTech="React, Flask" />
        <SkillCard
          SkillType="Tools"
          SkillTech="PostgreSQL, Git, Github, Terminal"
        />
      </div>
    </div>
  );
}

export default Skills;
