import styles from './style.module.scss';

function Parallax() {

  return (
    <div className={styles.container}>
      <div className={styles.parallax}>
        <span>A coffee space designed</span>
        <span>to create, connect</span>
        <span>and celebrate</span>
        <span>the love of coffee</span>
        <span>together in every cup.</span>
      </div>
    </div>
  )
}

export default Parallax