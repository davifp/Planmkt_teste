import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
  FiArrowDownRight,
} from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { Form } from "../Form";
import { GroupCard } from "../GroupCard";
import styles from "./index.module.scss";

export const Contact: React.FC = () => {
  const cards = [
    {
      image: "/fullup.png",
      text: "A Plan XP faz parte do Grupo Plan Marketing, um grupo de comunicação completo.",
      anchor: "#",
    },
    {
      image: "/logo_plan.png",
      text: "A Plan XP faz parte do Grupo Plan Marketing, um grupo de comunicação completo.",
      anchor: "#",
    },
    {
      image: "/fullup1.png",
      text: "A FullUp é uma agência especializada em branding design e campanhas.",
      anchor: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>/Contato</h1>
            <span>05.</span>
          </div>
          <p>
            Gostou de saber mais sobre as inovações tecnológicas e também quer
            oferecer novas experiências aos seus clientes? Então entre em
            contato e marque um encontro real conosco para conversarmos sobre as
            infinitas possibilidades do mundo virtual.
          </p>
          <Form />
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.social}>
            <h4>Siga-nos</h4>
            <p>
              Fique sempre por dentro de todas as novidades da Plan XP e de
              todas empresas do Grupo Plan Marketing{" "}
            </p>
            <div className={styles.iconContainer}>
              <a
                href="https://www.facebook.com/planmkt"
                target="_blank"
                rel="noreferrer"
              >
                <FiFacebook size={20} color="#212529" />
              </a>
              <a
                href="https://www.instagram.com/planmkt"
                target="_blank"
                rel="noreferrer"
              >
                <FiInstagram size={20} color="#212529" />
              </a>
              <a
                href="https://www.youtube.com/planmkt"
                target="_blank"
                rel="noreferrer"
              >
                <FiYoutube size={20} color="#212529" />
              </a>
              <a
                href="https://www.linkedin.com/company/planmkt"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin size={20} color="#212529" />
              </a>
            </div>
          </div>
          <div className={styles.adressCard}>
            <h4>
              <CiLocationOn size={20} color="#939598" />
              /RS
            </h4>
            <p>
              Rua Onze de Junho, 243 Novo Hamburgo/RS Brasil +55 51 98229.0400
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/R.+Onze+de+Junho,+243+-+Oper%C3%A1rio,+Novo+Hamburgo+-+RS,+93315-130/@-29.6796239,-51.1356049,17z/data=!3m1!4b1!4m5!3m4!1s0x951943a1494f1ae7:0xc94882b9d1df84"
            >
              VER NO GOOGLE MAPS
              <FiArrowDownRight size={20} />
            </a>
          </div>
          <div className={styles.adressCard}>
            <h4>
              <CiLocationOn size={20} color="#939598" />
              /SP
            </h4>
            <p>
              Rua Ibijaú, 355/Sala 1309 São Paulo/SP Brasil +55 11 98871.8556
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Av.+Ibija%C3%BA,+355+-+1309+-+Indian%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+04524-020/@-23.6056085,-46.6661242,17.5z/data=!4m5!3m4!1s0x94ce5a05f01ecd4f:0x5046a2620"
            >
              VER NO GOOGLE MAPS
              <FiArrowDownRight size={20} />
            </a>
          </div>

          {cards.map((card) => (
            <GroupCard
              key={card.image}
              image={card.image}
              text={card.text}
              anchor={card.anchor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
