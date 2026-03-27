import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 id="contact-title" className="contact-title">
              Onde sua
              <br />
              Visão ganha
              <br />
              Forma e
              <br />
              Identidade
            </h2>
          </div>
          <div className="contact-right">
            <div className="contact-logo-wrap">
              <img
                className="contact-logo"
                src="/images/logo-full.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>

        {/* Description + email */}
        <div className="contact-info">
          <p className="contact-text">
            Entre em contato e vamos criar algo que va alem da estetica. Trago
            clareza no processo e proximos passos para o seu projeto.
          </p>
          <a href="mailto:claudiabruno@exemplo.com" className="contact-email">
            claudiabruno@exemplo.com
          </a>
        </div>

        {/* CTA row */}
        <div className="contact-cta-row">
          <div className="contact-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="contact-bottom">
          <span>2026 Claudia Bruno Arquitetura.</span>
        </div>
      </div>
    </section>
  );
};
export default Contact;
