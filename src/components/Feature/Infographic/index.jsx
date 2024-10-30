import styles from './style.module.scss'
import Image from 'next/image'
import Infograph from '/public/images/Infographic.png'
import Satori from '/public/images/satori-entrance.webp'

export default function Infographic() {
  return (
    <section className={styles.container}>
        <Image className={styles.infograph} src={Infograph} alt="infographic"/>
        <Image className={styles.satori} src={Satori} alt="Satori" />
    </section>
  )
}
