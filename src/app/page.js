'use client'
import './globals.css'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import Head from 'next/head';
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import PageReveal from '@/components/Home/Preloader';
import Landing from '@/components/Home/Landing';
import About from '@/components/Home/About';
import Feature from '@/components/Home/Feature';
import MeetTheTeam from "@/components/Home/Team";
import FAQs from '@/components/Home/Faqs';
import Newsletter from '@/components/Home/Newsletter'


export default function Home() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  useEffect(() => {

    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }, [])

  return (
    <main className={styles.main}>
      <Head>
        <html lang="en" />
      </Head>
      <Landing />
      <About />
      <Feature />
      <MeetTheTeam />
      <FAQs />
      <Newsletter />
      {/* <AnimatePresence mode='wait'>
        {!isPreloaderComplete ? ( <PageReveal key="preloader" onAnimationComplete={() => setIsPreloaderComplete(true)} />) 
        : (
          <>
            <Landing key="landing" />
            <About />
            <Feature />
            <MeetTheTeam />
            <FAQs />
            <Newsletter />
          </>
        )}
      </AnimatePresence> */}
    </main>
  );
}

