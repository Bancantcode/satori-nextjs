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
    const titleWords = titleRef.current.querySelectorAll("span");

    const setYValues = () => {
      const yValue = window.innerWidth <= 767 ? 45 : window.innerWidth <= 1024 ? 60 : 200;

      gsap.set(titleWords, { y: yValue, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 1 });
      gsap.set(descriptionRef.current, { y: yValue, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 1 });
      gsap.set(buttonRef.current, { y: yValue, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 1 });
    };

    setYValues();
    window.addEventListener('resize', setYValues);

    const tl = gsap.timeline({ delay: 0.1 });

    tl.to(titleWords, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.1, duration: 1, ease: "power3.inOut", })
      .to(descriptionRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power3.inOut", }, "-=0.5")
      .to(buttonRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power3.inOut", }, "-=0.5");
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
