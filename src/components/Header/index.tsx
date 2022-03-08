import React, { FC } from 'react'
import Navigation from '../Navigation'
import styles from './Header.module.css'

const Header: FC = () => {
    return (
        <header className={styles.app_header}>
            <h1>
                Website name
            </h1>
            <Navigation />
            <ul className={styles.hamburger_toggle}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
    )
}

export default Header