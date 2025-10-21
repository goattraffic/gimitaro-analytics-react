import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
      setError('Wszystkie pola są wymagane');
      return;
    }

    if (!formData.consent) {
      setError('Musisz zaakceptować politykę prywatności');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in production this would POST to /api/lead.php
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to thank you page
      window.location.href = '/#/dziekujemy';
    } catch (err) {
      setError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" id="leadForm">
      <input type="text" name="__hp" style={{ display: 'none' }} />
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first_name">Imię *</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            value={formData.first_name}
            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Nazwisko *</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            value={formData.last_name}
            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="consent"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          />
          <span>
            Akceptuję <a href="/#/polityka-prywatnosci">politykę prywatności</a> i wyrażam zgodę na przetwarzanie moich danych osobowych *
          </span>
        </label>
      </div>

      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
      </button>

      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          max-width: 600px;
          margin: 0 auto;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .form-group label {
          font-weight: var(--font-weight-medium);
          color: var(--text-primary);
          font-size: 0.9375rem;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="tel"] {
          padding: 0.875rem 1rem;
          border: 1px solid var(--border-default);
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-family: var(--font-family);
          transition: all var(--transition-fast);
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--color-primary-600);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .checkbox-group {
          margin-top: var(--spacing-sm);
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          cursor: pointer;
          font-size: 0.9375rem;
          color: var(--text-secondary);
        }

        .checkbox-label input[type="checkbox"] {
          margin-top: 2px;
          cursor: pointer;
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .checkbox-label a {
          color: var(--color-primary-600);
          text-decoration: underline;
        }

        .form-error {
          padding: var(--spacing-md);
          background: #fee;
          border: 1px solid #fcc;
          border-radius: var(--radius-md);
          color: #c33;
          font-size: 0.9375rem;
        }

        .btn[disabled] {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
