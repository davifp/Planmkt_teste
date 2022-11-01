import styles from "./index.module.scss";
import { Navigation } from "../Navigation";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import logo from "../../../public/logo_plan.png";

export const Aside: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <Image src={logo} alt="logo image" className={styles.logo} />
      </div>
      <div className={styles.menuSection}>
        <Navigation />
      </div>
      <footer className={styles.footer}>
        <div className={styles.textContainer}>
          <p>Que tal inovar com a gente?</p>
          <span>{`;)`}</span>
        </div>
        <FiArrowDownRight size={20} className={styles.icon} />
      </footer>
    </header>
  );
};
