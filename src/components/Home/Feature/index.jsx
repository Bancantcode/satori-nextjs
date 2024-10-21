'use client';
import Image from 'next/image';
import styles from './style.module.scss';
import Feature1 from '/public/images/feature1.webp';
import Feature2 from '/public/images/feature2.webp';
import Feature3 from '/public/images/feature3.webp';
import Feature4 from '/public/images/feature4.webp';
import Feature5 from '/public/images/feature5.webp';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Feature() {
    const feature__images = [Feature4, Feature2, Feature1, Feature3, Feature5];
    const container = useRef(null);
    const imagesRef = useRef([]);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                }
            });

            tl.to(imagesRef.current[0], { x: -60, y: 40 }, 0)
              .to(imagesRef.current[1], { x: -30, y: 40 }, 0)
              .to(imagesRef.current[2], { y: 50 }, 0)
              .to(imagesRef.current[3], { x: 30, y: 50 }, 0)
              .to(imagesRef.current[4], { x: 25, y: 65 }, 0);
        });

        return () => context.revert();
    }, []);

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.images}>
                {feature__images.map((image, i) => (
                    <div ref={ref => imagesRef.current[i] = ref} key={`image_${i}`} className={styles.image__container}>
                        <Image className={styles.img} src={image} placeholder='blur' alt={`Feature ${i}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
