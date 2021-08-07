import styles from '../styles/MenuItem.module.css'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

type MenuItemProps = {
    iconUrl: string,
    title: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
    href?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
    iconUrl,
    title,
    href,
    onClick
}) => {
    if (!!href) {
        return (
            <div className={styles.menuItemContainer}>
                <Link href={href} passHref>
                    <div className={styles.subContainer}>
                        <img src={iconUrl} className={styles.menuIcon} />
                        <a className={styles.title}>
                            {title}
                        </a>
                    </div>
                </Link>
            </div>
        )
    } else if (!!onClick) {
        return (
            <div className={styles.menuItemContainer} onClick={onClick}>
                <div className={styles.subContainer}>
                    <img src={iconUrl} className={styles.menuIcon} />
                    <a className={styles.title}>
                        {title}
                    </a>
                </div>
            </div>
        )
    }

    throw 'onClick or href must be defined'
}

export default MenuItem