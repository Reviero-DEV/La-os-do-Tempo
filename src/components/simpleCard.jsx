export default function SimpleCard({ image, icon, title, desc }) {
  return (
    <div className="card card-tab">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="tab-icon">{icon && icon}</div>
      <div className="tab-text">
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
}
