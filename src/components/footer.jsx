import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-container">
        <div className="about-footer">
          <img src={logo} alt="Logo Cuidar Sempre" className="logo" />
          <p>
            Trabalhamos todos os dias para garantir um envelhecimento com
            dignidade, amor e respeito para todos os nossos residentes.
          </p>
          <div className="social-links">
            <a href="/intagram">
              <FaInstagram />
            </a>
            <a href="/facebook">
              <FaFacebookF />
            </a>
            <a href="/youtube">
              <FaYoutube />
            </a>
            <a href="/linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-navigation">
          <div className="nav-column">
            <h4>INSTITUCIONAL</h4>
            <a href="#">Sobre nós</a>
            <a href="#">História</a>
            <a href="#">Transparência</a>
          </div>

          <div className="nav-column">
            <h4>PROGRAMAS</h4>
            <a href="#">Atividades</a>
            <a href="#">Oficinas</a>
            <a href="#">Saúde</a>
          </div>

          <div className="nav-column">
            <h4>COMO AJUDAR</h4>
            <a href="#">Doe agora</a>
            <a href="#">Seja voluntário</a>
            <a href="#">Parcerias</a>
          </div>

          <div className="nav-column">
            <h4>CONTATO</h4>
            <span>
              <FaPhoneAlt />
              (99) 99999-9999
            </span>
            <span>
              <FaRegEnvelope /> contato@lacosdotempo.org.br
            </span>
            <span>
              <FaMapMarkerAlt /> Atibaia, SP
            </span>
          </div>
        </div>
      </div>
      <small>© {year} Laços do Tempo - Todos os direitos reservados.</small>
    </footer>
  );
}
