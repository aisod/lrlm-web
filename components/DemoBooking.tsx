"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Mail, Building2, Send, CheckCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  phone?: string;
  message?: string;
}

export default function DemoBooking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company/Organization is required";
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = "Please select your role";
    }

    // Phone validation (optional but if provided, validate format)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Message validation (optional but if provided, minimum length)
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details about your use case (minimum 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setSubmitStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          phone: "",
          message: "",
        });
        setIsSubmitted(false);
        setSubmitStatus(null);
        setErrors({});
      }, 5000);

    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <section id="demo" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Book an Enterprise Demo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how Namqula LRLM can transform your organization. Schedule a personalized demonstration with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  }`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  }`}
                  placeholder="john@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all ${
                    errors.company
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                  }`}
                  placeholder="Your Company"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Role/Title *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="cto">CTO / Technical Lead</option>
                  <option value="ceo">CEO / Executive</option>
                  <option value="director">Director / Manager</option>
                  <option value="developer">Developer / Engineer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+264 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message / Use Case
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your use case or specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                  submitStatus === 'success'
                    ? "bg-green-600"
                    : submitStatus === 'error'
                    ? "bg-red-600"
                    : isSubmitting
                    ? "bg-blue-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                }`}
                aria-describedby={submitStatus ? "submit-status" : undefined}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Request Sent Successfully!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Failed to Send - Try Again</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Request Demo</span>
                  </>
                )}
              </button>

              {submitStatus && (
                <div
                  id="submit-status"
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                  }`}
                  role="alert"
                >
                  <p className={`text-sm ${
                    submitStatus === 'success'
                      ? "text-green-800 dark:text-green-200"
                      : "text-red-800 dark:text-red-200"
                  }`}>
                    {submitStatus === 'success'
                      ? "Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo."
                      : "There was an error sending your request. Please try again or contact us directly at enterprise@aisod.solutions."
                    }
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-8 text-white">
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Schedule Your Demo</h3>
              <p className="text-primary-100 mb-4">
                Book a 30-minute personalized demonstration of Namqula LRLM tailored to your industry and use case.
              </p>
              <ul className="space-y-2 text-primary-100">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Live model demonstration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Custom use case discussion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Technical architecture overview</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Pricing & deployment options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <Clock className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">What to Expect</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-semibold mb-1">1. Introduction (5 min)</p>
                  <p className="text-sm">Overview of AISOD and Namqula LRLM</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">2. Live Demo (15 min)</p>
                  <p className="text-sm">See the model in action with African languages</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">3. Q&A (10 min)</p>
                  <p className="text-sm">Discuss your specific requirements and use cases</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <Building2 className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Enterprise Ready</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our team works with governments, financial institutions, and enterprises across Africa.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by: Bank of Namibia, NAMFISA, and leading Namibian institutions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
