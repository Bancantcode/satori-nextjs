import styles from './style.module.scss'
import TopPicked1 from '/public/images/about3.webp'
import TopPicked2 from '/public/images/about1.webp'
import TopPicked3 from '/public/images/menu/9.webp'
import Image from 'next/image'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Doing() {
  // const container = useRef(null);

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top top",
  //         end: "-=500 top",
  //         scrub: true,
  //         markers: true,
  //         onEnter: () => {
  //           gsap.to(container.current, { opacity: 1, duration: 0.5 }); // Ensure opacity is set to 1
  //           gsap.set(container.current, { position: "sticky", bottom: 0, left: 0, width: "100%", zIndex: 1 }); // Set position to sticky and add zIndex
  //         },
  //         onLeaveBack: () => {
  //           gsap.to(container.current, { opacity: 1, duration: 0.5 }); // Ensure opacity is set to 1
  //           gsap.set(container.current, { position: "relative", zIndex: 0 }); // Reset position and zIndex
  //         }
  //       }
  //     });
  //   });

  //   return () => context.revert();
  // }, []);

  return (
    <main className={styles.container}>
        <section className={styles.title}>
            <span>Top picked</span><br />
            <span>offerings</span>
        </section>
        <section className={styles.outer__container}>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>01</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Espresso</div>
                  <p className={styles.description}>ESPRESSO DUET,<br /> AMERICANO,<br /> ESPRESSO SIDE A & B,<br /> ESPRESSO PLUS</p>
                </div>
              </div>
              <Image className={styles.top__pick} src={TopPicked1} alt="Espresso"/>
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>02</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Pour-over</div>
                  <p className={styles.description}>FLAT BOTTOM BREWER,<br /> IMMERSION BREWER,<br /> PARAGON SIDE A & B,<br /> EXCLUSIVE BEANS</p>
                </div>
              </div>
              <Image className={styles.top__pick} src={TopPicked2} alt="Pour-over"/>
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>03</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Milk based</div>
                  <p className={styles.description}>CAPPUCCINO,<br /> CORTADO,<br /> FLAT WHITE,<br /> LATTE</p>
                </div>
              </div>
              <Image className={styles.top__pick} src={TopPicked3} alt="Milk based"/>
            </div>
        </section>
    </main>
  )
}

export default Doing
