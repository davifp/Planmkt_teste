import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";
import styles from "./index.module.scss";

interface Card {
  image: string;
  name: string;
  title: string;
  text: string;
  anchor: string;
}

export const Card: React.FC<Card> = ({ anchor, image, name, text, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw"
          alt="Card"
        />
        <span>
          <GiConsoleController size={20} />
        </span>
      </div>
      <h4>
        <span>{name}</span>
      </h4>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={anchor}>
        <span>SAIBA MAIS</span>
        <FiArrowDownRight size={20} />
      </a>
    </div>
  );
};
