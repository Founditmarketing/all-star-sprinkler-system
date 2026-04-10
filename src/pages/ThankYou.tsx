import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import SEO from '../components/SEO';

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cloud-white py-24">
      <SEO title="Thank You | Request Received" description="Thank you for contacting All Star Sprinkler Systems. We will be in touch shortly." />
      
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <div className="bg-turf-green/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="text-turf-green" size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Request Received!</h1>
          <p className="text-xl text-gray-600 mb-10">
            Thank you for reaching out to All Star Sprinkler Systems. 
            One of our experts will review your details and contact you within 24 hours to schedule your free estimate.
          </p>
          
          <div className="space-y-4">
            <Link to="/" className="w-full bg-water-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-deep-canal transition-all flex items-center justify-center gap-2">
              Back to Homepage <ArrowRight size={20} />
            </Link>
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-400 mb-4 uppercase tracking-widest font-bold text-xs">Need Immediate Help?</p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-display font-bold text-midnight-navy hover:text-water-blue transition-colors flex items-center justify-center gap-3">
                <Phone /> {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
