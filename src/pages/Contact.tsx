import React from 'react';
import { Phone, Mail, MapPin, Facebook, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="bg-white">
      <SEO 
        title="Contact Us | Free Quote"
        description="Get a free estimate for your irrigation, lighting, or drainage project in Central Louisiana. Contact All Star Sprinkler Systems today."
      />

      <section className="py-24 bg-midnight-navy text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your lawn? Fill out the form below or give us a call. 
            We'll provide a custom estimate tailored to your property.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-start gap-4 group">
                    <div className="bg-water-blue/10 p-4 rounded-2xl text-water-blue group-hover:bg-water-blue group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Call or Text</p>
                      <p className="text-gray-600 text-lg">{BUSINESS_INFO.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-4 group">
                    <div className="bg-water-blue/10 p-4 rounded-2xl text-water-blue group-hover:bg-water-blue group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email Us</p>
                      <p className="text-gray-600 text-lg">{BUSINESS_INFO.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-water-blue/10 p-4 rounded-2xl text-water-blue">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Business Hours</p>
                      <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display mb-8">Our Locations</h2>
                <div className="space-y-8">
                  {BUSINESS_INFO.locations.map((loc, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-turf-green/10 p-4 rounded-2xl text-turf-green">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{loc.label}</p>
                        <p className="text-gray-600">{loc.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-cloud-white p-8 rounded-[2rem] border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-water-blue" size={32} />
                  <h3 className="text-xl font-bold">Fully Licensed & Insured</h3>
                </div>
                <p className="text-gray-600">
                  Your property is in safe hands. We carry full liability and workers' compensation insurance for your peace of mind.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
          Interactive Service Area Map
        </div>
        {/* In a real app, embed Google Maps here */}
      </section>
    </div>
  );
}
