import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // In a real app, send to backend. For now show success state.
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <footer id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-semibold">Bring Luxury Home</h3>
          <p className="mt-3 max-w-md text-white/70">
            Share your requirements and our design consultant will reach out with a personalized proposal.
          </p>
          <div className="mt-6 space-y-3 text-white/80">
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-300" /> +1 (555) 012-3456</div>
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-300" /> hello@primewood.co</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-300" /> 100 Luxury Blvd, Design City</div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-white/70">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Johnson"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-amber-300/40"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm text-white/70">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-amber-300/40"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-amber-300/40"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full rounded-xl bg-amber-400 px-6 py-3 font-medium text-slate-900 shadow-lg shadow-amber-400/20"
          >
            {sent ? 'Sent ✓' : 'Request a Quote'}
          </motion.button>
          <p className="mt-3 text-center text-xs text-white/50">We respond within 24 hours.</p>
        </motion.form>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Prime Wood Interiors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
