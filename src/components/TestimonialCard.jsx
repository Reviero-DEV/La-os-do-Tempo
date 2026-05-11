export default function TestimonialCard({ image, desc, name, age }) {
  return (
    <div className="card card-testimonial">
      {image && (
        <div className="tab-image">
          <img src={image} alt={name} />
        </div>
      )}
      <div className="tab-text">
        {desc && <p>{desc}</p>}
        {(name || age) && (
          <small>
            {name}
            {name && age ? ", " : ""}
            {age}
          </small>
        )}
      </div>
    </div>
  );
}
