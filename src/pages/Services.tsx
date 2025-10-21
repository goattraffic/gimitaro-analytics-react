import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="page-content section">
      <div className="container">
        <h1 className="text-center">Nasze usługi</h1>
        <p className="text-center section-description" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          Kompleksowe rozwiązania analityczne dla Twojego biznesu
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
