import styles from './style.module.scss';

function Doing() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <span>What we</span>
            <span>Love doing</span>
        </div>
        <div className={styles.outer__container}>
            <div className={styles.inner__container}>
              <video  className={styles.video} src="/videos/Doing1.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
              <div className={styles.flex__container}>
                <div className={styles.number}>01</div>
                <div className={styles.context}>
                  <div className={styles.title}>Strategy</div>
                  <p className={styles.description}>CRAFTING UNIQUE COFFEE EXPERIENCE, ENHANCING CUSTOMER CONNECTIONS, SHARING COFFEE STORIES, COLLABORATING WITH COFFEEINFLUENCES, SOCIAL MEDIA STRATEGY</p>
                </div>
              </div>
            </div>
            <div className={styles.inner__container}>
              <video  className={styles.video} src="/videos/Doing2.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
              <div className={styles.flex__container}>
                <div className={styles.number}>02</div>
                <div className={styles.context}>
                  <div className={styles.title}>Creation</div>
                  <p className={styles.description}>VISUAL CONCEPTS, ADVERTISING, BRANDING, COFFEE EVENTS, SCENOGRAPHY</p>
                </div>
              </div>
            </div>
            <div className={styles.inner__container}>
              <video  className={styles.video} src="/videos/Doing3.mp4" autoPlay loop muted controls={false} playsInline style={{ pointerEvents: 'none' }} />
              <div className={styles.flex__container}>
                <div className={styles.number}>03</div>
                <div className={styles.context}>
                  <div className={styles.title}>Production</div>
                  <p className={styles.description}>EVENTS, CONTENT, LIVE CONTENT</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Doing