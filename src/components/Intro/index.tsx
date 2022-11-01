import { GiConsoleController } from "react-icons/gi";
import { FiArrowDownRight } from "react-icons/fi";
import styles from "./index.module.scss";
import { IntroCard } from "../IntroCard/index";

export const Intro: React.FC = () => {
  const cards = [
    {
      image: "/image2.png",
      text: "consequuntur saepe, rem aperiam ullam corporis magnam. Qui molestiae consequuntur saepe, rem aperiam ullam",
    },
    {
      image: "/image3.png",
      text: "consequuntur saepe, rem aperiam ullam corporis magnam. Qui molestiae consequuntur saepe, rem aperiam ullam",
    },
    {
      image: "/image1.png",
      text: "consequuntur saepe, rem aperiam ullam corporis magnam. Qui molestiae consequuntur saepe, rem aperiam ullam",
    },
  ];

  return (
    <div className={styles.contentContainer} id="intro">
      <div className={styles.wrapper}>
        <div className={styles.introduction}>
          <div className={styles.titleContainer}>
            <h2>/O que fazemos</h2>
            <h1>/Games</h1>
            <span>03.</span>
          </div>
          <h2>Desenvolvimento de games digitais</h2>
          <p>
            Empresa especialista em Desenvolvimento de games digitais e
            gamificação
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed qui,
            maxime veritatis accusamus hic iure labore asperiores laudantium
            cupiditate ratione natus voluptatibus nostrum facere odio dolor
            minima. Facere qui non, velit hic pariatur animi. Veritatis animi
            corporis magnam. Qui molestiae consequuntur saepe, rem aperiam ullam
            delectus quaerat minus corrupti reiciendis?
          </p>
        </div>
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <IntroCard key={card.image} image={card.image} text={card.text} />
          ))}
          <div className={styles.contactCard}>
            <div className={styles.imgContainer}>
              <GiConsoleController className={styles.icon} size={50} />
            </div>
            <p>
              Experimente inovar com a <strong>PlanXP</strong> para{" "}
              <strong>desenvolver seus jogos digitais!</strong>
            </p>
            <a href="">
              entre em contato agora mesmo
              <FiArrowDownRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
