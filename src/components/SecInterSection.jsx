import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBuilding2 } from "react-icons/lu";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export const SecInterSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  const steps = [
    {
      icon: IoChatbubblesOutline,
      title: "1. Briefing",
      description:
        "Conversa inicial para entender suas necessidades e visão do projeto",
    },
    {
      icon: HiOutlineLightBulb,
      title: "2. Conceito",
      description:
        "Desenvolvimento de ideias e propostas conceituais alinhadas ao seu estilo",
    },
    {
      icon: LuBuilding2,
      title: "3. Projeto",
      description:
        "Detalhamento técnico e desenvolvimento completo do projeto arquitetônico",
    },
    {
      icon: IoCheckmarkDoneOutline,
      title: "4. Execução",
      description:
        "Acompanhamento da obra e garantia de qualidade na entrega final",
    },
  ];

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

      // Animate content
      gsap.fromTo(
        ".process-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".process-step",
        { yPercent: 80, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
          },
        },
      );

      gsap.fromTo(
        ".process-line",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="sec-intersection">
      <div ref={imgRef} className="sec-intersection-bg" />

      <div className="sec-intersection-content" ref={contentRef}>
        <h2 className="process-title">Processo</h2>

        <div className="process-grid">
          <div className="process-line"></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="process-step">
                <div className="process-icon">
                  <Icon />
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecInterSection;
