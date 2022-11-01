import Image from "next/image";
import styles from "./index.module.scss";
import { FiArrowDownRight } from "react-icons/fi";

interface Card {
  image: string;
  text: string;
  anchor: string;
}

export const GroupCard: React.FC<Card> = ({ anchor, image, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="Fullup logo"
          fill
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <p>{text}</p>
      <a href={anchor}>
        <span>CONHEÇA</span> <FiArrowDownRight size={20} />
      </a>
    </div>
  );
};
