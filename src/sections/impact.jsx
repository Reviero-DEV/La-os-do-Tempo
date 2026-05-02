import {
  FaCalendarCheck,
  FaUserFriends,
  FaHome,
  FaHandsHelping,
} from "react-icons/fa";
import SimpleCard from "../components/simpleCard";

const ourImpact = [
  {
    id: 1,
    valor: "+5.000",
    label: "atendimentos realizados por mês",
    icone: <FaCalendarCheck size={32} color="#FFFFFF" />,
  },
  {
    id: 2,
    valor: "+200",
    label: "famílias assistidas",
    icone: <FaUserFriends size={32} color="#FFFFFF" />,
  },
  {
    id: 3,
    valor: "+15",
    label: "anos de história",
    icone: <FaHome size={32} color="#FFFFFF" />,
  },
  {
    id: 4,
    valor: "+50",
    label: "parceiros e apoiadores",
    icone: <FaHandsHelping size={32} color="#FFFFFF" />,
  },
];

export default function Impact() {
  return (
    <section className="section-impact">
      <div className="container container-impact">
        <div className="impact-text">
          <h2>Nosso impacto</h2>
          <p>Números que mostram o quanto você transforma vidas.</p>
        </div>
        <div className="impact-features">
          {ourImpact.map((feature) => (
            <SimpleCard
              Key={feature.id}
              title={feature.valor}
              desc={feature.label}
              icon={feature.icone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
