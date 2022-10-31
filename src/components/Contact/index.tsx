import { Form } from "../Form";
import { GroupCard } from "../GroupCard";
import styles from "./index.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>/Contato</h1>
            <span>05.</span>
          </div>
          <p>
            Gostou de saber mais sobre as inovações tecnológicas e também quer
            oferecer novas experiências aos seus clientes? Então entre em
            contato e marque um encontro real conosco para conversarmos sobre as
            infinitas possibilidades do mundo virtual.
          </p>
          <Form />
        </div>
        <div className={styles.cardWrapper}>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </div>
  );
};
