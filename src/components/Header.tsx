import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.hash === path;

  const navLinks = [
    { path: '/#/', label: 'Strona główna' },
    { path: '/#/o-nas', label: 'O nas' },
    { path: '/#/uslugi', label: 'Usługi' },
    { path: '/#/kontakt', label: 'Kontakt' }
  ];

  return (
    <header className="main-header">
      <nav className="container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <img src={logoImage} alt="Gimitaro - Marketing Analytics & BI" className="logo-image" />
            <span className="logo-text">Gimitaro</span>
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          <div className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        .main-header {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-default);
          z-index: 1000;
          box-shadow: var(--shadow-sm);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          text-decoration: none;
          font-weight: var(--font-weight-bold);
          font-size: 1.25rem;
          color: var(--text-primary);
          transition: opacity var(--transition-fast);
        }

        .logo-link:hover {
          opacity: 0.8;
        }

        .logo-image {
          height: 40px;
          width: auto;
        }

        .logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--spacing-xs);
          color: var(--text-primary);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--spacing-xl);
        }

        .nav-link {
          position: relative;
          font-weight: var(--font-weight-medium);
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
          padding: var(--spacing-xs) 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width var(--transition-base);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary-600);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav-menu {
            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            background: white;
            border-bottom: 1px solid var(--border-default);
            padding: var(--spacing-md);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-base);
          }

          .nav-menu.is-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-link {
            padding: var(--spacing-md);
            border-bottom: 1px solid var(--border-default);
          }

          .nav-link:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
