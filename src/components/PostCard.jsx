import { FaArrowRight } from "react-icons/fa";

export default function PostCard({ image, icon, date, title, desc, link }) {
  return (
    <div className="card card-post">
      <div className="tab-image">
        <img src={image} alt={title} />
      </div>
      {icon && <div className="post-icon">{icon}</div>}
      <div className="tab-text">
        {date && <small>{date}</small>}
        {title && <h3>{title}</h3>}
        {desc && <p>{desc}</p>}
        {link && (
          <a href={link}>
            Ler mais <FaArrowRight />
          </a>
        )}
      </div>
    </div>
  );
}
