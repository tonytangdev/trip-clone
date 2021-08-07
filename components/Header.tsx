import { useState } from 'react'
import styles from '../styles/Header.module.css'
import BurgerMenuButton from './BurgerMenuButton'
import MenuItem from './MenuItem'

export default function Header() {
    const [isShowingMoreWebsiteMenus, setIsShowingMoreWebsiteMenus] = useState(false)

    const onShowMoreClick = () => setIsShowingMoreWebsiteMenus(value => !value)

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                </div>
            </div>
            <BurgerMenuButton>
                <div>
                    <div className={styles.websiteMenu}>
                        <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/1946/1946436.png" title="Home" href="/" />
                        <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/3189/3189989.png" title="Hotels" href="/hotels" />
                        <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/0/614.png" title="Flights" href="/flights" />
                        <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/565/565410.png" title="Trains" href="/trains" />
                        <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/89/89102.png" title="Car Rentals" href="/car-rentals" />
                        {isShowingMoreWebsiteMenus && (
                            <>
                                <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/3357/3357745.png" title="Airport Transfers" href="/airport-transfers" />
                                <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/5252/5252364.png" title={"Tours & Tickets"} href="/tours-and-tickets" />
                                <MenuItem iconUrl="https://image.flaticon.com/icons/png/512/2280/2280294.png" title="Attractions" href="/attractions" />
                            </>
                        )}
                        <MenuItem iconUrl={isShowingMoreWebsiteMenus ? "https://image.flaticon.com/icons/png/512/2985/2985195.png" : "https://image.flaticon.com/icons/png/512/2985/2985150.png"} title={isShowingMoreWebsiteMenus ? "Show Less" : "Show More"} onClick={onShowMoreClick} />
                    </div>
                </div>
            </BurgerMenuButton>
        </header>
    )
}
