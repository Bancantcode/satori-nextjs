import styles from './style.module.scss'
import TopPicked1 from '/public/images/about3.webp'
import TopPicked2 from '/public/images/about1.webp'
import TopPicked3 from '/public/images/menu/EthiopiaYirgachefeBankoTaratu.webp'
import Image from 'next/image'

function Doing() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <span>Top picked</span><br />
            <span>offerings</span>
        </div>
        <div className={styles.outer__container}>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>01</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Espresso</div>
                  <p className={styles.description}>ESPRESSO DUET,<br /> AMERICANO,<br /> ESPRESSO SIDE A & B,<br /> ESPRESSO PLUS</p>
                </div>
              </div>
              <Image className={styles.top__pick} src={TopPicked1} alt="Espresso"/>
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>02</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Pour-over</div>
                  <p className={styles.description}>FLAT BOTTOM BREWER,<br /> IMMERSION BREWER,<br /> PARAGON SIDE A & B,<br /> EXCLUSIVE BEANS</p>
                </div>
              </div>
              <Image className={styles.top__pick} src={TopPicked2} alt="Pour-over"/>
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>03</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Milk based</div>
                  <p className={styles.description}>CAPPUCCINO,<br /> CORTADO,<br /> FLAT WHITE,<br /> LATTE</p>
                </div>
              </div>
              <Image className={styles.top__pick} src={TopPicked3} alt="Milk based"/>
            </div>
        </div>
    </div>
  )
}

export default Doing