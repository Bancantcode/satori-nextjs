import '../app/globals.css'
import Header from '@/components/Header'
import Customer from '@/components/Customer/Landing'
import Footer from '@/components/Footer'
import Lenis from 'lenis';
import { useEffect } from 'react';
import Head from 'next/head';

const CustomerDetails = () => {
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
            <title>Satori Specialty Coffee - Customer Details</title>
            <meta name="description" content="Satori Specialty Coffee offers meticulously sourced, ethically grown, and perfectly roasted beans to elevate your coffee experience." />
            <meta property="og:title" content="Satori Specialty Coffee - Premium Roasts Delivered" />
            <meta property="og:description" content="Experience the rich, complex flavors of our specialty coffee. Satori believes in sustainability, quality, and bringing the best beans to your cup." />
        </Head>

        {/* Content */}
        <Header />
        <Customer />
        <Footer />
    </main>
  )
}

export default CustomerDetails