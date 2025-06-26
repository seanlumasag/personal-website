function AboutCard({ title, text }) {
  return (
    <div className="card card-about">
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
}

export default AboutCard;
