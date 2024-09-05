import '../app/globals.css';
import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from '@/components/Header'
import Landing from '@/components/Menu/Landing';

export default function FeaturePage() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <>
        {/* <Header /> */}
        <Landing />
    </>
  )
}
