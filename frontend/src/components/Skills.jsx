import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="card-container">
        <SkillCard
          SkillType="Languages"
          SkillTech="Java, Python, C++"
        />
        <SkillCard
          SkillType="Frameworks"
          SkillTech="React, Flask"
        />
        <SkillCard
          SkillType="Tools"
          SkillTech="PostgreSQL, Git, Github, Terminal"
        />
      </div>
    </div>
  );
}

export default Skills;
