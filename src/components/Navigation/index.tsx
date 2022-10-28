import styles from "./styles.module.scss";
export const Navigation: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.anchorContainer}>
        <a href="">/QUEM SOMOS</a>
        <span>01.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a href="">/O QUE FAZEMOS</a>
        <span>02.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a href="">/PLAN NEWS</a>
        <span>03.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a href="">/NOSSOS CLIENTES</a>
        <span>04.</span>
      </div>
      <div className={styles.anchorContainer}>
        <a href="">/CONTATO</a>
        <span>05.</span>
      </div>
    </div>
  );
};
