import { FaRegHeart } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <div className="logo"></div>
      <div className="header-actions">
        <nav>
          <ul>
            <li>Início</li>
            <li>Sobre Nós</li>
            <li>Nossos Programas</li>
            <li>Como Ajudar</li>
            <li>Notícias</li>
            <li>Eventos</li>
            <li>Contato</li>
          </ul>
        </nav>
        <button className="btn">Doe Agora <FaRegHeart /></button>
      </div>
    </header>
  );
}
