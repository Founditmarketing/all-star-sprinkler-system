import React from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="bg-white">
      <SEO title="Privacy Policy" description="Privacy Policy for All Star Sprinkler Systems, Inc." />
      
      <section className="py-24 bg-cloud-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-display font-extrabold mb-12">Privacy Policy</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">Last Updated: April 2026</p>
            
            <h2 className="text-2xl font-bold text-midnight-navy mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information that you provide directly to us when you request a quote, such as your name, phone number, email address, and property address.
            </p>

            <h2 className="text-2xl font-bold text-midnight-navy mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you about your project, and to send you updates or promotional materials.
            </p>

            <h2 className="text-2xl font-bold text-midnight-navy mt-10 mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We do not share your personal information with third parties except as necessary to provide our services or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-midnight-navy mt-10 mb-4">4. Security</h2>
            <p className="mb-6">
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
            </p>

            <h2 className="text-2xl font-bold text-midnight-navy mt-10 mb-4">5. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at allstarsprinklersystems@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
