'use client'
import Image from 'next/image';
import styles from './style.module.scss'
import About1 from '../../../public/images/about1.png';
import About2 from '../../../public/images/about2.png';
import About3 from '../../../public/images/about3.png';

export default function About() {
    const about__images = [About1, About2, About3];

    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <p className={styles.category}>• Menu</p>
                <h1 className={styles.title}>What We Offer</h1>
                <a href=""><button className={styles.menu__button}>View Menu</button></a>
            </div>
            <div className={styles.images}>
                {
                    about__images.map((image, i) => {
                        return <div key={`l_${i}`} className={styles.image__container}>
                            <Image className={styles.img} src={image} placeholder='blur' alt="image" />
                        </div>
                    })
                }
            </div>
        </div>
    );
}