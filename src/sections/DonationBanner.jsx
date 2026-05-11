import { FaRegHeart } from "react-icons/fa";
import imgBanner from "../assets/images/banner/banner.webp";

export default function Donation() {
  return (
    <section className="section-donation">
      <div className="container-donation">
        <div className="banner-img">
          <img src={imgBanner} alt="Banner principal da instituição" />
        </div>

        <div className="call-donation">
          <div className="text-donation">
            <h3>
              Sua ajuda transforma o presente e o futuro de muitos idosos.
            </h3>
            <p>Doe agora e faça parte desta corrente do bem.</p>
          </div>
          <div className="donation-controls">
            <h3>Faça sua doação</h3>
            <p>Qualquer valor faz a diferença</p>
            <div className="value-options">
              <button className="btn-value">R$25</button>
              <button className="btn-value">R$50</button>
              <button className="btn-value">R$100</button>
              <button className="btn-value outline">Outro valor</button>
              <button className="btn-donate-now">
                Doar Agora <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
