import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    title: 'Solid Teak Door',
    price: 'from $420',
    image:
      'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?q=80&w=1400&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    title: 'King Size Bed',
    price: 'from $980',
    image:
      'https://images.unsplash.com/photo-1616596871250-12b7b68bb268?q=80&w=1400&auto=format&fit=crop',
    tag: 'Luxury',
  },
  {
    title: 'Modern Wardrobe',
    price: 'from $760',
    image:
      'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1400&auto=format&fit=crop',
    tag: 'New',
  },
  {
    title: 'Kitchen Accessories',
    price: 'from $120',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop',
    tag: 'Essentials',
  },
];

function ProductCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-3 backdrop-blur-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent" />
        <div className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
          {item.tag}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-white/60">{item.price}</p>
        </div>
        <div className="flex items-center gap-1 text-amber-300">
          <Star className="h-4 w-4 fill-amber-300" />
          <Star className="h-4 w-4 fill-amber-300" />
          <Star className="h-4 w-4 fill-amber-300" />
          <Star className="h-4 w-4 fill-amber-300" />
          <Star className="h-4 w-4" />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 w-full rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
      >
        View Details
      </motion.button>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative z-10 w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              Signature Collection
            </h2>
            <p className="mt-2 max-w-2xl text-white/60">
              Crafted from premium hardwoods with meticulous attention to detail. Built to last, designed to inspire.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            Customize Your Order
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.title} item={p} />)
          )}
        </div>
      </div>
    </section>
  );
}
