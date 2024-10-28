import Instagram from '/public/images/ig.webp';
import Facebook from '/public/images/fb.webp';
import Tiktok from '/public/images/tiktok.webp'
import styles from './style.module.scss'
import Image from 'next/image';

const SocialMediaMarketing = () => {
    const images = [ Instagram, Facebook, Tiktok ]
    return (
        <section className={styles.container}>
            <h1>SOCIAL MEDIA MARKETING</h1>
            <div>
                {images.map((image, index) => (
                    <Image className={styles.image} key={index} src={image} alt={`Image ${index}`} />
                ))}
            </div>
        </section>
    )
}

export default SocialMediaMarketing