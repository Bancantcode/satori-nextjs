'use client'

// import Image from "next/image";

import styles from "./page.module.scss";
import { useEffect } from "react";
import Lenis from 'lenis';
import PageReveal from '../components/Header/PageReveal.jsx';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      <PageReveal />
    </main>
  );
}
