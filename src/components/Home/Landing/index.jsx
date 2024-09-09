'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Landing() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    let tl;

    const setYValues = () => {
      const yValue = window.innerWidth <= 767 ? 45 : window.innerWidth <= 1024 ? 60 : 190;
      
      const titleWords = titleRef.current.querySelectorAll("span");
      
      gsap.set(titleWords, { y: yValue, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });
      gsap.set(descriptionRef.current, { y: 90, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });
      gsap.set(buttonRef.current, { y: 90, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });
      gsap.set(videoRef.current, { y: yValue, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });
    };

    const animateContent = () => {
      if (tl) tl.kill();
      const titleWords = titleRef.current.querySelectorAll("span");

      tl = gsap.timeline({ delay: 0.1 });

      tl.to(titleWords, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.1, duration: 1, ease: "power3.inOut", })
        .to(descriptionRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.7, ease: "power3.inOut", },"-=0.4" )
        .to(buttonRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.7, ease: "power3.inOut", }, "-=0.4" )
        .to(videoRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.7, ease: "power3.inOut", }, "-=0.4" );
    };

    //set value for yValue and start animation
    setYValues();
    animateContent();

    window.addEventListener('resize', () => {
      setYValues(); //adjust value every resize
      animateContent(); //run the function animateContent every resize
    });

    //cleanup
    return () => {
      window.removeEventListener('resize', animateContent);
      if (tl) tl.kill(); //kill timeline every unmount
    }
  }, []);

  return (
    <main className={styles.landing}>
      <div className={styles.sliderContainer}>
        <div ref={titleRef} className={styles.title}>
          <span>Coffee</span> <br />
          <span>Roasted</span> <br />
          <span>in Makati</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p ref={descriptionRef} className={styles.description}>A brand of specialty coffee that is dedicated to delivering the finest high-quality flavors and exceptional experiences</p>
        </div>
        <div className={styles.buttonContainer}>
          <button ref={buttonRef} className={styles.button}><a href="/about">About us</a></button>
        </div>
        <video 
          ref={videoRef}
          className={styles.video}
          src="/videos/LandingVideo1.mp4"
          autoPlay
          loop
          muted
          controls={false} //hide control
          playsInline //ensure it works on mobile devices
          style={{ pointerEvents: 'none' }} //disable interaction
        />
      </div>

    </main>
  );
}
