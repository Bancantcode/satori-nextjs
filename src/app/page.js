'use client'
import styles from "./page.module.scss";
import Lenis from 'lenis';
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import PageReveal from '@/components/Preloader/PageReveal.jsx';
import Landing from '@/components/Landing';

export default function Home() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

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

//   return (
//     <main className={styles.main}>
//       {!isPreloaderComplete ? (
//         <PageReveal onAnimationComplete={() => setIsPreloaderComplete(true)} />
//       ) : (
//         <Landing />
//       )}
//       {/* <AnimatePresence mode='wait'>{isLoading && <PageReveal />}</AnimatePresence> */}
//       <Landing />
//       {/* <Landing /> */}
//     </main>
//   );
// }

return (
  <main className={styles.main}>
    {/* <AnimatePresence mode='wait'>
      {!isPreloaderComplete ? (
        <PageReveal key="preloader" onAnimationComplete={() => setIsPreloaderComplete(true)} />
      ) : (
        <Landing key="landing" />
      )}
    </AnimatePresence> */}
    <Landing />
    </main>
  );
}
