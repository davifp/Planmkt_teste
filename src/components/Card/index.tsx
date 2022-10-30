import Image from "next/image";
import img from "../../../public/image2.png";
import { FiArrowDownRight } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";
import styles from "./index.module.scss";

export const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={img} alt="Card" />
        <span>
          <GiConsoleController size={20} />
        </span>
      </div>
      <h4>
        <span>SKA</span>
      </h4>
      <h3>Plan cria novo site da SKA</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      </p>
      <a href="">
        <span>SAIBA MAIS</span>
        <FiArrowDownRight size={20} />
      </a>
    </div>
  );
};
