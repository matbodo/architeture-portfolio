import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const InterSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;

    if (!section || !img) return;

    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/project1.jpg",
    "/images/project2.jpg",
    "/images/project3.jpg",
    "/images/project4.jpg",
    "/images/project1.jpg",
    "/images/project2.jpg",
    "/images/project3.jpg",
    "/images/project4.jpg",
    "/images/project1.jpg",
  ];

  return (
    <section ref={sectionRef} className="intersection">
      <div ref={imgRef} className="intersection-bg" />
      <div className="projects-images-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="projects-images-item"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </section>
  );
};

export default InterSection;
