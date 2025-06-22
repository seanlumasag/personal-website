import CardSkill from "../components/CardSkill";

function Skills() {
  return (
    <div className="section section-skills" id="skills">
      <h1>Skills</h1>
      <div className="container-card">
        <CardSkill
          skillType="Languages"
          t1="Java"
          t2="Python"
          t3="JavaScript"
        />
        <CardSkill SkillType="Frameworks" SkillTech="React, Flask" />
        <CardSkill
          SkillType="Tools"
          SkillTech="PostgreSQL, Git, Github, Terminal"
        />
      </div>
    </div>
  );
}

export default Skills;
