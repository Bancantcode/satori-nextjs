import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Infograph from '/public/images/Infographic.webp'
import Satori from '/public/images/satori.webp'

export default function Infographic() {
  return (
    <div className={styles.container}>
        <Image className={styles.infograph} src={Infograph} alt="infographic" />
        <Image className={styles.satori} src={Satori} alt="Satori" />
    </div>
  )
}
