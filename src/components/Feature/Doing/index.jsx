'use client'
import styles from './style.module.scss'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import Infographic from '/public/images/Infographic.png'
import Entrance from '/public/images/satori-entrance.webp'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Doing() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "+=900 bottom",
          scrub: true,
        }
      })
      
      tl.to(container.current, { y: -350 })
    })

    return () => context.revert();
  }, []);

  return (
    <div className={styles.container} ref={container}>
        <div className={styles.title}>
            <span>What we</span><br />
            <span>Love doing.</span>
        </div>
        <div className={styles.outer__container}>
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
        </div>

        <div className={styles.infographic__container}>
          <Image className={styles.infographic__images} src={Infographic} alt="infographic" />
          <Image className={styles.infographic__images} src={Entrance} alt="satori" />
        </div>
    </div>
  )
}

export default Doing