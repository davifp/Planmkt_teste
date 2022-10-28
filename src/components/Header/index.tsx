import styles from "./styles.module.scss";
import { Navigation } from "../Navigation";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import logo from "../../../public/logo_plan.png";

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <Image src={logo} alt="logo image" className={styles.logo} />
      </div>
      <Navigation />
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
