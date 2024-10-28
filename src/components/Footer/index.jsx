import React from 'react'
import styles from './style.module.scss'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.flex}>
            <div className={styles.main}>
                <h1>SATORI</h1>
                <div>
                    <p>Get in touch<i className="ri-arrow-right-up-line"></i></p>
                    <a href="mailto:satorispecialtycoffee@gmail.com">satorispecialtycoffee@gmail.com</a>
                </div>
            </div>
            <div className={styles.navigations}>
                <a href="/">HOME<i className="ri-arrow-right-up-line"></i></a><br />
                <a href="/feature">FEATURE<i className="ri-arrow-right-up-line"></i></a><br />
                <a href="/menu">MENU<i className="ri-arrow-right-up-line"></i></a><br />
                <a href="/contact">CONTACT<i className="ri-arrow-right-up-line"></i></a><br />
            </div>
        </div>
        <div className={styles.copyright}>
            <p className={styles.reserve}>&copy; 2024 Satori Specialty Coffee. All Rights Reserved</p>
            <p className={styles.handcraft}>Handcrafted by <a href="https://www.facebook.com/bryyansantiago/">Bryan Santiago</a></p>
            <div className={styles.socials}>
                <p><a target="_blank" href="https://www.instagram.com/satori.mnl/"><i className="ri-instagram-line"></i></a></p>
                <p><a target="_blank" href="https://www.facebook.com/satorispecialtycoffee"><i className="ri-facebook-fill"></i></a></p>
                <p><a target="_blank" href="https://www.tiktok.com/@satori.mnl?is_from_webapp=1&sender_device=pc"><i className="ri-tiktok-fill"></i></a></p>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer