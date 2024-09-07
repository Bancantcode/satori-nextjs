'use client'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import PageReveal from '@/components/Home/Preloader';
import Header from '@/components/Header'
import Landing from '@/components/Home/Landing';
import LandingVideo from '@/components/Home/LandingVideo'
import About from '@/components/Home/About';
import Feature from '@/components/Home/Feature';

export default function Home() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  useEffect(() => {
      const lenis = new Lenis()
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      {/* <AnimatePresence mode='wait'>
        {!isPreloaderComplete ? ( <PageReveal key="preloader" onAnimationComplete={() => setIsPreloaderComplete(true)} />) 
        : (
          <>
            <Header />
            <Landing key="landing" />
            <About />
            <Feature />
          </>
        )}
      </AnimatePresence> */}
      <Header />
      <Landing />
      <LandingVideo />
      <About />
    </main>
  );
}
