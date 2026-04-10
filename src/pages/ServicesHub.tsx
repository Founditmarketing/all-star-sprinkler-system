import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Droplets } from 'lucide-react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';

export default function ServicesHub() {
  return (
    <div className="bg-white">
      <SEO 
        title="Our Services | Irrigation, Lighting & Drainage"
        description="Explore our full range of professional outdoor services in Central Louisiana. From trenchless irrigation to landscape lighting and drainage."
      />

      <section className="py-24 bg-midnight-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">Everything Your Lawn Needs</h1>
          <p className="text-xl text-gray-400">
            Professional solutions engineered for the Louisiana climate. 
            We combine advanced technology with expert craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cloud-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={SERVICES[0].image} 
                alt="Professional Service" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-water-blue text-white p-10 rounded-[2rem] shadow-2xl hidden md:block">
                <p className="text-4xl font-display font-bold mb-2">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-display mb-8">The All Star Standard</h2>
              <div className="space-y-8">
                {[
                  { title: "Advanced Technology", desc: "We use the latest trenchless installation equipment and smart controllers." },
                  { title: "Expert Technicians", desc: "Our team is highly trained and experienced in all aspects of irrigation and drainage." },
                  { title: "Customer First", desc: "We treat your property like our own, ensuring a clean job site and perfect results." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-white p-4 rounded-2xl shadow-md h-fit">
                      <Droplets className="text-water-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/contact-us" className="bg-water-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-deep-canal transition-all shadow-xl shadow-water-blue/20">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
