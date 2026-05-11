import { FaQuoteLeft } from "react-icons/fa";
import TestimonialCard from "../components/TestimonialCard";
import imgMaria from "../assets/images/testimonials/icon-history2.webp";
import imgJoao from "../assets/images/testimonials/icon-history3.webp";
import imgDirce from "../assets/images/testimonials/icon-history4.webp";
import imgAntonio from "../assets/images/testimonials/icon-history.webp";

const testimonialsData = [
  {
    id: 1,
    name: "Maria Aparecida",
    age: "75 anos",
    image: imgMaria,
    text: '"Aqui encontrei amigos, cuidado e alegria. A minha vida mudou depois que cheguei. Sou muito grata por todo caminho."',
  },
  {
    id: 2,
    name: "João Renato",
    age: "82 anos",
    image: imgJoao,
    text: '"O atendimento é excelente e me sinto valorizado todos os dias. A Laços do Tempo é a minha segunda casa."',
  },
  {
    id: 3,
    name: "Dona Dirce",
    age: "79 anos",
    image: imgDirce,
    text: '"As oficinas de pintura me devolveram o prazer de criar. Redescobri talentos que achei que o tempo tinha levado."',
  },
  {
    id: 4,
    name: "Sr. Antônio",
    age: "88 anos",
    image: imgAntonio,
    text: '"Não é apenas sobre cuidados médicos, é sobre o brilho no olho de cada voluntário. Me sinto parte de uma família real."',
  },
];

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="container container-testimonials">
        <h2>Histórias que inspiram</h2>
        <FaQuoteLeft size={40} color="#6B8E23" opacity={0.3} />
        <div className="list-testimonials">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              desc={testimonial.text}
              name={testimonial.name}
              age={testimonial.age}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
