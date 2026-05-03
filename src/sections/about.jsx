import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import imgAbout from "../assets/images/about/banner-sobrenos.webp";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-text">
        <p>Sobre nós</p>
        <h3>
          Cuidar de hoje transforma o <span>amanhã</span>
        </h3>
        <p>
          Somos uma organização sem fins lucrativos que há mais de 15 anos
          dedica-se ao cuidado e à promoção da qualidade de vida de idosos em
          situação de vulnerabilidade.
        </p>
        <p>
          Nosso trabalho é feito por pessoas que acreditam no poder da empatia e
          da solidariedade para transformar vidas.
        </p>
        <a href="/sobre">
          Conheça nossa história <FaArrowRight />
        </a>
      </div>
      <div className="about-image">
        <img src={imgAbout} alt="Casal de idosos sorrindo" />
      </div>
      <div className="tabs">
        <div className="tab-about">
          <div className="icon-about">
            <FaHandHoldingHeart />
          </div>
          <p>+15 anos de dedicação</p>
        </div>

        <div className="tab-about">
          <div className="icon-about">
            <FaHeart />
          </div>
          <p>+300 idosos atendidos mensalmente</p>
        </div>

        <div className="tab-about">
          <div className="icon-about">
            <FaUsers />
          </div>
          <p>+100 voluntários que fazem a diferença</p>
        </div>
      </div>
    </section>
  );
}
