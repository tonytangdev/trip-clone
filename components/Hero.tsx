import styles from '../styles/Hero.module.css'
type Hero = {}

const Hero: React.FC<Hero> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroBackgroundContainer}>
                <div role="img" className={styles.heroBackgroundImg}></div>
            </div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Attractions
                    <span className={styles.dot}></span></h1>
            </div>
        </div>
    )
}

export default Hero
