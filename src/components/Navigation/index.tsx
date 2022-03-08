import React, { FC } from 'react'
import styles from './Navigation.module.css'

type TProps = {
    toggle: boolean;
    setToggle: (order: boolean) => void;
}

const Navigation: FC<TProps> = ({ toggle, setToggle }) => {
    return (
        <nav className={`${toggle ? styles.show_menu : ''} ${styles.main_nav}`}>
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
            <ul
                className={styles.toggle_btn}
                tabIndex={0}
                role='button'
                onClick={() => setToggle(!toggle)}
                onKeyPress={() => setToggle(!toggle)}>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default Navigation