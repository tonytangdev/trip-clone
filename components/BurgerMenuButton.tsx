import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

type BurgerMenuButtonProps = {}

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const onHandleStateChange = (state: { isOpen: boolean | ((prevState: boolean) => boolean) }) => {
        setIsOpen(state.isOpen)
    }

    return (
        <Menu onStateChange={onHandleStateChange} noOverlay width={'100%'} customBurgerIcon={isOpen ? (<img src="https://image.flaticon.com/icons/png/512/2976/2976286.png" />) : (<img src="https://image.flaticon.com/icons/png/512/2976/2976215.png" />)} customCrossIcon={false}>{children}</Menu >
    )
}


export default BurgerMenuButton