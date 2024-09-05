'use client'
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

export default function Parallax() {
  const container = useRef(null);
  const parallaxRef = useRef(null);

  // useLayoutEffect(() => {
  //   console.log('Client side')
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       }
  //     });


  //   });

  //   return () => context.revert();
  // }, [])

  return (
    <div ref={container} className={styles.container}>
      <div ref={parallaxRef} className={styles.parallax}>
        <span>A coffee space designed</span>
        <span>to create, connect</span>
        <span>and celebrate</span>
        <span>the love of coffee</span>
        <span>together in every cup.</span>
      </div>
    </div>
  )
}
