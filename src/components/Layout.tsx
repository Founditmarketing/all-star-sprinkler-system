import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Menu, X, Droplets, MapPin, Star, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-midnight-navy text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 hover:text-water-blue transition-colors">
              <Phone size={14} /> {BUSINESS_INFO.phone}
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2 hover:text-water-blue transition-colors">
              <Mail size={14} /> {BUSINESS_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-turf-green font-semibold">
              <Star size={14} fill="currentColor" /> 4.9/5 Google Rating
            </span>
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-water-blue transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-water-blue p-2 rounded-lg group-hover:bg-deep-canal transition-colors">
              <Droplets className="text-white" size={28} />
            </div>
            <div>
              <span className="block font-display font-extrabold text-xl leading-none text-midnight-navy">ALL STAR</span>
              <span className="block font-display font-bold text-xs tracking-[0.2em] text-deep-canal uppercase">Sprinkler Systems</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-water-blue transition-colors">Home</Link>
            <div className="relative group">
              <Link to="/services" className="font-medium hover:text-water-blue transition-colors flex items-center gap-1">
                Services <ChevronRight size={14} className="rotate-90" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                {SERVICES.map(service => (
                  <Link 
                    key={service.id} 
                    to={`/${service.slug}`}
                    className="block px-6 py-2 hover:bg-cloud-white hover:text-water-blue transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/service-area" className="font-medium hover:text-water-blue transition-colors">Service Area</Link>
            <Link to="/gallery" className="font-medium hover:text-water-blue transition-colors">Gallery</Link>
            <Link to="/reviews" className="font-medium hover:text-water-blue transition-colors">Reviews</Link>
            <Link to="/contact-us" className="bg-water-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-deep-canal transition-all transform hover:scale-105 shadow-lg shadow-water-blue/20">
              Free Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-midnight-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-display">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <div className="pl-4 flex flex-col gap-4 text-base font-sans text-gray-600">
                {SERVICES.map(service => (
                  <Link key={service.id} to={`/${service.slug}`} onClick={() => setIsMenuOpen(false)}>
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link to="/service-area" onClick={() => setIsMenuOpen(false)}>Service Area</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link to="/contact-us" className="bg-water-blue text-white py-4 rounded-xl text-center font-bold" onClick={() => setIsMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-midnight-navy text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-water-blue p-2 rounded-lg">
                <Droplets className="text-white" size={24} />
              </div>
              <span className="font-display font-extrabold text-xl leading-none">ALL STAR</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Central Louisiana's premier irrigation and landscape lighting specialists. Keeping CENLA green since {2026 - BUSINESS_INFO.stats.yearsInBusiness}.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.facebook} className="bg-white/10 p-3 rounded-full hover:bg-water-blue transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/${service.slug}`} className="hover:text-water-blue transition-colors flex items-center gap-2">
                    <ChevronRight size={14} /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Service Area</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Pineville, LA</li>
              <li>Alexandria, LA</li>
              <li>Ball, LA</li>
              <li>Leesville, LA</li>
              <li>Natchitoches, LA</li>
              <li><Link to="/service-area" className="text-water-blue hover:underline">View All Areas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-water-blue shrink-0" size={20} />
                <span>{BUSINESS_INFO.locations[0].address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-water-blue shrink-0" size={20} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-water-blue shrink-0" size={20} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} All Star Sprinkler Systems, Inc. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-water-blue text-white flex">
        <a href={`tel:${BUSINESS_INFO.phone}`} className="flex-1 flex items-center justify-center gap-2 py-4 font-bold border-r border-white/20">
          <Phone size={20} /> Call Now
        </a>
        <Link to="/contact-us" className="flex-1 flex items-center justify-center gap-2 py-4 font-bold bg-deep-canal">
          <Mail size={20} /> Free Quote
        </Link>
      </div>
    </div>
  );
}
