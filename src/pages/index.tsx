import { Header } from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cont1}>
        <Header />
        <div className={styles.main}>
          <div>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
        </div>
      </div>
    </div>
  );
}
