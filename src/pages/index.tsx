import { Header } from "../components/Header";
import { News } from "../components/Intro";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cont1}>
        <Header />
        <main className={styles.main}>
          <News />
          <div>Content 2</div>
          <div>Content 3</div>
        </main>
      </div>
    </div>
  );
}
