import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-900/20 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[20rem] h-[20rem] bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass-panel shadow-2xl' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
            PRABH<span className="text-cyan-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold bg-white text-slate-900 rounded-full hover:bg-cyan-400 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-t border-slate-800"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-slate-300 hover:text-cyan-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-display text-white">Prabh</h3>
            <p className="text-slate-500 text-sm mt-1">Graphic Designer & Visual Creator</p>
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
             <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-xs font-semibold text-slate-400 border border-slate-700 rounded-full px-4 py-2 hover:bg-slate-800 transition-all">
              <Download size={14} />
              Download Résumé
            </button>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-slate-600">
          © {new Date().getFullYear()} Prabh. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;