import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const glassRef = useRef(null);
  const contentRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.from(".about-logo", {
        opacity: 0,
        y: -10,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      tl.fromTo(
        glassRef.current,
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          opacity: 1,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        photoRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        0.6,
      );

      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        0.75,
      );

      tl.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, ease: "power2.out" },
        0.9,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-bg" />
      <div className="about-overlay" />

      <div className="about-logo">
        <img src="/images/Vector.png" alt="Logo" />
      </div>

      <div ref={glassRef} className="about-glass">
        <div className="about-glass-inner">
          <img
            ref={photoRef}
            src="/images/perfil-photo.png"
            alt="Claudia Bruno"
            className="about-photo"
          />

          <p ref={textRef} className="about-glass-text">
            Formada pela Universidade Estadual de Londrina, atua no
            desenvolvimento de projetos de construção civil, arquitetura de
            interiores, iluminação e paisagismo. Meu trabalho envolve desde o
            detalhamento técnico e executivo até a criação de layouts, escolha
            de materiais, cores e acabamentos, sempre equilibrando
            funcionalidade e estética. Busco valorizar o entorno, atender às
            necessidades dos clientes e contribuir para a qualidade de vida por
            meio de soluções arquitetônicas bem planejadas.
          </p>
        </div>
      </div>

      <div ref={contentRef} className="about-content sm:hidden">
        <h2>Arquitetura que valoriza o espaço e quem vive nele.</h2>
      </div>
    </section>
  );
};

export default About;
