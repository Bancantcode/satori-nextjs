import '../app/globals.css';
import Head from 'next/head'
import Header from '@/components/Header';
import Landing from '@/components/Contact/Landing'
import Form from '@/components/Contact/Form'
import Footer from '@/components/Footer';
import Lenis from 'lenis';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  }, [])
  
  return (
    <main>
        <Head>
            <title>Satori Specialty Coffee - Contact</title>
            <meta name="description" content="Satori Specialty Coffee offers meticulously sourced, ethically grown, and perfectly roasted beans to elevate your coffee experience." />
            <meta property="og:title" content="Satori Specialty Coffee - Premium Roasts Delivered" />
            <meta property="og:description" content="Experience the rich, complex flavors of our specialty coffee. Satori believes in sustainability, quality, and bringing the best beans to your cup." />
        </Head>

        <Header />
        <Landing />
        <Form />
        <Footer />
    </main>
  )
}

export default Contact