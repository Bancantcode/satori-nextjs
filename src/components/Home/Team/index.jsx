import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeetTheTeam() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        const titleWords = titleRef.current.querySelectorAll("span");

        gsap.set(titleWords, { y: 150, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
        gsap.set(descriptionRef.current, { y: 30, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });
        gsap.set(buttonRef.current, { y: 80, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });

        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "-=300",
                    scrub: true,
                },
            });

            tl.to(titleWords, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.1, duration: 1, ease: "power3.inOut", })
              .to(descriptionRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.7, ease: "power3.inOut", },"-=0.4" )
              .to(buttonRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.7, ease: "power3.inOut", }, "-=0.4" )
        });

        return () => context.revert();
    }, []);

    return (
        <div ref={container} className={styles.container}>
            <div ref={titleRef} className={styles.content}>
                <span>Designed to bring</span><br />
                <span>a diverse experience</span>
            </div>
            <div className={styles.description__container}>
                <p ref={descriptionRef} className={styles.description}>MEET OUR TEAM OF DEDICATED COFFEE EXPERTS, BLENDING PASSION AND EXPERTISE TO EVERY CUP</p>
            </div>
            <div className={styles.button__container}>
                <a ref={buttonRef} href="/feature"><button className={styles.feature__button}>Feature</button></a>
            </div>
        </div>
    );
}
