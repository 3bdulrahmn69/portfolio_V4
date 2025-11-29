'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    content: string;
  }>({
    type: null,
    content: '',
  });

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (value.trim().length > 50) {
          return 'Name must be less than 50 characters';
        }
        return '';

      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';

      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        }
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        if (value.trim().length > 1000) {
          return 'Message must be less than 1000 characters';
        }
        return '';

      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateField('name', userInput.name),
      email: validateField('email', userInput.email),
      message: validateField('message', userInput.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, content: '' });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        userInput,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setUserInput({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setStatusMessage({
        type: 'success',
        content: "Message sent successfully! I'll respond within 24 hours.",
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage({
        type: 'error',
        content:
          'Failed to send message. Please try again or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setStatusMessage({ type: null, content: '' });
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-md animate-FadeInRev">
      <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary inline-block">
        Contact Form
      </h3>

      <div className="relative p-8 bg-secondary rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 text-foreground bg-muted border rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.name
                    ? 'border-destructive focus:ring-destructive'
                    : 'border-border'
                }`}
                placeholder="Enter your name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 text-foreground bg-muted border rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                  errors.email
                    ? 'border-destructive focus:ring-destructive'
                    : 'border-border'
                }`}
                placeholder="your.email@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={userInput.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`w-full px-4 py-3 text-foreground bg-muted border rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                  errors.message
                    ? 'border-destructive focus:ring-destructive'
                    : 'border-border'
                }`}
                placeholder="Enter your message.."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                >
                  <FiAlertCircle className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-live="polite"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">↻</span>
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Status Messages */}
        <div aria-live="assertive">
          {statusMessage.type && (
            <div
              className={`animate-slide-up mt-6 p-4 rounded-lg flex items-start gap-3 ${
                statusMessage.type === 'success'
                  ? 'bg-success/20 text-success'
                  : 'bg-destructive/20 text-destructive'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <FiCheckCircle className="w-5 h-5 shrink-0" />
              ) : (
                <FiAlertCircle className="w-5 h-5 shrink-0" />
              )}
              <p className="text-sm">{statusMessage.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
