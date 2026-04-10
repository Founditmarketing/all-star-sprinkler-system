import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { CITIES, BUSINESS_INFO, SERVICES } from '../constants';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';

export default function ServiceAreaPage() {
  const { citySlug } = useParams();
  
  // If no slug, show the hub
  if (!citySlug) {
    return <ServiceAreaHub />;
  }

  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) return <Navigate to="/service-area" replace />;

  return (
    <div className="bg-white">
      <SEO 
        title={`Irrigation & Sprinkler Services in ${city.name}, LA`}
        description={`Professional sprinkler system installation, repair, and drainage services in ${city.name}, Louisiana. Free estimates for ${city.name} homeowners.`}
      />

      {/* Hero */}
      <section className="bg-cloud-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-water-blue font-bold mb-6">
                <MapPin size={20} /> Serving {city.name}, Louisiana
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
                The Top-Rated Sprinkler Contractor in <span className="text-water-blue">{city.name}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {city.description} We provide residential and commercial properties in {city.name} with 
                high-efficiency irrigation solutions, expert repairs, and professional drainage installation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact-us" className="bg-water-blue text-white px-8 py-4 rounded-full font-bold hover:bg-deep-canal transition-all shadow-lg shadow-water-blue/20">
                  Get a Free Quote
                </Link>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                  <Phone size={18} /> {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-water-blue/10 rounded-[3rem] blur-2xl" />
              <img 
                src="https://picsum.photos/seed/louisiana/800/600" 
                alt={`${city.name} Louisiana Landscape`} 
                className="relative rounded-[3rem] shadow-2xl border border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />)}
                </div>
                <p className="text-sm font-bold text-midnight-navy">"Best service in {city.name}! Our lawn has never looked better."</p>
                <p className="text-xs text-gray-500 mt-2">— Local Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Our Services in {city.name}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer our full range of professional outdoor services to all neighborhoods in {city.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-24 bg-midnight-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-8">Why {city.name} Homeowners Choose All Star</h2>
              <div className="space-y-6">
                {[
                  { title: "Local Expertise", desc: `We understand the specific soil conditions and climate in ${city.name}.` },
                  { title: "Fast Response", desc: `Based nearby, we can often provide same-day or next-day estimates in ${city.name}.` },
                  { title: "Trenchless Technology", desc: "We keep your beautiful Louisiana lawn intact during installation." },
                  { title: "Guaranteed Results", desc: "Every system we install in Pineville and Alexandria comes with a full warranty." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-water-blue/20 p-2 rounded-lg shrink-0 h-fit">
                      <CheckCircle2 className="text-water-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-display mb-6 text-center">Get Your Free {city.name} Estimate</h3>
              <ContactForm className="p-0 bg-transparent shadow-none border-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Zip Codes */}
      <section className="py-16 bg-cloud-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display mb-6">Serving {city.name} Zip Codes:</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {city.zipCodes.map(zip => (
              <span key={zip} className="bg-white px-6 py-2 rounded-full border border-gray-200 font-bold text-midnight-navy">
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceAreaHub() {
  return (
    <div className="bg-white">
      <SEO 
        title="Service Area | Central Louisiana (CENLA)"
        description="All Star Sprinkler Systems serves Pineville, Alexandria, Ball, Leesville, and Natchitoches with expert irrigation and drainage services."
      />
      
      <section className="py-24 bg-midnight-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Our Service Area</h1>
          <p className="text-xl text-gray-400">
            We are proud to serve the entire Central Louisiana (CENLA) region from our two locations in Pineville and Alexandria.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CITIES.map((city, i) => (
              <Link 
                key={city.slug} 
                to={`/service-area/${city.slug}`}
                className="group bg-cloud-white p-10 rounded-[2rem] border border-gray-100 hover:border-water-blue hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="bg-water-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-water-blue group-hover:text-white transition-colors">
                  <MapPin size={32} />
                </div>
                <h2 className="text-3xl font-display mb-4">{city.name}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{city.description}</p>
                <div className="flex items-center gap-2 font-bold text-water-blue">
                  View {city.name} Services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-cloud-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display mb-8">Can't Find Your City?</h2>
              <p className="text-gray-600 text-lg mb-8">
                We frequently travel outside our primary service areas for larger projects. 
                If you're located near any of the cities listed above, give us a call to see if we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-water-blue text-white px-8 py-4 rounded-full font-bold text-center hover:bg-deep-canal transition-all">
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link to="/contact-us" className="bg-midnight-navy text-white px-8 py-4 rounded-full font-bold text-center hover:bg-black transition-all">
                  Send a Message
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="w-full aspect-square bg-cloud-white rounded-full flex items-center justify-center relative">
                <motion.div 
                  animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute w-64 h-64 border-2 border-water-blue rounded-full"
                />
                <div className="bg-water-blue text-white p-8 rounded-full shadow-2xl relative z-10">
                  <MapPin size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
