"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Building2, Users, Code } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Sovereignty License",
    icon: Building2,
    price: "Custom",
    period: "Annual",
    description: "Complete data privacy for national security and finance",
    target: "Government / Central Banks",
    value: "$150,000+ annually",
    features: [
      "Private Vault deployment",
      "Complete data sovereignty",
      "Custom model training",
      "Dedicated support team",
      "On-premise infrastructure",
      "Compliance certification",
    ],
    color: "primary",
    popular: false,
  },
  {
    name: "Industry Verticals",
    icon: Users,
    price: "$500",
    period: "Monthly",
    description: "Scalable specialized versions for high-stakes industries",
    target: "Legal, Medical, Agriculture",
    value: "$500 - $5,000 monthly",
    features: [
      "Industry-specific models",
      "API access",
      "Priority support",
      "Custom fine-tuning",
      "SLA guarantees",
      "Training & onboarding",
    ],
    color: "accent",
    popular: true,
  },
  {
    name: "Namqula API",
    icon: Code,
    price: "$0.005",
    period: "Per 1k tokens",
    description: "High-volume positioning as the 'Stripe of African AI'",
    target: "Startups / Developers",
    value: "Pay-as-you-go",
    features: [
      "RESTful API access",
      "Developer documentation",
      "Community support",
      "99.9% uptime SLA",
      "Rate limiting",
      "Usage analytics",
    ],
    color: "green-500",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Enterprise Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible pricing models designed for governments, enterprises, and developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`relative card-enhanced p-8 group ${
                  plan.popular ? "ring-2 ring-yellow-500 dark:ring-yellow-400 ring-opacity-50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {plan.target}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      / {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  {plan.value}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#demo"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-600 text-white hover:bg-yellow-700"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  Contact Sales
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Also available: Data Licensing for Big Tech ($1M - $5M contracts) and AISOD Institute Training ($200 per student)
          </p>
          <Link
            href="#demo"
            className="text-blue-600 dark:text-blue-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
          >
            Schedule a consultation →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
