'use client'
import Image from 'next/image';
import styles from './style.module.scss'
import About1 from '../../../../public/images/about1.webp';
import About2 from '../../../../public/images/about2.webp';
import About3 from '../../../../public/images/about3.webp';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const about__images = [About1, About2, About3];
    const container = useRef(null);
    const categoryRef = useRef(null);
    const titleRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef([]);

    useLayoutEffect(() => {
        gsap.set([categoryRef.current, titleRef.current, buttonRef.current], { y: 200, opacity: 0, clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)" });
        gsap.set(imageRef.current, { y: 100, clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)" });

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "-=300",
                    scrub: true,
                    // markers: true,
                }
            });

            tl.to(categoryRef.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 })
              .to(titleRef.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 },'-=0.3')
              .to(buttonRef.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 },'-=0.3')
              .to(imageRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5, stagger: 0.2 },'-=0.8');
        });

        gsap.to(container.current, {
            y: window.innerWidth >= 1024 ? '-15%' : window.innerWidth >= 768 ? '-20%' : '-25%',
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
            }
        });

        return () => context.revert();
    }, []);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.texts}>
                <p ref={categoryRef} className={styles.category}>• Menu</p>
                <h1 ref={titleRef} className={styles.title}>What We Offer</h1>
                <a href=""><button ref={buttonRef} className={styles.menu__button}>View Menu</button></a>
            </div>
            <div className={styles.images}>
                {
                    about__images.map((image, i) => (
                        <div key={`l_${i}`} className={styles.image__container}>
                            <Image ref={element => imageRef.current[i] = element} className={styles.img} src={image} placeholder='blur' alt="image" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
