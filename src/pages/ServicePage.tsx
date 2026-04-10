import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Phone, Mail, ChevronRight, ArrowRight, Star } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES.filter(s => s.id !== service.id);

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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
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

            {/* Sidebar */}
            <div className="space-y-12">
              {/* Form */}
              <div className="sticky top-28 space-y-12">
                <div className="bg-midnight-navy p-8 rounded-3xl text-white">
                  <h3 className="text-2xl font-display mb-4">Request a Quote</h3>
                  <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                  <ContactForm className="p-0 bg-transparent shadow-none border-none" />
                </div>

                {/* Other Services */}
                <div className="bg-cloud-white p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-display mb-6">Other Services</h3>
                  <div className="space-y-4">
                    {otherServices.map(s => (
                      <Link 
                        key={s.id} 
                        to={`/${s.slug}`}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-water-blue hover:shadow-md transition-all group"
                      >
                        <span className="font-bold group-hover:text-water-blue transition-colors">{s.title}</span>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-water-blue transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-water-blue/10 p-8 rounded-3xl border border-water-blue/20 text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="text-water-blue fill-water-blue" size={20} />)}
                  </div>
                  <p className="font-bold text-midnight-navy mb-2">Top Rated in CENLA</p>
                  <p className="text-sm text-gray-600">Based on 100+ Google Reviews from homeowners like you.</p>
                </div>
              </div>
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
