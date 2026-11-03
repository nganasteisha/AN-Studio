
function Footer() {
  return (
    <>
      <section className="contact-section" id="contact">
        <p className="section-label">БУДЕМО НА ЗВ'ЯЗКУ</p>

        <h2>
          Маєш ідею?
          <br />
          <span>Створімо щось красиве.</span>
        </h2>

        <p className="contact-description">
          Напиши мені про свою ідею, зйомку або проєкт.
          Разом перетворимо твоє натхнення на історію.
        </p>

        <a
          className="contact-button"
          href="mailto:hello@anstudio.com"
        >
          Обговорити проєкт <span>↗</span>
        </a>

        <div className="contact-socials">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>

          <a href="mailto:hello@anstudio.com">
            Email ↗
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#" className="footer-logo">AN Studio</a>
        <p>© 2026 · Портфоліо фотографа та дизайнера</p>
        <a href="#about">На початок ↑</a>
      </footer>
    </>
  );
}

export default Footer;
