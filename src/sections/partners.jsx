import bradescoLogo from "../assets/svg/bradesco.svg";
import interLogo from "../assets/svg/logo-inter.svg";
import naturaLogo from "../assets/svg/natura.svg";
import rdLogo from "../assets/svg/raia-drogasil-saude-logo.svg";
import magaluLogo from "../assets/svg/magalu-logo.svg";

const partners = [
  { name: "Bradesco", src: bradescoLogo },
  { name: "Inter", src: interLogo },
  { name: "Natura", src: naturaLogo },
  { name: "RD Saúde", src: rdLogo },
  { name: "Magalu", src: magaluLogo },
];

export default function Partners() {

  return (
    <section className="section-partners">
      <div className="container container-partners">
        <h2>Nossos Parceiros</h2>
        <div className="list-partners">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.name}
              className="partner-logo"
              style={{filter: 'grayscale(100%)', height: '40px'}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
