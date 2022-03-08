import React, { FC } from 'react'
import styles from './Navigation.module.css'

const Navigation: FC = () => {
    return (
        <nav className={styles.main_nav}>
            <ul className={styles.link_list}>
                <li>
                    <a href="#">
                        Link 1
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 2
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 3
                    </a>
                </li>
                <li>
                    <a href="#">
                        Link 4
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation