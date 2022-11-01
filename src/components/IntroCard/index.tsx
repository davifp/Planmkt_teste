import Image from "next/image";
import styles from "./index.module.scss";

interface Card {
  image: string;
  text: string;
}

export const IntroCard: React.FC<Card> = ({ image, text }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill
            src={image}
            sizes="(max-width: 768px) 100vw"
            alt="Card"
          />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};
