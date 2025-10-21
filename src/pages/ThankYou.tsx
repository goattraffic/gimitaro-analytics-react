const ThankYou = () => {
  return (
    <div className="page-content section">
      <div className="container text-center" style={{ maxWidth: '600px' }}>
        <h1>Dziękujemy!</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-2xl)' }}>
          Twoje dane zostały pomyślnie wysłane. Skontaktujemy się z Tobą wkrótce.
        </p>
        <a href="/#/" className="btn btn-primary">Powrót do strony głównej</a>
      </div>
    </div>
  );
};

export default ThankYou;
