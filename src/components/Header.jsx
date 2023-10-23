<<<<<<< HEAD
import styles from '../styles/components/Header.module.css'
import * as Icon from '@phosphor-icons/react';

const Header = () =>{
    return(
         <div className={styles.headerContainer}>
            <div className={styles.headerRight}>
                <img className={styles.logo} src='' alt='logo-hamburgueria' />
                <nav className={styles.headerNav}>
                    <h2>Início</h2>
                    <h2>Cadastro</h2>
                    <h2>Equipe</h2>
                </nav>
            </div>
            
            <div className={styles.headerSocialMedia}>
                <Icon.FacebookLogo size={32} style={{color: '#ffffff'}} alt='facebook-logo' />
                <Icon.InstagramLogo size={32} style={{color:'#ffffff'}} alt='intagram-logo' />
                <Icon.TwitterLogo size={32}  style={{color:'#ffffff'}} alt='twitter-logo' />
                <Icon.LinkedinLogo size={32} style={{color:'#ffffff'}} alt='linkedin-logo' />
            </div>
        </div>
    )
}

export default Header;
=======
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
>>>>>>> 73d7d096a0a031d356f436ccb3be6a3d70b787a1
