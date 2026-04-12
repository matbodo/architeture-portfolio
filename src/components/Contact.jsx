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
            Acesso as redes sociais ou envie um email para discutir seu projeto.
          </p>
          <a href="mailto:claudiabcardoso@uol.com.br" className="contact-email">
            claudiabcardoso@uol.com.br
          </a>
        </div>

        {/* CTA row */}
        <div className="contact-cta-row">
          <div className="contact-socials">
            <a
              href="https://instagram.com/claudiabrunoarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
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
