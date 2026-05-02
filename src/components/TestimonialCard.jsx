export default function TestimonialCard({ image, desc, name, age }) {
  return (
    <div className="card card-testimonial">
      <div className="tab-image">{image}</div>
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
