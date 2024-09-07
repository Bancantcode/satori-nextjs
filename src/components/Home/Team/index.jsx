import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeetTheTeam() {
    const container = useRef(null);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        gsap.set([title1Ref.current, title2Ref.current, descriptionRef.current, buttonRef.current], { y: 200, opacity: 0, clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)" });
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })
            
            tl.to(title1Ref.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 })
              .to(title2Ref.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 })
              .to(descriptionRef.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 })
              .to(buttonRef.current, { y: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 })
        })

        return () => context.revert();
    }, []);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.content}>
                <span ref={title1Ref}>Designed to bring</span><br />
                <span ref={title2Ref}>a diverse experience</span>
                <p ref={descriptionRef} className={styles.description}>MEET OUR TEAM OF DEDICATED COFFEE EXPERTS, BLENDING PASSION AND EXPERTISE TO EVERY CUP</p>
                <a ref={buttonRef} href="/feature"><button className={styles.feature__button}>Feature</button></a>
            </div>
        </div>
    )
}
