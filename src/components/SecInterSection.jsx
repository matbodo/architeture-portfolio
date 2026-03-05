import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SecInterSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;

    gsap.fromTo(
      img,
      { yPercent: -12 },
      {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="sec-intersection">
      <div ref={imgRef} className="sec-intersection-bg" />
    </section>
  );
};

export default SecInterSection;
