import { Card } from "../Card";
import styles from "./index.module.scss";

export const News: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>/Plan news</h2>
        <h1>/Cases Games</h1>
        <span>03.</span>
      </div>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
