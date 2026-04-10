import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Wrench, Lightbulb, Waves } from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  Droplets,
  Wrench,
  Lightbulb,
  Waves
};

export default function ServiceCard({ service, index }: { service: Service; index: number; key?: string | number }) {
  const Icon = iconMap[service.icon] || Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-water-blue/30"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 bg-water-blue text-white p-3 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
          <Icon size={24} />
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-water-blue transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {service.description}
        </p>
        <Link 
          to={`/${service.slug}`}
          className="inline-flex items-center gap-2 font-bold text-water-blue group/link"
        >
          Learn More 
          <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
