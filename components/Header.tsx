import styles from '../styles/Header.module.css'
import BurgerMenuButton from './BurgerMenuButton'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                </div>
            </div>
            <BurgerMenuButton>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </BurgerMenuButton>
        </header>
    )
}
