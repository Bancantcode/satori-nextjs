import styles from './style.module.scss'

export default function Newsletter() {
  return (
    <div className={styles.container}>
        <div className={styles.newsletter__container}>
            <p className={styles.type}>Newsletter</p>
            <h1 className={styles.title}>Stay in touch</h1>
            <form className={styles.input__container}>
                <input type="email" className={styles.input} placeholder='Enter email address' required/>
                <input type="submit" href="#" className={styles.submit} />
            </form>
        </div>
        <div className={styles.career__container}>
            <p className={styles.type}>Careers</p>
            <h1 className={styles.title}>Want to join us?</h1>
            <a href="#" className={styles.link}>Learn More</a>
        </div>
        <div className={styles.learn__container}>
            <p className={styles.type}>Coffee</p>
            <h1 className={styles.title}>Learn more about coffee</h1>
            <a href="#" className={styles.link}>Learn More</a>
        </div>
    </div>
  )
}
