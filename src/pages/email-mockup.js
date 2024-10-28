import '../app/globals.css'
import Header from '@/components/Header'
import EmailMarketing from '@/components/Marketing/Email';
import Footer from '@/components/Footer';
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function EmailMockup() {
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
            <EmailMarketing />
            <Footer />
        </main>
    );
}