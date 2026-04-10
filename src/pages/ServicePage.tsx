import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, ChevronRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      <SEO 
        title={service.title}
        description={service.description}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": BUSINESS_INFO.name
          },
          "areaServed": "Central Louisiana",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Irrigation Services",
            "itemListElement": service.features.map((f, i) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": f
              }
            }))
          }
        }}
      />

      {/* Hero */}
      <section className="relative py-32 bg-midnight-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image} alt="" className="w-full h-full object-cover blur-sm" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-water-blue font-bold mb-6 hover:underline">
              <ChevronRight className="rotate-180" size={18} /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 max-w-4xl leading-tight">
              {service.title} <br />
              <span className="text-water-blue">in Central Louisiana</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact-us" className="bg-water-blue text-white px-8 py-4 rounded-full font-bold hover:bg-deep-canal transition-all">
                Get a Free Quote
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <Phone size={18} /> {BUSINESS_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div>
            <h2 className="text-3xl font-display mb-6">Expert {service.title} Solutions</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6 text-xl leading-relaxed font-medium text-midnight-navy">
                {service.longDescription}
              </p>
              <p className="mb-6">
                At All Star Sprinkler Systems, we understand that your landscape is an investment. 
                Our team of certified professionals brings years of experience to every {service.title.toLowerCase()} project, 
                ensuring that your property receives the highest quality care and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-cloud-white rounded-2xl border border-gray-100">
                <div className="bg-water-blue/10 p-2 rounded-lg shrink-0">
                  <CheckCircle2 className="text-water-blue" size={24} />
                </div>
                <span className="font-bold text-midnight-navy">{feature}</span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={service.image} alt={service.title} className="w-full h-auto" referrerPolicy="no-referrer" />
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-display">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                    <span className="text-water-blue">Q:</span> {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <div className="max-w-7xl mx-auto px-4 py-10 border-t border-gray-100 text-sm text-gray-400">
        Last Updated: April 2026 | All Star Sprinkler Systems, Inc.
      </div>
    </div>
  );
}
