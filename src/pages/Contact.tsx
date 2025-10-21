import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="page-content section">
      <div className="container" style={{ maxWidth: '700px' }}>
        <h1 className="text-center">Kontakt</h1>
        <p className="text-center" style={{ marginBottom: 'var(--spacing-3xl)', fontSize: '1.125rem' }}>
          Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
