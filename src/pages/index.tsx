import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { News } from "../components/News";
import styles from "../styles/Home.module.scss";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import { Aside } from "../components/Aside";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 9999 });

  return (
    <div className={styles.container}>
      <Aside />
      <main className={styles.main} ref={scrollRef}>
        <Header />
        <Intro />
        <News />
        <Contact />
      </main>
    </div>
  );
}
