import '../app/globals.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Head from 'next/head';
import Header from '@/components/Header';
import Landing from '@/components/Feature/Landing';
import Parallax from '@/components/Feature/Parallax';
import Leadership from '@/components/Feature/Leadership';
import TopPicked from '@/components/Feature/TopPicked';
import Doing from '@/components/Feature/Doing';

export default function FeaturePage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Search Engine Optimization */}
      <Head>
        <title>Satori Specialty Coffee - Feature</title>
        <meta name="description" content="Satori Specialty Coffee offers meticulously sourced, ethically grown, and perfectly roasted beans to elevate your coffee experience." />
        <meta property="og:title" content="Satori Specialty Coffee - Premium Roasts Delivered" />
        <meta property="og:description" content="Experience the rich, complex flavors of our specialty coffee. Satori believes in sustainability, quality, and bringing the best beans to your cup." />
      </Head>

      {/* Content */}
      <Header />
      <Landing />
      <Parallax />
      <Leadership />
      <TopPicked />
      <Doing />
    </>
  );
}
