import styles from "./styles.module.scss";
export const Navigation: React.FC = () => {
  function handleAnchor(id: string) {
    const anchor = document.querySelector(id);
    anchor?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <div className={styles.nav}>
      <div className={styles.anchorContainer}>
        <a>/QUEM SOMOS</a>
        <span>01.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a onClick={() => handleAnchor("#intro")}>/O QUE FAZEMOS</a>
        <span>02.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a onClick={() => handleAnchor("#news")}>/PLAN NEWS</a>
        <span>03.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a>/NOSSOS CLIENTES</a>
        <span>04.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a onClick={() => handleAnchor("#contact")}>/CONTACT</a>
        <span>05.</span>
      </div>
    </div>
  );
};
