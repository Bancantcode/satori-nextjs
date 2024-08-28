'use client'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import PageReveal from '@/components/Preloader';
import Landing from '@/components/Landing';
import LandingVideo from '@/components/LandingVideo';
import About from '@/components/About';
import Feature from '@/components/Feature';

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
      <AnimatePresence mode='wait'>
        {!isPreloaderComplete ? ( <PageReveal key="preloader" onAnimationComplete={() => setIsPreloaderComplete(true)} />) 
        : (
          <>
            <Landing key="landing" />
            <About />
            <Feature />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
