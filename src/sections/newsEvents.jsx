import imgMotherDay from "../assets/images/events/Mother'-Day.webp";
import imgPainting from "../assets/images/events/painting.webp";
import imgPhysical from "../assets/images/events/physical-activities(1).webp";
import imgBirthday from "../assets/images/events/senior-people-birthday-party.webp";
import PostCard from "../components/PostCard";

const newsEventsData = [
  {
    id: 1,
    title: "Dia das Mães com muita emoção e homenagens",
    desc: "Um dia especial repleto de amor, carinho e memórias inesquecíveis.",
    image: imgMotherDay,
    date: "12 MAI 2024",
    link: "/noticias/dia-das-maes",
  },
  {
    id: 2,
    title: "Oficina de pintura estimula criatividade dos idosos",
    desc: "Cores, técnicas e expressões que transformam o dia a dia e promovem o bem-estar mental.",
    image: imgPainting,
    date: "25 MAI 2024",
    link: "/noticias/oficina-pintura",
  },
  {
    id: 3,
    title: "Atividades físicas trazem saúde e disposição",
    desc: "Alongamento, dança e exercícios leves para mais qualidade de vida.",
    image: imgPhysical,
    date: "10 JUN 2024",
    link: "/noticias/atividades-fisicas",
  },
  {
    id: 4,
    title: "Aniversariantes do mês comemoram juntos",
    desc: "Celebrar a vida é o que nos move todos os dias em nossa comunidade acolhedora.",
    image: imgBirthday,
    date: "15 JUN 2024",
    link: "/noticias/aniversariantes-abril",
  },
];

export default function NewsEvents() {
  return (
    <section className="section-newsEvents">
      <div className="container news-container">
        <h2>Notícias e Eventos</h2>
        <div className="list-newsEvent">
          {newsEventsData.map((data) => (
            <PostCard
              Key={data.id}
              image={data.image}
              title={data.title}
              desc={data.desc}
              date={data.date}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
