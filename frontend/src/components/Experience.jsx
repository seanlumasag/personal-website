import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="card-container">
        <ExperienceCard
          experienceTitle="Software Engineering Intern"
          experienceCompany="Data Storytelling"
        />
        <ExperienceCard
          experienceTitle="Coding Instructor"
          experienceCompany="Hadoop Express"
        />
        <ExperienceCard
          experienceTitle="Software Engineering Intern"
          experienceCompany="TAG Online"
        />
      </div>
    </div>
  );
}

export default Experience;
