'use client'
import Image from 'next/image';
import styles from './style.module.scss'
import Feature1 from '../../../public/images/feature1.png';
import Feature2 from '../../../public/images/feature2.png';
import Feature3 from '../../../public/images/feature3.png';
import Feature4 from '../../../public/images/feature4.png';
import Feature5 from '../../../public/images/feature5.png';

export default function Feature() {
    const feature__images = [Feature1, Feature2, Feature3, Feature4, Feature5];

    return (
        <div className={styles.container}>
            
            <div className={styles.images}>
                {
                    feature__images.map((image, i) => {
                        return <div key={`l_${i}`} className={styles.image__container}>
                            <Image className={styles.img} src={image} placeholder='blur' alt="image" />
                        </div>
                    })
                }
            </div>
        </div>
    );
}