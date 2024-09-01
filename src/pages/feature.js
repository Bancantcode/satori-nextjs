import { useEffect } from 'react'
import Header from '@/components/Header'
import Landing from '@/components/Feature/Landing'
import Parallax from '@/components/Feature/Parallax'
import Leadership from '@/components/Feature/Leadership'
import Lenis from 'lenis'

function FeaturePage() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
        <Header />
        <Landing />
        <Parallax />
        <Leadership />
    </>
  )
}

export default FeaturePage