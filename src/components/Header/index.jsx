'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Rounded from '../../common/RoundedButton';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    // const pathname = usePathname();
    const button = useRef(null);

    // useEffect( () => {
    //   if(isActive) setIsActive(false)
    // }, [pathname])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.name}>Logo Here</p>
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

