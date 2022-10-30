import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { News } from "../components/News";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cont1}>
        <Header />
        <main className={styles.main}>
          {/* <Intro /> */}
          {/* <News /> */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
