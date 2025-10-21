import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    // In a real implementation, this would save custom preferences
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-content">
        {!showSettings ? (
          <>
            <div className="cookie-text">
              <h3>Szanujemy Twoją prywatność</h3>
              <p>
                Używamy plików cookie, aby poprawić Twoje doświadczenia na naszej stronie. 
                Niektóre są niezbędne dla funkcjonowania witryny, podczas gdy inne pomagają nam 
                zrozumieć, jak z niej korzystasz.
              </p>
              <p>
                <a href="/#/polityka-cookies">Polityka Cookies</a> | <a href="/#/polityka-prywatnosci">Polityka Prywatności</a>
              </p>
            </div>

            <div className="cookie-actions">
              <button onClick={handleRejectAll} className="btn btn-secondary">
                Odrzuć wszystkie
              </button>
              <button onClick={() => setShowSettings(true)} className="btn btn-secondary">
                Dostosuj ustawienia
              </button>
              <button onClick={handleAcceptAll} className="btn btn-primary">
                Akceptuj wszystkie
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-text">
              <h3>Ustawienia prywatności</h3>
              
              <div className="cookie-option">
                <div>
                  <strong>Niezbędne pliki cookie</strong>
                  <p>Te pliki są wymagane do podstawowego działania strony.</p>
                </div>
                <input type="checkbox" checked disabled />
              </div>

              <div className="cookie-option">
                <div>
                  <strong>Analityczne pliki cookie</strong>
                  <p>Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony.</p>
                </div>
                <input type="checkbox" id="analytics-cookies" />
              </div>

              <div className="cookie-option">
                <div>
                  <strong>Marketingowe pliki cookie</strong>
                  <p>Używane do dostarczania spersonalizowanych reklam.</p>
                </div>
                <input type="checkbox" id="marketing-cookies" />
              </div>
            </div>

            <div className="cookie-actions">
              <button onClick={() => setShowSettings(false)} className="btn btn-secondary">
                Wróć
              </button>
              <button onClick={handleSaveSettings} className="btn btn-primary">
                Zapisz ustawienia
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid var(--border-default);
          box-shadow: var(--shadow-xl);
          z-index: 9999;
          animation: slide-in-bottom 0.3s ease-out;
        }

        @keyframes slide-in-bottom {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .cookie-content {
          max-width: var(--max-width-container);
          margin: 0 auto;
          padding: var(--spacing-xl);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .cookie-text h3 {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-sm);
        }

        .cookie-text p {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .cookie-text a {
          color: var(--color-primary-600);
          text-decoration: underline;
        }

        .cookie-option {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--spacing-lg);
          padding: var(--spacing-md);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-md);
        }

        .cookie-option strong {
          display: block;
          margin-bottom: var(--spacing-xs);
        }

        .cookie-option p {
          font-size: 0.875rem;
          margin: 0;
        }

        .cookie-option input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .cookie-option input[type="checkbox"]:disabled {
          cursor: not-allowed;
        }

        .cookie-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .cookie-content {
            padding: var(--spacing-lg);
          }

          .cookie-actions {
            flex-direction: column;
          }

          .cookie-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
