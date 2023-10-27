import styles from '../styles/components/Header.module.css'
import * as Icon from '@phosphor-icons/react';

const Header = () => {
    return(
         <div className={styles.headerContainer}>
            <div className={styles.headerRight}>
                <img className={styles.logo} src="" alt='logo-hamburgueria'/>
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
