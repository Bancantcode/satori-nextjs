import '../app/globals.css';
import { useEffect } from 'react'
import Header from '@/components/Header'
import Landing from '@/components/Menu/Landing';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Lenis from 'lenis';

export default function menu() {
  useEffect(() => {

    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }, [])
  return (
    <>
      <Head>
        <title>Satori Specialty Coffee - Menu</title>
        <meta name="description" content="Explore the curated menu at Satori Specialty Coffee. From ethically sourced single-origin beans to expertly crafted espresso drinks, discover the perfect brew to suit your taste." />
        <meta property="og:title" content="Satori Specialty Coffee - Explore Our Menu" />
      </Head>
      <main>
        {/* Content */}
        <Header />
        <Landing />
        <Footer />
      </main>
    </>
  )
}
