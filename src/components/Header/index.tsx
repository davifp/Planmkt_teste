import styles from "./styles.module.scss";
import { Navigation } from "../Navigation";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <Navigation />
    </div>
  );
};
