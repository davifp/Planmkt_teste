import { Header } from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cont1}>
        <Header />
        <main className={styles.main}>
          <div style={{ height: "100vh", width: "100%" }}>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
        </main>
      </div>
    </div>
  );
}
