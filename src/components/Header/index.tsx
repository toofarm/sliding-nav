import React, { FC, useState } from 'react'
import Navigation from '../Navigation'
import styles from './Header.module.css'

const Header: FC = () => {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

    return (
        <header className={styles.app_header}>
            <h1>
                Website name
            </h1>
            <Navigation
                toggle={showMobileNav}
                setToggle={setShowMobileNav} />
            <ul className={styles.hamburger_toggle}
                tabIndex={0}
                role='button'
                onClick={() => setShowMobileNav(!showMobileNav)}
                onKeyPress={() => setShowMobileNav(!showMobileNav)}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
    )
}

export default Header