import {
  FaRegHeart,
  FaRegHandshake,
  FaRegGem,
  FaRegUser,
} from "react-icons/fa";

import SimpleCard from "../components/simpleCard";

const helpOptionsData = [
  {
    id: 1,
    title: "FAÇA UMA DOAÇÃO",
    desc: "Sua doação garante alimentação, higiene, assistência médica e muito mais.",
    textButton: "DOAR AGORA",
    link: "/doe",
    icon: <FaRegHeart size={32} />,
  },
  {
    id: 2,
    title: "SEJA VOLUNTÁRIO",
    desc: "Doe seu tempo e faça a diferença na qualidade de vida dos idosos.",
    textButton: "QUERO SER VOLUNTÁRIO",
    link: "/voluntariado",
    icon: <FaRegUser size={32} />,
  },
  {
    id: 3,
    title: "DOE ITENS",
    desc: "Aceitamos doações de alimentos, itens de higiene, roupas e materiais de limpeza em bom estado.",
    textButton: "VER ITENS NECESSÁRIOS",
    link: "/doar-itens",
    icon: <FaRegGem size={32} />,
  },
  {
    id: 4,
    title: "EMPRESAS E PARCEIROS",
    desc: "Sua empresa pode apoiar nossa causa de diversas formas.",
    textButton: "SEJA UM PARCEIRO",
    link: "/parcerias",
    icon: <FaRegHandshake size={32} />,
  },
];

export default function HowHelp() {
  return (
    <section className="section-help">
      <div className="container container-howHelp">
        <div className="text-help">
          <h2>Como você pode ajudar</h2>
          <p>Pequenas atitudes geram grandes transformações</p>
        </div>

        <div className="list-howHelp">
          {helpOptionsData.map((help) => (
            <SimpleCard
              key={help.id}
              title={help.title}
              icon={help.icon}
              desc={help.desc}
              textButton={help.textButton}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
