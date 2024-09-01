import '../../../app/globals.css'
import styles from './style.module.scss';

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.title__span}>Within our community</span><br />
        <span className={styles.title__span}>Each coffee</span><br />
        <span className={styles.title__span}>Nurtures the other.</span>
      </div>
      <div className={styles.description}>
        <p className={styles.content}>Leveraging a blend of expertise and a personal passion for high-quality coffee, satori strive to elevate every customer experience and enhance the appreciation of specialty coffee</p>
      </div>
    </div>
    
  )
}

export default Landing