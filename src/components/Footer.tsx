import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Gimitaro</h3>
            <p className="footer-text">
              Profesjonalna analityka marketingowa i BI dla firm, które chcą podejmować decyzje w oparciu o dane.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Nawigacja</h4>
            <ul className="footer-links">
              <li><a href="/#/">Strona główna</a></li>
              <li><a href="/#/o-nas">O nas</a></li>
              <li><a href="/#/uslugi">Usługi</a></li>
              <li><a href="/#/kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Polityki</h4>
            <ul className="footer-links">
              <li><a href="/#/polityka-prywatnosci">Polityka prywatności</a></li>
              <li><a href="/#/polityka-cookies">Polityka cookies</a></li>
              <li><a href="/#/regulamin">Regulamin</a></li>
              <li><a href="/#/zwroty">Polityka zwrotów</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Godziny pracy</h4>
            <p className="footer-text">
              Poniedziałek - Piątek<br />
              9:00 - 17:00
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gimitaro. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>

      <style>{`
        .main-footer {
          background: var(--color-gray-900);
          color: white;
          padding: var(--spacing-4xl) 0 var(--spacing-xl);
          margin-top: var(--spacing-4xl);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-3xl);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-title {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: var(--spacing-xs);
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: var(--font-weight-semibold);
          color: white;
          margin-bottom: var(--spacing-xs);
        }

        .footer-text {
          color: var(--color-gray-400);
          line-height: 1.6;
          margin: 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .footer-links a {
          color: var(--color-gray-400);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-accent-400);
        }

        .footer-bottom {
          padding-top: var(--spacing-xl);
          border-top: 1px solid var(--color-gray-800);
          text-align: center;
          color: var(--color-gray-500);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
