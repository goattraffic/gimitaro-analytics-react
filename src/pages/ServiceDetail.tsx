import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="page-content section">
        <div className="container">
          <h1>Usługa nie znaleziona</h1>
          <a href="/#/uslugi" className="btn btn-primary">Powrót do usług</a>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <nav style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--text-muted)' }}>
          <a href="/#/">Strona główna</a> / <a href="/#/uslugi">Usługi</a> / {service.title}
        </nav>

        <h1>{service.title}</h1>
        <div className="service-price" style={{ fontSize: '2rem', marginBottom: 'var(--spacing-2xl)' }}>
          {service.price}
        </div>

        <div dangerouslySetInnerHTML={{ __html: service.contentHtml }} />

        <div style={{ marginTop: 'var(--spacing-3xl)' }}>
          <a href="/#orderFormAnchor" className="btn btn-primary">Zamów usługę</a>
          <a href="/#/uslugi" style={{ marginLeft: 'var(--spacing-md)' }}>← Powrót do listy usług</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
