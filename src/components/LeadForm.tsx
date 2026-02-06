import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="p-8 text-center"
      >
        <div className="relative w-20 h-20 mx-auto mb-5">
          <div className="absolute inset-0 bg-turf/20 rounded-full animate-ping" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-turf to-turf-light rounded-full flex items-center justify-center shadow-lg shadow-turf/25">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-black text-midnight mb-2">You're All Set!</h3>
        <p className="text-gray-600 mb-5">
          We'll contact you within <strong className="text-midnight">1 hour</strong> during business hours with your custom quote.
        </p>
        <p className="text-sm text-gray-400">
          Need it faster? Call{' '}
          <a href="tel:+17025558873" className="text-turf font-bold hover:underline">(702) 555-TURF</a>
        </p>
      </motion.div>
    );
  }

  const inputWrapper = (field: string) =>
    `relative flex items-center rounded-xl border-2 transition-all duration-200 ${
      focusedField === field
        ? 'border-turf bg-white shadow-sm shadow-turf/10'
        : 'border-gray-200 bg-gray-50/80 hover:border-gray-300'
    }`;

  const iconClass = (field: string) =>
    `w-5 h-5 transition-colors duration-200 ${
      focusedField === field ? 'text-turf' : 'text-gray-400'
    }`;

  const inputClass =
    'w-full bg-transparent py-3 pr-4 text-midnight placeholder-gray-400 text-[15px] outline-none';

  return (
    <form onSubmit={handleSubmit} className={compact ? 'p-5 space-y-3.5' : 'p-6 md:p-8 space-y-4'}>
      <div className={compact ? 'space-y-3.5' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        {/* Name */}
        <div>
          <label htmlFor="lead-name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Name <span className="text-turf">*</span>
          </label>
          <div className={inputWrapper('name')}>
            <div className="pl-3.5">
              <svg className={iconClass('name')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              id="lead-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              placeholder="John Smith"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Phone <span className="text-turf">*</span>
          </label>
          <div className={inputWrapper('phone')}>
            <div className="pl-3.5">
              <svg className={iconClass('phone')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <input
              type="tel"
              id="lead-phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              placeholder="(702) 555-1234"
            />
          </div>
        </div>
      </div>

      <div className={compact ? 'space-y-3.5' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        {/* Email */}
        <div>
          <label htmlFor="lead-email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Email
          </label>
          <div className={inputWrapper('email')}>
            <div className="pl-3.5">
              <svg className={iconClass('email')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              id="lead-email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* City/Area */}
        <div>
          <label htmlFor="lead-city" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            City/Area <span className="text-turf">*</span>
          </label>
          <div className={inputWrapper('city')}>
            <div className="pl-3.5">
              <svg className={iconClass('city')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <select
              id="lead-city"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              onFocus={() => setFocusedField('city')}
              onBlur={() => setFocusedField(null)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="">Select your area</option>
              {serviceAreas.map((area) => (
                <option key={area.slug} value={area.name}>
                  {area.name}
                </option>
              ))}
            </select>
            <div className="pr-3.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Address */}
      {!compact && (
        <div>
          <label htmlFor="lead-address" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Street Address
          </label>
          <div className={inputWrapper('address')}>
            <div className="pl-3.5">
              <svg className={iconClass('address')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <input
              type="text"
              id="lead-address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              onFocus={() => setFocusedField('address')}
              onBlur={() => setFocusedField(null)}
              className={inputClass}
              placeholder="123 Main St"
            />
          </div>
        </div>
      )}

      {/* Service */}
      {showService && (
        <div>
          <label htmlFor="lead-service" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Service Interested In
          </label>
          <div className={inputWrapper('service')}>
            <div className="pl-3.5">
              <svg className={iconClass('service')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <select
              id="lead-service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              onFocus={() => setFocusedField('service')}
              onBlur={() => setFocusedField(null)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name} - From ${service.price}
                </option>
              ))}
              <option value="not-sure">Not sure yet</option>
            </select>
            <div className="pr-3.5">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Message */}
      {!compact && (
        <div>
          <label htmlFor="lead-message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Additional Details
          </label>
          <div className={inputWrapper('message')}>
            <textarea
              id="lead-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent py-3 px-4 text-midnight placeholder-gray-400 text-[15px] outline-none resize-none"
              placeholder="Turf size, pet issues, specific concerns..."
            />
          </div>
        </div>
      )}

      {/* Submit */}
      <AnimatePresence mode="wait">
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={!loading ? { scale: 1.01 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          className="w-full relative overflow-hidden bg-gradient-to-r from-turf to-turf-light text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-turf/25 hover:shadow-xl hover:shadow-turf/35 transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-2.5">
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Get My Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </span>
          {!loading && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
          )}
        </motion.button>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 pt-1">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Secure
        </div>
        <div className="w-1 h-1 rounded-full bg-gray-300" />
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          1-Hour Response
        </div>
        <div className="w-1 h-1 rounded-full bg-gray-300" />
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          No Spam
        </div>
      </div>
    </form>
  );
}
