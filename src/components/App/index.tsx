import React, { FC } from 'react';
import Header from '../Header'
import styles from './App.module.css';

const App: FC = () => {
    return (
        <div className={styles.App}>
            <Header />
            <main>
                <h2>A small navigation test</h2>
                <p>
                    We work hard because we care
                </p>
            </main>
        </div>
    );
}

export default App