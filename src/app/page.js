'use client'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import PageReveal from '@/components/Home/Preloader';
import Header from '@/components/Header';
import Landing from '@/components/Home/Landing';
import About from '@/components/Home/About';
import Feature from '@/components/Home/Feature';
import MeetTheTeam from "@/components/Home/Team";
import FAQs from '@/components/Home/Faqs';
import Newsletter from '@/components/Home/Newsletter'

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
            <Header />
            <Landing key="landing" />
            <About />
            <Feature />
            <MeetTheTeam />
            <FAQs />
            <Newsletter />
          </>
        )}
      </AnimatePresence>
      {/* <Header /> */}
      {/* <Landing />
      <About />
      <Feature />
      <MeetTheTeam />
      <FAQs />
      <Newsletter /> */}
    </main>
  );
}
