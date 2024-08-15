'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion, stagger } from 'framer-motion';

export default function Home() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const titleWords = titleRef.current.querySelectorAll('span');
    console.log("Title Words:", titleWords);

    gsap.set(titleWords, { y: 200 });
    gsap.set(descriptionRef.current, { y: 200 });
    gsap.set(buttonRef.current, { y: 200 });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(titleWords, { y: 0, stagger: 0.2, duration: 1, ease: "power3.inOut" })
      .to(descriptionRef.current, { y: 0, duration: 0.7, ease: "power3.inOut" }, "-=0.5")
      .to(buttonRef.current, { y: 0, duration: 1, ease: "power3.inOut" }, "-=0.5");
  }, []);

  return (
    // variants={slideUp}
    <motion.main initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={titleRef} className={styles.title}>
          <span>Coffee</span> <br />
          <span>Roasted</span> <br />
          <span>in Manila</span>
        </div>
        <p ref={descriptionRef} className={styles.description}>A brand of specialty coffee that is dedicated to delivering the finest high-quality flavors and exceptional experiences</p>
        <a href=""><button ref={buttonRef} className={styles.button}>About us</button></a>
      </div>
    </motion.main>
  )
}
