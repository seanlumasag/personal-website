function AboutCard({ title, text }) {
  return (
    <div className="card about-card">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default AboutCard;
