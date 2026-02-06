import { useState, useRef, useEffect, use } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const toggleRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const hasAnimated = useRef(false);
  const toggleTL = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(logoRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      const navButtons = navRef.current?.querySelectorAll(
        ".nav-buttons.desktop button",
      );

      if (toggleRef.current) {
        tl.fromTo(
          toggleRef.current,
          { x: 6, opacity: 0 },
          {
            x: 0,
            opacity: 0.8,
            duration: 1,
            ease: "power1.out",
          },
        );
      }

      if (navButtons && navButtons.length > 0) {
        tl.fromTo(
          navButtons,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 0.7,
            duration: 3,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3",
        );
      }
    }, navRef);
  }, []);

  useEffect(() => {
    toggleTL.current = gsap.timeline({ paused: true });

    toggleTL.current
      .to(toggleRef.current.children[0], { rotation: 45, y: 8 })
      .to(toggleRef.current.children[1], { opacity: 0 }, "<")
      .to(toggleRef.current.children[2], { rotation: -45, y: -8 }, "<");

    gsap.set(mobileMenuRef.current, { x: "100%" });
  }, []);

  useEffect(() => {
    if (!toggleTL.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      toggleTL.current.play();

      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 1,
        ease: "power1.out",
      });

      if (mobileLinksRef.current.length) {
        gsap.fromTo(
          mobileLinksRef.current,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
          },
        );
      }
    } else {
      document.body.style.overflow = "auto";
      toggleTL.current.reverse();

      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 1,
        ease: "power1.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="nav-container">
          <div className="nav-logo" ref={logoRef}>
            <img src="/images/Vector.png" alt="logo" className="logo-img" />

            <div className="logo-text">
              Claudia Bruno
              <br />
              Arquitetura
            </div>
          </div>

          <div className="nav-buttons desktop">
            <button>Home</button>
            <button>Sobre</button>
            <button>Projetos</button>
            <button>Contato</button>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            className="nav-toggle md:hidden"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            ref={toggleRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div ref={mobileMenuRef} className="nav-mobile">
          <nav className="mobile-links">
            {["Home", "Sobre", "Projetos", "Contato"].map((item, i) => (
              <button
                key={item}
                ref={(el) => (mobileLinksRef.current[i] = el)}
                // onClick={() => setIsOpen(false)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Nav;
