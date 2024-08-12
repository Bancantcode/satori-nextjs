'use client'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import PageReveal from '@/components/Preloader/PageReveal.jsx';
// import Header from "@/components/Header1/Header";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ( 
      async () => {
        const lenis = new Lenis()

        await function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    )
   
  }, [])

  return (
    <main className={styles.main}>
      {/* <AnimatePresence mode='wait'>{isLoading && <PageReveal />}</AnimatePresence> */}
      {/* <Header /> */}
    </main>
  );
}
