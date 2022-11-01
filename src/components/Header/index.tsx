import styles from "./styles.module.scss";
import { Navigation } from "../Navigation";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import logo from "../../../public/logo_plan.png";
import { useState } from "react";

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  function handleMenuClick() {
    setShow(!show);
  }

  function handleAnchor(id: string) {
    const anchor = document.querySelector(id);
    anchor?.scrollIntoView({ behavior: "smooth", block: "center" });
    setShow(false);
  }

  return (
    <header className={styles.headerContainer}>
      <div>
        <Image src={logo} alt="logo image" className={styles.logo} />
      </div>
      <div className={show ? styles.menuSectionOn : styles.menuSection}>
        <div onClick={handleMenuClick} className={styles.menuToggle}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
        <nav>
          <ul>
            <li className={styles.anchorContainer}>
              <a>/QUEM SOMOS</a>
              <span>01.</span>
            </li>
            <li className={styles.anchorContainer}>
              <a onClick={() => handleAnchor("#intro")}>/O QUE FAZEMOS</a>
              <span>02.</span>
            </li>
            <li className={styles.anchorContainer}>
              <a onClick={() => handleAnchor("#news")}>/PLAN NEWS</a>
              <span>03.</span>
            </li>
            <li className={styles.anchorContainer}>
              <a>/NOSSOS CLIENTES</a>
              <span>04.</span>
            </li>
            <li className={styles.anchorContainer}>
              <a onClick={() => handleAnchor("#contact")}>/CONTACT</a>
              <span>05.</span>
            </li>
          </ul>
        </nav>
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
