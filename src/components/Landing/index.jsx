'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Landing() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const titleWords = titleRef.current.querySelectorAll('span');

    gsap.set(titleWords, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 200 });
    gsap.set(descriptionRef.current, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 200 });
    gsap.set(buttonRef.current, { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', y: 200 });

    const tl = gsap.timeline({ delay: 0.1 });

    tl.to(titleWords, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, stagger: 0.1, duration: 0.8, ease: "power3.inOut" })
      .to(descriptionRef.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, duration: 1, ease: "power3.inOut" }, "-=0.5")
      .to(buttonRef.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, duration: 1, ease: "power3.inOut" }, "-=0.5");
  }, []);

  return (
    <motion.main initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={titleRef} className={styles.title}>
          <span>Coffee</span> <br />
          <span>Roasted</span> <br />
          <span>in Makati</span>
        </div>
        <p ref={descriptionRef} className={styles.description}>
          A brand of specialty coffee that is dedicated to delivering the finest high-quality flavors and exceptional experiences
        </p>
        <a href=""><button ref={buttonRef} className={styles.button}>About us</button></a>
      </div>
    </motion.main>
  );
}
