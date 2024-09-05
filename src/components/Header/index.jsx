'use client';
import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Rounded from '../../common/RoundedButton';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const button = useRef(null);

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.name}>Satori</p>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
        </>
    )
}

