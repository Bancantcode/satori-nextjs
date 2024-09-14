import '../app/globals.css';
import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from '@/components/Header'
import Landing from '@/components/Feature/Landing'
import Parallax from '@/components/Feature/Parallax'
import Leadership from '@/components/Feature/Leadership'
import Doing from '@/components/Feature/Doing';
import Infographic from '@/components/Feature/Infographic';

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
        <Header />
        <Landing />
        <Parallax />
        {/* <Leadership /> */}
        {/* <Doing /> */}
        {/* <Infographic /> */}
    </>
  )
}
