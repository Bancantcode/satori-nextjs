import styles from './style.module.scss';

function Doing() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <span>What we</span><br />
            <span>Love doing</span>
        </div>
        <div className={styles.outer__container}>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>01</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Strategy</div>
                  <p className={styles.description}>CRAFTING UNIQUE COFFEE,<br /> ENHANCING CUSTOMER CONNECTIONS,<br /> SHARING COFFEE STORIES,<br /> COLLABORATING WITH COFFEEINFLUENCES,<br /> SOCIAL MEDIA STRATEGY</p>
                </div>
              </div>
              <video className={styles.video} src="/videos/Doing2.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>02</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Creation</div>
                  <p className={styles.description}>VISUAL CONCEPTS,<br /> ADVERTISING,<br /> BRANDING,<br /> COFFEE EVENTS,<br /> SCENOGRAPHY</p>
                </div>
              </div>
              <video className={styles.video} src="/videos/Doing1.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
            </div>
            <div className={styles.inner__container}>
              <div className={styles.flex__container}>
                <div className={styles.number}>03</div>
                <div className={styles.context}>
                  <div className={styles.product__title}>Production</div>
                  <p className={styles.description}>EVENTS,<br /> CONTENT,<br /> LIVE CONTENT</p>
                </div>
              </div>
              <video className={styles.video} src="/videos/Doing3.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
            </div>
        </div>
    </div>
  )
}

export default Doing