import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const glassRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(glassRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

      gsap.fromTo(
        glassRef.current,
        { scaleX: 0, opacity: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=120",
            toggleActions: "play none none reverse",
            markers: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-bg" />
      <div className="about-overlay" />
      <div ref={glassRef} className="about-glass" />

      <div ref={contentRef} className="about-content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique
        </h2>
      </div>
    </section>
  );
};

export default About;
