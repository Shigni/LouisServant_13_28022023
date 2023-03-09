export function Cards({ icon, altText, title, text }) {
  return (
    <div className="home-card-container">
      <img src={icon} alt={altText} />

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}
