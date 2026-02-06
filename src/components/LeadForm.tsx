import { useState } from 'react';
import type { FormEvent } from 'react';
import { services, serviceAreas } from '../data/services';

interface LeadFormProps {
  source?: string;
  compact?: boolean;
  showService?: boolean;
}

export function LeadForm({ source = 'website', compact = false, showService = true }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: '',
    message: '',
    source,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Lead submitted:', formData);
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-turf/10 to-turf/5 border border-turf/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-turf to-turf-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-turf/20">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-midnight mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          We've received your request and will contact you within 1 hour during business hours.
        </p>
        <p className="text-sm text-gray-500">
          Need immediate assistance? Call us at{' '}
          <a href="tel:+17025558873" className="text-turf font-bold hover:underline">(702) 555-TURF</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="lead-name" className="form-label">Name *</label>
          <input
            type="text"
            id="lead-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="form-label">Phone *</label>
          <input
            type="tel"
            id="lead-phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="form-input"
            placeholder="(702) 555-1234"
          />
        </div>
      </div>

      <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="lead-email" className="form-label">Email</label>
          <input
            type="email"
            id="lead-email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="lead-city" className="form-label">City/Area *</label>
          <select
            id="lead-city"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="form-input"
          >
            <option value="">Select your area</option>
            {serviceAreas.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="lead-address" className="form-label">Street Address</label>
          <input
            type="text"
            id="lead-address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="form-input"
            placeholder="123 Main St"
          />
        </div>
      )}

      {showService && (
        <div>
          <label htmlFor="lead-service" className="form-label">Service Interested In</label>
          <select
            id="lead-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="form-input"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - Starting at ${service.price}
              </option>
            ))}
            <option value="not-sure">Not sure - need consultation</option>
          </select>
        </div>
      )}

      {!compact && (
        <div>
          <label htmlFor="lead-message" className="form-label">Additional Details</label>
          <textarea
            id="lead-message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="form-input"
            placeholder="Approximate turf size, pet issues, specific concerns..."
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : (
          'Get My Free Quote'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to receive calls/texts about your quote. We respect your privacy.
      </p>
    </form>
  );
}
