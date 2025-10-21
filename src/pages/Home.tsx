import heroImage from '../assets/hero-analytics.png';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';

const Home = () => {
  const testimonials = [
    {
      name: 'Anna Kowalska',
      position: 'Dyrektor Marketingu, TechVenture',
      rating: 5,
      text: 'Dzięki Gimitaro mamy pełną kontrolę nad naszymi danymi marketingowymi. Wdrożenie GA4 i dashboardów pozwoliło nam zwiększyć ROI o 35%.'
    },
    {
      name: 'Marek Nowak',
      position: 'CEO, E-ShopPro',
      rating: 5,
      text: 'Profesjonalna obsługa i dogłębna wiedza techniczna. Integracja BigQuery z naszymi systemami przebiegła bezproblemowo.'
    },
    {
      name: 'Katarzyna Wiśniewska',
      position: 'Head of Analytics, MediaGrow',
      rating: 5,
      text: 'Wreszcie widzimy prawdziwy obraz skuteczności naszych kampanii. Modele atrybucji zmieniły sposób, w jaki alokujemy budżety.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Zrealizowanych projektów' },
    { number: '95%', label: 'Wskaźnik zadowolenia klientów' },
    { number: '24/7', label: 'Dostępność wsparcia' }
  ];

  const faqItems = [
    {
      question: 'Jak długo trwa wdrożenie Google Analytics 4?',
      answer: 'Standardowe wdrożenie GA4 trwa 2-3 tygodnie, w zależności od złożoności Twojej strony i liczby niestandardowych zdarzeń. Obejmuje to audyt, konfigurację, testy i szkolenie zespołu.'
    },
    {
      question: 'Czy potrzebuję BigQuery, jeśli mam GA4?',
      answer: 'BigQuery jest opcjonalny, ale bardzo zalecany dla zaawansowanej analizy. Pozwala na nielimitowane zapytania SQL, łączenie danych z wielu źródeł i przechowywanie danych bez ograniczeń czasowych GA4.'
    },
    {
      question: 'Czy wspieracie integrację z innymi platformami poza Google?',
      answer: 'Tak! Integrujemy Facebook Ads, LinkedIn Ads, Microsoft Advertising, platformy e-commerce (Shopify, WooCommerce), CRM (Salesforce, HubSpot) i wiele innych przez API.'
    },
    {
      question: 'Jakie są koszty BigQuery?',
      answer: 'BigQuery działa w modelu pay-as-you-go. Przechowywanie danych kosztuje około $0.02/GB miesięcznie, a zapytania około $5 za 1TB przetworzonych danych. Typowy klient płaci $50-200 miesięcznie.'
    },
    {
      question: 'Czy zapewniacie szkolenia dla zespołów?',
      answer: 'Każde wdrożenie obejmuje sesje szkoleniowe dla Twojego zespołu. Uczymy obsługi narzędzi, interpretacji raportów i samodzielnego tworzenia dashboardów.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Przejrzyste dane.<br />
                <span className="text-gradient">Trafne decyzje.</span>
              </h1>
              <p className="hero-description">
                Profesjonalna analityka marketingowa i Business Intelligence dla firm, 
                które chcą maksymalizować ROI w oparciu o rzetelne dane.
              </p>
              <div className="hero-actions">
                <a href="#orderFormAnchor" className="btn btn-primary">
                  Umów demo darmowe
                </a>
                <a href="/#/uslugi" className="btn btn-secondary">
                  Zobacz nasze usługi
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Marketing Analytics Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-tight">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section" id="uslugi">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nasze usługi</h2>
            <p className="section-description">
              Kompleksowe rozwiązania analityczne dopasowane do potrzeb Twojego biznesu
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2>Co mówią nasi klienci</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-position">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Najczęściej zadawane pytania</h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section" id="orderFormAnchor">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Gotowy na lepszą analitykę?</h2>
              <p>
                Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin, 
                aby omówić Twoje potrzeby i zaproponować optymalne rozwiązanie.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding: var(--spacing-4xl) 0;
          background: var(--gradient-hero);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4xl);
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: var(--spacing-lg);
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-2xl);
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .hero-image img {
          width: 100%;
          height: auto;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
        }

        .stats-section {
          background: var(--color-primary-600);
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-2xl);
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: var(--font-weight-extrabold);
          color: var(--color-accent-400);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          font-size: 1.125rem;
          opacity: 0.9;
        }

        .section-header {
          margin-bottom: var(--spacing-3xl);
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-md);
        }

        .section-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--spacing-2xl);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .testimonial-rating {
          color: #fbbf24;
          font-size: 1.25rem;
        }

        .testimonial-text {
          flex-grow: 1;
          font-style: italic;
          color: var(--text-secondary);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: var(--font-weight-bold);
          flex-shrink: 0;
        }

        .author-name {
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
        }

        .author-position {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .faq-item {
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }

        .faq-item:hover {
          border-color: var(--color-primary-300);
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          padding: var(--spacing-lg);
          font-weight: var(--font-weight-semibold);
          color: var(--text-primary);
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question::-webkit-details-marker {
          display: none;
        }

        .faq-question::after {
          content: '+';
          font-size: 1.5rem;
          color: var(--color-primary-600);
          transition: transform var(--transition-base);
        }

        .faq-item[open] .faq-question::after {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0 var(--spacing-lg) var(--spacing-lg);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-section {
          background: var(--gradient-hero);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-text {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }

        .cta-text h2 {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-md);
        }

        .cta-text p {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
          }

          .hero-image {
            order: -1;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
