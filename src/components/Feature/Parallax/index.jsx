'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.scss';

export default function Parallax() {
  const sentence1 = 'A coffee space designed';
  const sentence2 = 'to create, connect';
  const sentence3 = 'and celebrate';
  const sentence4 = 'the love of coffee';
  const sentence5 = 'together in every cup.';

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const sentences = [sentence1, sentence2, sentence3, sentence4, sentence5];

  return (
    <section ref={container} className={styles.container}>
      <div className={styles.parallax}>
        {sentences.map((sentence, index) => (
          <motion.div key={index} className={styles.sentence}>
            {sentence.split("").map((char, i) => {
              const start = i / sentence.length;
              const end = start + 1 / sentence.length;
              const color = useTransform(scrollYProgress, [start, end], ["#7C7C7C", "#1D1D1B"]);

              return (
                <motion.span key={i} style={{ color }} className={styles.character}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
