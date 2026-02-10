import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import Projects from './components/Projects'
import About from './components/About'
import Hero from './components/Hero'
import Nav from './components/Nav'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
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
      <About />
      <Projects />
    </>
  )
}

export default App
