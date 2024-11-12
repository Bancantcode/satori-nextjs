'use client'
import styles from './style.module.scss'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Doing() {
  const container = useRef(null);

  return (
    <main className={styles.container} ref={container}>
        <section className={styles.title}>
            <span>What we</span><br />
            <span>Love doing.</span>
        </section>
        <section className={styles.outer__container}>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>01</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Strategy</div>
                  <p className={styles.description}>CRAFTING UNIQUE COFFEE,<br /> ENHANCING CUSTOMER CONNECTIONS,<br /> SHARING COFFEE STORIES,<br /> COLLABORATING WITH COFFEE INFLUENCES,<br /> SOCIAL MEDIA STRATEGY</p>
                </div>
              </div>
              <video className={styles.video} src="/videos/Doing2.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>02</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Creation</div>
                  <p className={styles.description}>VISUAL CONCEPTS,<br /> ADVERTISING,<br /> BRANDING,<br /> COFFEE EVENTS,<br /> SCENOGRAPHY</p>
                </div>
              </div>
              <video className={styles.video} src="/videos/Doing1.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>03</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Production</div>
                  <p className={styles.description}>EVENTS,<br /> CONTENT,<br /> LIVE CONTENT</p>
                </div>
              </div>
              <video className={styles.video} src="/videos/Doing3.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
            </div>
        </section>
    </main>
  )
}

export default Doing