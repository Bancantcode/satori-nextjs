import '../app/globals.css'
import Header from '@/components/Header'
import Customer from '@/components/Customer/Landing'
import Footer from '@/components/Footer'
import Lenis from 'lenis';
import { useEffect } from 'react';

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
        <Header />
        <Customer />
        <Footer />
    </main>
  )
}

export default CustomerDetails