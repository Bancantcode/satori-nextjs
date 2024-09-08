import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeetTheTeam() {
    // const container = useRef(null);
    // const titleRef = useRef(null);
    // const descriptionRef = useRef(null);
    // const buttonRef = useRef(null);

    // useLayoutEffect(() => {
    //     const titleWords = titleRef.current.querySelectorAll("span");

    //     gsap.set(titleWords, { y: 90, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
    //     gsap.set(descriptionRef.current, { y: 30, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });
    //     gsap.set(buttonRef.current, { x: 30, clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", });

    //     const context = gsap.context(() => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: container.current,
    //                 start: "-=600",
    //                 end: "-=250",
    //                 scrub: true,
    //                 markers: true,
    //             },
    //         });

    //         tl.to(titleWords, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.3, duration: 1, ease: "power3.inOut", })
    //           .to(descriptionRef.current, { y: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power3.inOut", }, "-=0.4")
    //           .to(buttonRef.current, { x: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "power3.inOut", }, "-=0.4" )
    //     });

    //     return () => context.revert();
    // }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span>Designed to bring</span><br />
                <span>a diverse experience</span>
            </div>
            <div className={styles.description__container}>
                <p className={styles.description}>MEET OUR TEAM OF DEDICATED COFFEE EXPERTS, BLENDING PASSION AND EXPERTISE TO EVERY CUP</p>
            </div>
            <div className={styles.button__container}>
                <a href="/feature"><button className={styles.feature__button}>Feature</button></a>
            </div>

            
        </div>
    );
}
