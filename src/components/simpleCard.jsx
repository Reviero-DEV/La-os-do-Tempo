import { FaArrowRight } from "react-icons/fa";

export default function SimpleCard({ icon, title, desc, textButton }) {
  return (
    <div className="card card-tab">
      <div className="tab-icon">{icon}</div>
      <div className="tab-text">
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
        {textButton && <button>{textButton}<FaArrowRight /></button>}
      </div>
    </div>
  );
}
