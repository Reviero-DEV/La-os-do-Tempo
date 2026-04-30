import { FaRegHeart } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <img src="" alt="" />
      <div className="hero-Text">
        <h2>
          Respeito, amor e dignidade na <span>melhor idade</span>
        </h2>
        <p>
          Acreditamos que envelhecer é uma jornada que merece cuidado, atenção e
          carinho.
        </p>
        <div className="heroActions">
          <a href="">Conheça nossa missão <FaArrowRight /></a>
          <button>Doe Agora <FaRegHeart /></button>
        </div>
      </div>
    </section>
  );
}
