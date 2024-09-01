'use client';
import { useEffect, useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import styles from './style.module.scss';

function Parallax() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start start'], //start of container, end of window and start of target, start of the window
  })

  // useEffect(() => {
  //   scrollYProgress.on("change", e => console.log(e))
  // })

  return (
    <div className={styles.container}>
      <motion.div ref={element} className={styles.parallax} style={{ opacity: scrollYProgress }}>
        <span>A coffee space designed</span>
        <span>to create, connect</span>
        <span>and celebrate</span>
        <span>the love of coffee</span>
        <span>together in every cup.</span>
      </motion.div>
    </div>
  )
}

export default Parallax