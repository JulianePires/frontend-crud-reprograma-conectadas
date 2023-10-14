import styles from "../styles/components/Header.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const redesSociais = [
  {
    nome: "facebook",
    link: "",
    icone: FaFacebookF,
  },
  {
    nome: "instagram",
    link: "",
    icone: FaInstagram,
  },
  {
    nome: "twitter",
    link: "",
    icone: FaTwitter,
  },
  {
    nome: "linkedin",
    link: "",
    icone: FaLinkedin,
  },
];

const Header = () => {
  return (
    <header className={styles.container}>
      <img className={styles["logo-header"]} alt="Logo escrito ando lendo" />

      <span className={styles["lista-icones"]}>
        {redesSociais.map((rede, index) => (
          <a
            aria-label={`Link para ${rede.nome}`}
            key={index}
            href={rede.link}
            target="_blank"
            rel="noreferrer"
          >
            <rede.icone />
          </a>
        ))}
      </span>
    </header>
  );
};

export default Header;
