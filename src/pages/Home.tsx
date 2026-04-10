import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Droplets, Star, ShieldCheck, Clock, MapPin, 
  ChevronRight, ArrowRight, Quote, CheckCircle2, Phone 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO, GALLERY_IMAGES, CITIES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div>
      <SEO 
        title="Louisiana's Premier Irrigation & Sprinkler Experts"
        description="All Star Sprinkler Systems provides expert irrigation installation, repair, landscape lighting, and drainage solutions in Pineville and Alexandria, LA."
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex flex-col justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-midnight-navy/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight-navy/80 z-10" />
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/SprinklerVid.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-32 pb-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-water-blue/20 backdrop-blur-md border border-water-blue/30 text-water-blue px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-4">
                Established & Trusted in CENLA
              </span>
              <h1 className="text-5xl md:text-7xl text-white font-display font-extrabold leading-tight mb-4 text-balance">
                We Don't Just Install Sprinklers. <br />
                <span className="text-water-blue">We Keep Louisiana Green.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Experience the All Star difference with our trenchless installation technology. 
                Maximum efficiency, zero lawn damage, and a lifetime of lush green grass.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact-us" className="bg-water-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-deep-canal transition-all transform hover:scale-105 shadow-xl shadow-water-blue/30 text-center">
                  Get a Free Estimate
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: ShieldCheck, text: "Licensed & Insured" },
                  { icon: Droplets, text: "Trenchless (No Dig)" },
                  { icon: Clock, text: "Free Estimates" },
                  { icon: Star, text: "4.9/5 Rating" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-2 text-white/80 text-sm font-medium"
                  >
                    <item.icon className="text-turf-green" size={18} />
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/5 backdrop-blur-xl border-t border-white/10 py-6 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-around items-center">
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-water-blue"><Counter end={15} suffix="+" /></p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years in CENLA</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-water-blue"><Counter end={5000} suffix="+" /></p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Properties Served</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-water-blue"><Counter end={99} suffix="%" /></p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Satisfaction Rate</p>
            </div>
          </div>
        </div>

      </section>

      {/* 1. Services Mini - "Everything Your Lawn Needs" */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Everything Your Lawn Needs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From precision irrigation to dramatic lighting, we provide full-service outdoor solutions for Central Louisiana.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-water-blue hover:text-deep-canal transition-colors text-lg">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Free Quote - Premium Split Panel */}
      <section className="relative py-24 bg-midnight-navy overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-water-blue/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-deep-canal/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-water-blue/10 border border-water-blue/20 text-water-blue px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest mb-6">
                Free Estimates
              </span>
              <h2 className="text-4xl md:text-5xl text-white font-display font-extrabold mb-6 leading-tight">
                Your Dream Lawn <br />
                <span className="text-water-blue">Starts Here.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                Tell us about your project and our CENLA experts will provide a custom solution — completely free, no strings attached.
              </p>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "Free", label: "On-Site Visit" },
                  { value: "24hr", label: "Response Time" },
                  { value: "15+", label: "Years Expert" }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-2xl font-display font-bold text-water-blue">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="bg-water-blue p-3 rounded-xl shadow-lg shadow-water-blue/30 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Prefer to Call?</p>
                  <p className="text-white font-bold text-lg">{BUSINESS_INFO.phone}</p>
                </div>
              </a>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Irrigation Install Mini - "Trenchless = No Damage" */}
      <section className="py-24 bg-midnight-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">Trenchless Technology = <span className="text-water-blue">Zero Lawn Damage</span></h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Traditional irrigation installation involves digging deep trenches that ruin your grass and landscape. 
                At All Star, we use advanced vibrating plows to pull pipe underground, leaving only a tiny slit that disappears in days.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  "No heavy excavators on your lawn",
                  "Preserves existing root systems",
                  "Faster installation & cleanup",
                  "Immediate use of your yard"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div className="bg-water-blue/20 p-1 rounded-full">
                      <CheckCircle2 className="text-water-blue" size={20} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/irrigation-installation-trenchless" className="bg-water-blue text-white px-8 py-4 rounded-full font-bold hover:bg-deep-canal transition-all inline-block">
                Learn About Trenchless
              </Link>
            </motion.div>
            <div className="relative">
              <img 
                src="https://allstarsprinklers.com/wp-content/uploads/2024/06/1.png"
                alt="Trenchless irrigation installation result"
                className="rounded-3xl shadow-2xl w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Mini - 6-photo mosaic */}
      <section className="py-24 bg-cloud-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Our Work in Action</h2>
              <p className="text-gray-600 text-lg">Real results for real neighbors across Central Louisiana.</p>
            </div>
            <Link to="/gallery" className="bg-white text-midnight-navy border border-gray-200 px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
              View Full Gallery <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.slice(0, 6).map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <img src={img} alt={`All Star Project ${i+1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Irrigation Repair Mini - Symptom cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Sprinkler Problems? We Fix It All.</h2>
            <p className="text-gray-600 text-lg">Don't let a broken system waste water or kill your lawn.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Broken Heads", desc: "Geysers or heads that won't pop up.", icon: "Droplets" },
              { title: "Zone Issues", desc: "Zones that won't turn on or off.", icon: "Wrench" },
              { title: "Controller Failures", desc: "Electrical issues or programming errors.", icon: "ShieldCheck" },
              { title: "Underground Leaks", desc: "Soggy spots or high water bills.", icon: "Waves" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 bg-cloud-white hover:border-water-blue transition-colors group">
                <h3 className="text-xl font-bold mb-4 group-hover:text-water-blue transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/irrigation-repair" className="bg-water-blue text-white px-8 py-4 rounded-full font-bold hover:bg-deep-canal transition-all inline-block">
              Schedule a Repair
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Reviews Mini - 3-card carousel */}
      <section className="py-24 bg-midnight-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />)}
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">What Your Neighbors Say</h2>
            <p className="text-gray-400 text-lg">Over 100+ five-star reviews from happy customers in CENLA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", city: "Pineville", text: "The trenchless installation was amazing. They were in and out in a day and my yard looked like they were never there. Highly recommend!" },
              { name: "Michael R.", city: "Alexandria", text: "Best sprinkler company in town. They fixed a leak that two other companies couldn't find. Professional and fair pricing." },
              { name: "David L.", city: "Ball", text: "Our landscape lighting looks incredible. It completely transformed the look of our home at night. Great team to work with." }
            ].map((review, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
                <Quote className="absolute top-6 right-6 text-water-blue/20" size={48} />
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-water-blue text-sm">{review.city}, LA</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/reviews" className="text-water-blue font-bold hover:underline">Read More Reviews</Link>
          </div>
        </div>
      </section>

      {/* 7. Landscape Lighting Mini - Dramatic dark night photo */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src={SERVICES[2].image} 
            alt="Landscape Lighting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl text-white mb-8">Light Up Your Night</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Elegant LED lighting that enhances beauty, safety, and security. 
              Custom designs for every home in Central Louisiana.
            </p>
            <Link to="/landscape-lighting" className="bg-water-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-deep-canal transition-all shadow-2xl shadow-water-blue/40">
              View Lighting Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 8. Service Area Mini - Animated sonar map */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">Serving All of Central Louisiana</h2>
              <p className="text-gray-600 text-lg mb-8">
                Based in Pineville and Alexandria, we provide expert services to the entire CENLA region. 
                If you're in our circle, we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {CITIES.map(city => (
                  <Link 
                    key={city.slug} 
                    to={`/service-area/${city.slug}`}
                    className="flex items-center gap-2 p-4 rounded-xl border border-gray-100 hover:border-water-blue hover:bg-cloud-white transition-all group"
                  >
                    <MapPin className="text-water-blue group-hover:scale-110 transition-transform" size={18} />
                    <span className="font-bold">{city.name}</span>
                  </Link>
                ))}
              </div>
              <Link to="/service-area" className="bg-midnight-navy text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
                Check Your Area
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-md aspect-square bg-cloud-white rounded-full flex items-center justify-center relative">
                {/* Sonar Pings */}
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute w-32 h-32 border-2 border-water-blue rounded-full"
                />
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                  className="absolute w-32 h-32 border-2 border-water-blue rounded-full"
                />
                <div className="relative z-10 bg-water-blue text-white p-6 rounded-full shadow-xl">
                  <MapPin size={48} />
                </div>
                <div className="absolute top-1/4 left-1/4 font-bold text-gray-400">Pineville</div>
                <div className="absolute bottom-1/3 right-1/4 font-bold text-gray-400">Alexandria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Drainage Mini - Flood solved visual */}
      <section className="py-24 bg-cloud-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20">
                <h2 className="text-4xl md:text-5xl mb-8">Stop the Flood. <span className="text-deep-canal">Protect Your Home.</span></h2>
                <p className="text-gray-600 text-lg mb-8">
                  Standing water is more than just a nuisance—it's a threat to your foundation. 
                  Our drainage solutions move water away fast, keeping your property dry and safe.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">!</div>
                    <span className="text-gray-700">Prevent foundation cracks & settling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">!</div>
                    <span className="text-gray-700">Eliminate mosquito breeding grounds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</div>
                    <span className="text-gray-700 font-bold">Custom French drains & catch basins</span>
                  </div>
                </div>
                <Link to="/drainage-installation" className="bg-water-blue text-white px-8 py-4 rounded-full font-bold hover:bg-deep-canal transition-all">
                  Fix My Drainage
                </Link>
              </div>
              <div className="bg-deep-canal relative min-h-[400px]">
                <img 
                  src={SERVICES[3].image} 
                  alt="Drainage Solution" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-24 bg-water-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of happy homeowners in Central Louisiana. 
            Get your free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact-us" className="bg-white text-water-blue px-10 py-5 rounded-full font-bold text-xl hover:bg-midnight-navy hover:text-white transition-all shadow-2xl">
              Get a Free Quote
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-deep-canal text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-midnight-navy transition-all flex items-center justify-center gap-3">
              <Phone /> {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
