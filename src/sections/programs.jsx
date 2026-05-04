import { FaHeartbeat, FaPalette, FaUserMd, FaUsers } from "react-icons/fa";
import imgActivities from "../assets/images/programs/physical-activities.webp";
import imgLazer from "../assets/images/programs/lazer.webp";
import imgFamiliarity from "../assets/images/programs/familiarity.webp";
import imgCare from "../assets/images/programs/multidisciplinary-care.webp";
import PostCard from "../components/PostCard";

const programs = [
  {
    id: 1,
    image: imgActivities,
    title: "Atividades Físicas",
    icon: <FaHeartbeat />,
    desc: "Exercícios leves e adaptados para melhorar a mobilidade e bem-estar.",
  },
  {
    id: 2,
    image: imgLazer,
    title: "Oficinas e Lazer",
    icon: <FaPalette />,
    desc: "Atividades que estimulam a mente, a criatividade e a socialização.",
  },
  {
    id: 3,
    image: imgCare,
    title: "Atendimento Multidisciplinar",
    icon: <FaUserMd />,
    desc: "Acompanhamento médico, psicológico, nutricional e social.",
  },
  {
    id: 4,
    image: imgFamiliarity,
    title: "Convivência",
    icon: <FaUsers />,
    desc: "Momentos especiais que fortalecem vínculos e criam novas histórias.",
  },
];

export default function Programs() {
  return (
    <section className="section-programs">
      <h2>Nossos Programas</h2>
      <p>
        Desenvolvemos atividades que promovem saúde, alegria e qualidade de
        vida.
      </p>
      <div className="list-programs">
        {programs.map((program) => (
          <PostCard
            key={program.id}
            image={program.image}
            title={program.title}
            icon={program.icon}
            desc={program.desc}
          />
        ))}
      </div>
    </section>
  );
}
