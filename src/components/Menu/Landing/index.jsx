import styles from './style.module.scss';
import Image from 'next/image';
import Feature2 from '../../../../public/images/feature2.webp';

export default function Landing() {
    const menu__images = [Feature2, Feature2, Feature2, Feature2, Feature2, Feature2, Feature2, Feature2, Feature2];
    const menu__name = [
                        'Conical Brewer', 
                        'Immersion Brewer', 
                        'Espresso Duet', 
                        'Espresso Side A & B', 
                        'Amai Latte', 
                        'Gishiki Matcha', 
                        '*SATORI* 4 set of 3oz', 
                        'Exclusive Beans', 
                        'Regular Beans'
                    ];
    const menu__description = [
                                'Origami (Hot / Iced)', 
                                'Hario Switch / Aeropress',
                                'Single shot espresso + 3oz', 
                                'Single shot (with complimentary Rosquillos)', 
                                '(Hot / Iced / Blended)', 
                                '(Hot / Iced) + Syrup', 
                                'Tokyo Drip / Cold Brew / Tokyo Drip Tonic', 
                                'Competitive Beans', 
                                'Frozen Beans'
                            ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>What we offer</h1>

            <div className={styles.offers}>
                {
                    menu__images.map((image, index) => (
                        <div className={styles.offer__container} key={`l_${index}`}>
                            <Image src={image} className={styles.image} alt='image' placeholder='blur' priority/>
                            <div className={styles.offer__info}>
                                <h2 className={styles.offer__name}>{menu__name[index]}</h2>
                                <p className={styles.offer__description}>{menu__description[index]}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
