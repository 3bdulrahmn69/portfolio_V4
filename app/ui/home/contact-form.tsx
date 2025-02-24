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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    content: string;
  }>({
    type: null,
    content: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: null, content: '' });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        userInput,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setUserInput({ name: '', email: '', message: '' });
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
      <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary-light dark:border-primary-dark inline-block">
        Contact Form
      </h3>

      <div className="relative p-8 bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          aria-label="Contact form"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-text-light bg-gray-50 dark:bg-background-light border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
                placeholder="Enter your name"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-text-light bg-gray-50 dark:bg-background-light border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={userInput.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 text-text-light bg-gray-50 dark:bg-background-light border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-all resize-none"
                placeholder="Enter your message.."
                aria-required="true"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-primary-light hover:bg-primary-light/80 dark:bg-primary-dark dark:hover:bg-primary-dark/80 text-text-dark dark:text-text-light py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
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
