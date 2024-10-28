import React from 'react'
import styles from './style.module.scss'

const index = () => {
  return (
    <section className={styles.container}>
        <h1>Reach Us.</h1>
        <div className={styles.grid}>
            <div className={styles.description}>
                <p>We believe that the youth harness a vibrant energy capable of shaping a brighter tomorrow. Our mission is to channel our resources—our investments, our voice, and our creativity—into amplifying that energy through the exceptional experience of specialty coffee.</p>
            </div>
            <div className={styles.contact}>
                <a href="mailto:satorispecialtycoffee@gmail.com">CEO Flats, Jupiter St. Bel - Air Makati City</a><br />
                <a href="tel:+639266263723">+63 926 626 3723</a>
            </div>
            <div className={styles.socials}>
                <a target="_blank" href="https://www.instagram.com/satori.mnl/">Instagram</a>
                <a target="_blank" href="https://www.facebook.com/satorispecialtycoffee">Facebook</a>
                <a target="_blank" href="https://www.tiktok.com/@satori.mnl?is_from_webapp=1&sender_device=pc">Tiktok</a>
            </div>
        </div>
    </section>
    
  )
}

export default index