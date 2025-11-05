import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Truck, Hammer } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '10-Year Warranty',
    desc: 'Peace of mind with industry-leading coverage on structure and finish.'
  },
  {
    icon: Hammer,
    title: 'Handcrafted',
    desc: 'Each piece is crafted by master artisans for unmatched quality.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Wood',
    desc: 'Responsibly sourced materials with eco-conscious finishes.'
  },
  {
    icon: Truck,
    title: 'White-Glove Delivery',
    desc: 'Careful delivery and professional installation at your convenience.'
  }
];

export default function Features() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/60">
            We blend timeless craftsmanship with modern technology to bring your dream interiors to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-amber-400/20 p-3 text-amber-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
