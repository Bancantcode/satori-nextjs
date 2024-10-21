import styles from './style.module.scss';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Landing() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useLayoutEffect(() => {
    let tl;

    const animateContent = () => {
      if (tl) tl.kill();

      const titleWords = titleRef.current.querySelectorAll("span");
      const yValue = window.innerWidth <= 767 ? 45 : window.innerWidth <= 1024 ? 60 : 190;

      gsap.set(titleWords, { 
        y: yValue, 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", 
        opacity: 1 
      });
      gsap.set(descriptionRef.current, { 
        y: 90, 
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", 
        opacity: 1 
      });

      tl = gsap.timeline({ delay: 0.2 });

      tl.to(titleWords, { 
        y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
        stagger: 0.1, 
        duration: 0.9, 
        ease: "power3.inOut", 
      })
      .to(descriptionRef.current, { 
        y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
        duration: 0.8, 
        ease: "power3.inOut",
       }, "-=0.4");
    };

    animateContent();

    // window.addEventListener('resize', animateContent); //re-run animation every window resize

    return () => {
      window.removeEventListener('resize', animateContent);
      if (tl) tl.kill();
    };
    
  }, []);

  return (
    <section className={styles.container}>
      <div ref={titleRef} className={styles.title}>
        <span className={styles.title__span}>Within our community</span><br />
        <span className={styles.title__span}>Each coffee</span><br />
        <span className={styles.title__span}>Nurtures the other.</span>
      </div>
      <div className={styles.description}>
        <p ref={descriptionRef} className={styles.content}>
          Leveraging a blend of expertise and a personal passion for high-quality coffee, Satori strives to elevate every customer experience and enhance the appreciation of specialty coffee.
        </p>
      </div>
    </section>
  );
}

export default Landing;
