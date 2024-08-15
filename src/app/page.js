'use client'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import PageReveal from '@/components/Preloader/PageReveal.jsx';
import Landing from '@/components/Landing';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const lenis = new Lenis()
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
      
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 2000)
  }, [])

  // OR

  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();

  //         setTimeout( () => {
  //           setIsLoading(false);
  //           document.body.style.cursor = 'default'
  //           window.scrollTo(0,0);
  //         }, 2000)
  //     }
  //   )()
  // }, [])

  return (
    <main className={styles.main}>
      {/* <PageReveal /> */}
      <AnimatePresence mode='wait'>{isLoading && <PageReveal />}</AnimatePresence>
      <Landing />
      <Landing />
    </main>
  );
}
