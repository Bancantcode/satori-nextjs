'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {

  // const firstText = useRef(null);
  // const secondText = useRef(null);
  // const slider = useRef(null);
  // let xPercent = 0;
  // let direction = -1;

  // useLayoutEffect( () => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(slider.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: 0.25,
  //       start: 0,
  //       end: window.innerHeight,
  //       onUpdate: e => direction = e.direction * -1
  //     },
  //     x: "-500px",
  //   })
  //   requestAnimationFrame(animate);
  // }, [])

  // const animate = () => {
  //   if(xPercent < -100){
  //     xPercent = 0;
  //   }
  //   else if(xPercent > 0){
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, {xPercent: xPercent})
  //   gsap.set(secondText.current, {xPercent: xPercent})
  //   requestAnimationFrame(animate);
  //   xPercent += 0.1 * direction;
  // }

  return (
    // variants={slideUp}
    <motion.main initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div className={styles.title}>Coffee Roasted in Manila</div>
        <p className={styles.description}>A brand of specialty coffee that is dedicated to delivering the finest high-quality flavors and exceptional experiences</p>
        <button className={styles.button}>About us</button>
      </div>
    </motion.main>
  )
}
