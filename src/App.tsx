import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import SecInterSection from './components/SecInterSection'
import InterSection from './components/InterSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Hero from './components/Hero'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const imagesPreLoad = [
      "/images/bg-image-1.jpg",
      "/images/bg-image-2.png",
      "/images/sala-2.jpg",
      "/images/banheira-1.jpg",
      "/images/cozinha-2.jpg",
      "/images/cozinha-1.jpg",
      "/images/banheiro-1.jpg",
      "/images/escada-3.jpg",
      "/images/escada-1.jpg",
      "/images/piscina-1.jpg",
      "/images/sala-1.jpg",
    ];

    const preLoadImages = imagesPreLoad.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      preLoadImages.length = 0;
    }
  }, []);


  return (
    <>
      <Nav />
      <Hero />
      <InterSection />
      <About />
      <SecInterSection />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default App
