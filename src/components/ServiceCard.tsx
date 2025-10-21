import { Link } from 'react-router-dom';

interface ServiceCardProps {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  icon: string;
}

const ServiceCard = ({ slug, title, short, price, features, icon }: ServiceCardProps) => {
  return (
    <div className="service-card card">
      <div className="service-icon-wrapper">
        <img src={icon} alt={title} className="service-icon" />
      </div>
      
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{short}</p>
      
      <div className="service-features">
        <ul>
          {features.slice(0, 3).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="service-footer">
        <div className="service-price">{price}</div>
        <a href={`/#/uslugi/${slug}`} className="btn btn-primary">
          Dowiedz się więcej
        </a>
      </div>

      <style>{`
        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-icon-wrapper {
          width: 80px;
          height: 80px;
          margin-bottom: var(--spacing-lg);
          border-radius: var(--radius-lg);
          background: var(--gradient-hero);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-md);
        }

        .service-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .service-features {
          margin: var(--spacing-lg) 0;
          flex-grow: 1;
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .service-features li {
          position: relative;
          padding-left: var(--spacing-lg);
          color: var(--text-secondary);
          font-size: 0.9375rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-success-500);
          font-weight: var(--font-weight-bold);
        }

        .service-footer {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-top: auto;
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--border-default);
        }

        .service-price {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
