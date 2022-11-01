import { Card } from "../Card";
import styles from "./index.module.scss";

export const News: React.FC = () => {
  const cards = [
    {
      image: "/1image.png",
      name: "SKA",
      title: "Plan cria novo site da SKA",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum vitae voluptas vel, hic iste?",
      anchor: "#",
    },
    {
      image: "/2image.png",
      name: "TINTAS KILLING",
      title: "Plan cria o novo site para a Tintas Killing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum vitae voluptas vel, hic iste?",
      anchor: "#",
    },
    {
      image: "/3image.png",
      name: "CARGO BR",
      title: "Estamos desenvolvendo o novo site da CargoBR",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum vitae voluptas vel, hic iste?",
      anchor: "#",
    },
    {
      image: "/4image.png",
      name: "XALINGO",
      title: "Clubinho Xalingo com novidades",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum vitae voluptas vel, hic iste?",
      anchor: "#",
    },
    {
      image: "/5image.png",
      name: "AROMATIC",
      title: "Novo site da Aromatic no ar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum vitae voluptas vel, hic iste?",
      anchor: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <h2>/Plan news</h2>
          <h1>/Cases Games</h1>
          <span>03.</span>
        </div>
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <Card
              key={card.name}
              image={card.image}
              name={card.name}
              title={card.title}
              text={card.text}
              anchor={card.anchor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
