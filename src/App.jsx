import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="text-lg font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">Prime Wood</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#products" className="hover:text-white">Collection</a>
          <a href="#why" className="hover:text-white">Why Us</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-slate-900 shadow md:inline-block">Get Quote</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <Hero />
      <div id="why">
        <Products />
        <Features />
      </div>
      <Footer />
    </div>
  );
}
