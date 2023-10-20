import textos from "../constants/textos";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>{textos.footer.autoria}</p>
    </footer>
  );
};

export default Footer;
