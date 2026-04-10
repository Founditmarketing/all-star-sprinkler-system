import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const REVIEWS = [
  { name: "Sarah J.", city: "Pineville", text: "The trenchless installation was amazing. They were in and out in a day and my yard looked like they were never there. Highly recommend!", rating: 5, date: "March 2026" },
  { name: "Michael R.", city: "Alexandria", text: "Best sprinkler company in town. They fixed a leak that two other companies couldn't find. Professional and fair pricing.", rating: 5, date: "February 2026" },
  { name: "David L.", city: "Ball", text: "Our landscape lighting looks incredible. It completely transformed the look of our home at night. Great team to work with.", rating: 5, date: "January 2026" },
  { name: "Jennifer W.", city: "Alexandria", text: "We had a major drainage issue that was flooding our patio. All Star installed a French drain system and we haven't had a drop of water since. Lifesavers!", rating: 5, date: "December 2025" },
  { name: "Robert M.", city: "Pineville", text: "Very professional team. They explained everything clearly and the final price matched the estimate exactly. The new system works perfectly.", rating: 5, date: "November 2025" },
  { name: "Linda K.", city: "Leesville", text: "I was worried about my flower beds, but they were so careful during the installation. My lawn is greener than ever. Thank you!", rating: 5, date: "October 2025" }
];

export default function Reviews() {
  return (
    <div className="bg-white">
      <SEO 
        title="Customer Reviews | All Star Sprinkler Systems"
        description="Read what our happy customers in Central Louisiana have to say about our irrigation, lighting, and drainage services."
      />

      <section className="py-24 bg-midnight-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={32} />)}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">What Your Neighbors Say</h1>
          <p className="text-xl text-gray-400">
            We take pride in our work and our reputation. 
            Join over 100+ five-star customers in the CENLA region.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cloud-white p-10 rounded-[2.5rem] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <Quote className="absolute top-8 right-8 text-water-blue/10 group-hover:text-water-blue/20 transition-colors" size={56} />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="text-water-blue fill-water-blue" size={18} />)}
                </div>
                <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-midnight-navy text-lg">{review.name}</p>
                    <p className="text-water-blue font-medium">{review.city}, LA</p>
                  </div>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Badge Section */}
      <section className="py-24 bg-cloud-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-10 mx-auto mb-6"
            />
            <h2 className="text-3xl font-display mb-4">4.9 Star Rating on Google</h2>
            <p className="text-gray-600 text-lg mb-8">
              We are one of the highest-rated irrigation companies in Central Louisiana. 
              Our commitment to quality and service is unmatched.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-turf-green" />
                <span className="font-bold">Verified Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-turf-green" />
                <span className="font-bold">Local Business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-turf-green" />
                <span className="font-bold">Family Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-display mb-8">Experience the All Star Difference</h2>
          <Link to="/contact-us" className="bg-water-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-deep-canal transition-all shadow-xl shadow-water-blue/20 inline-block">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
