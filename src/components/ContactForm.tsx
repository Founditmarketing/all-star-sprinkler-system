import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Upload, CheckCircle2, Droplets } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function ContactForm({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("bg-white p-8 rounded-3xl shadow-2xl border border-gray-100", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="(318) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Service Needed</label>
          <select 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all bg-white"
          >
            <option value="">Select a Service</option>
            {SERVICES.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Property Address</label>
          <input 
            required
            type="text" 
            placeholder="123 Main St, Alexandria, LA"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Property Type</label>
          <div className="flex gap-4">
            <label className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-cloud-white transition-colors has-[:checked]:bg-water-blue has-[:checked]:text-white has-[:checked]:border-water-blue">
              <input type="radio" name="type" value="residential" className="hidden" defaultChecked />
              Residential
            </label>
            <label className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-cloud-white transition-colors has-[:checked]:bg-water-blue has-[:checked]:text-white has-[:checked]:border-water-blue">
              <input type="radio" name="type" value="commercial" className="hidden" />
              Commercial
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Best Time to Call</label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all bg-white">
            <option>Morning (8am - 12pm)</option>
            <option>Afternoon (12pm - 5pm)</option>
            <option>Evening (After 5pm)</option>
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Upload Photos (Optional)</label>
          <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-water-blue transition-colors cursor-pointer group">
            <input 
              type="file" 
              multiple 
              className="absolute inset-0 opacity-0 cursor-pointer" 
              onChange={(e) => setFiles(e.target.files)}
            />
            <Upload className="mx-auto text-gray-400 group-hover:text-water-blue mb-2" size={32} />
            <p className="text-sm text-gray-500">
              {files ? `${files.length} file(s) selected` : "Drag and drop photos of your yard or issue"}
            </p>
          </div>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold text-midnight-navy uppercase tracking-wider">Message / Details</label>
          <textarea 
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-water-blue focus:ring-2 focus:ring-water-blue/20 outline-none transition-all"
          ></textarea>
        </div>
      </div>

      <button 
        disabled={isSubmitting}
        className="w-full mt-8 bg-water-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-deep-canal transition-all transform hover:scale-[1.02] shadow-xl shadow-water-blue/30 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <Droplets size={24} />
          </motion.div>
        ) : (
          <>
            <Send size={20} /> Get My Free Quote
          </>
        )}
      </button>
      
      <p className="text-center text-xs text-gray-400 mt-4">
        By submitting, you agree to our privacy policy. We'll contact you within 24 hours.
      </p>
    </form>
  );
}
