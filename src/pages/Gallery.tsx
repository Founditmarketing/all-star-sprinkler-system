import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import SEO from '../components/SEO';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <SEO 
        title="Project Gallery | See Our Work"
        description="View photos of our irrigation, lighting, and drainage projects across Pineville, Alexandria, and Central Louisiana."
      />

      <section className="py-24 bg-midnight-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Our Project Gallery</h1>
          <p className="text-xl text-gray-400">
            A showcase of our recent work. From lush green lawns to stunning nighttime lighting displays.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`All Star Project ${i + 1}`} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-midnight-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Project detail" 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 bg-cloud-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8">Ready for Results Like These?</h2>
          <Link to="/contact-us" className="bg-water-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-deep-canal transition-all shadow-xl shadow-water-blue/20 inline-block">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
