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
        <h2>Sobre nós</h2>
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
          <div class="tab-text">
            <h4>+15</h4>
            <p>anos de dedicação</p>
          </div>
        </div>

        <div className="tab-about">
          <div className="icon-about">
            <FaHeart />
          </div>
          <div class="tab-text">
            <h4>+300</h4>
            <p>idosos atendidos mensalmente</p>
          </div>
        </div>

        <div className="tab-about">
          <div className="icon-about">
            <FaUsers />
          </div>
          <div class="tab-text">
          <h4>+100</h4>
          <p>voluntários que fazem a diferença</p>
          </div>
        </div>
      </div>
    </section>
  );
}
