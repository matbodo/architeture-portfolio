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
  })


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
