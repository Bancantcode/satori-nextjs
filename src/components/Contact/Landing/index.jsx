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
                <p>CEO Flats, Jupiter St. Bel - Air Makati City</p>
                <p>+63 926 626 3723</p>
            </div>
            <div className={styles.socials}>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Tiktok</p>
            </div>
        </div>
    </section>
    
  )
}

export default index