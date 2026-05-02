import { FaHandsHelping, FaUserNurse, FaHeart, FaAward } from "react-icons/fa";
import SimpleCard from "../components/simpleCard";

const featuresTab = [
  {
    id: 1,
    titulo: "Acolhimento",
    descricao:
      "Recebimento dos idosos com carinho e respeito, promovendo um ambiente seguro.",
    icone: <FaHandsHelping size={40} color="#6B8E23" />,
  },
  {
    id: 2,
    titulo: "Cuidado",
    descricao:
      "Atendimento humanizado focado em saúde e atividades que promovem o bem-estar.",
    icone: <FaUserNurse size={40} color="#6B8E23" />,
  },
  {
    id: 3,
    titulo: "Inclusão",
    descricao:
      "Apoio afetivo e emocional, incentivando a socialização e o resgate de histórias de vida.",
    icone: <FaHeart size={40} color="#6B8E23" />,
  },
  {
    id: 4,
    titulo: "Dignidade",
    descricao:
      "Trabalho para garantir o cumprimento dos direitos e a valorização da melhor idade.",
    icone: <FaAward size={40} color="#6B8E23" />,
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        {featuresTab.map((feature) => (
          <SimpleCard
            key={feature.id}
            icon={feature.icone}
            title={feature.titulo}
            desc={feature.descricao}
          />
        ))}
      </div>
    </section>
  );
}
