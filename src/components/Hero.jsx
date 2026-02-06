import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const heroSplit = new SplitText(".hero-title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".hero-subtitle", { type: "lines" });

    gsap.fromTo(
      bgRef.current,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 8.5,
        ease: "sine.out",
      },
    );

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "power1.out",
    });

    gsap.from(paragraphSplit.lines, {
      xPercent: -80,
      opacity: 0,
      duration: 1.8,
      delay: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <section id="hero" className="hero">
        <div ref={bgRef} className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">
            Claudia Bruno <br />
            Arquitetura
          </h1>
          <h2 className="hero-subtitle">
            Residencial • Interiores • Comercial
          </h2>
        </div>
      </section>
    </>
  );
};
export default Hero;
