import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 id="contact-title" className="contact-title">
              Re-imagine
              <br />
              Your Future
              <br />
              Project
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
          <a className="contact-email">claudiabruno@exemplo.com</a>
        </div>

        {/* CTA row */}
        <div className="contact-cta-row">
          <div className="contact-socials">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="contact-bottom">
          <span>
            2026 Claudia Bruno Arquitetura. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </section>
  );
};
export default Contact;
