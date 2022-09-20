import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.local}>
          <h2>Venha nos conhecer</h2>
          <p>Praça da Banca do Jair - Indaiatuba | SP</p>
          <p>De quarta a sábado a partir das 19hs.</p>
        </div>
        <div className={styles.socials}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/killburguer"
          >
            <img src="/instagram.png" />
          </a>
          <a target="_blank" rel="noreferrer" href="">
            <img src="/whats.png" />
          </a>
        </div>
        <div className={styles.logo}>
          <img src="/killburguer-logo.jpg" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
