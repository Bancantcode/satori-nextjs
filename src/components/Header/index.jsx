'use client';
import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Rounded from '../../common/RoundedButton';
import Image from 'next/image';
import Logo from '/public/images/satori_logo_black.jpg'

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const button = useRef(null);

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.brand__name} rel="preload"><a href="/"><Image className={styles.brand__logo} alt="S" src={Logo}/>atori</a></p>
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

