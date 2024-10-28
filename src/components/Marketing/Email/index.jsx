import styles from './style.module.scss'
import Image from 'next/image';
import EmailImage from '/public/images/emailmarketing.webp';

const EmailMarketing = () => {
    return (
        <section className={styles.container}>
            <h1>EMAIL MARKETING</h1>
            <div>
                <Image className={styles.image} src={EmailImage} alt={`Email Marketing image`} />
            </div>
        </section>
    )
}

export default EmailMarketing