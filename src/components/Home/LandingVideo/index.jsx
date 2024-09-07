import styles from './styles.module.scss';

export default function LandingVideo() {
    return (
        <div className={styles.container}>
            <video 
                className={styles.video}
                src="/videos/LandingVideo1.mp4"
                width="640"
                height="360"
                autoPlay
                loop
                muted
                controls={false} //hide control
                playsInline //ensure it works on mobile devices
                style={{ pointerEvents: 'none' }} //disable interaction
            />
        </div>
    )
}