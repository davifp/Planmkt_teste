import Image from "next/image";
import styles from "./index.module.scss";
import { FiArrowDownRight } from "react-icons/fi";

import logo from "../../../public/fullup.png";

export const GroupCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={logo} alt="Fullup logo" />
      </div>
      <p>
        A FullUp é uma agência especializada em branding design e campanhas.
      </p>
      <a href="">
        <span>CONHEÇA</span> <FiArrowDownRight size={20} />
      </a>
    </div>
  );
};
