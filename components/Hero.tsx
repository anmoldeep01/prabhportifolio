import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, PenTool, Layout as LayoutIcon, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            AVAILABLE FOR WORK
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
            Crafting Visual <br />
            <span className="text-glow text-cyan-500">Experiences.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            I am a Graphic Designer & Graphics Assistant specializing in branding, layout design, and digital content. I turn complex ideas into clean, impactful visuals.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="group relative px-8 py-3 bg-white text-slate-900 font-bold rounded-full overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Portfolio</span>
              <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-700 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center gap-2">
              Contact Me <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
             <div className="flex items-center gap-2">
               <Layers size={18} className="text-cyan-500" /> Branding
             </div>
             <div className="flex items-center gap-2">
               <LayoutIcon size={18} className="text-violet-500" /> Layout
             </div>
             <div className="flex items-center gap-2">
               <Monitor size={18} className="text-blue-500" /> UI Graphics
             </div>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-white/10 glass-panel overflow-hidden p-6 flex items-center justify-center">
                 {/* Floating Cards Simulation */}
                 <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-48 h-64 bg-slate-800 rounded-lg border border-slate-700 shadow-2xl z-10 overflow-hidden"
                 >
                    <img src="https://picsum.photos/seed/poster/400/600" className="w-full h-full object-cover opacity-80" alt="Poster" />
                 </motion.div>
                 
                 <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 left-10 w-56 h-40 bg-slate-800 rounded-lg border border-slate-700 shadow-2xl z-20 overflow-hidden"
                 >
                    <img src="https://picsum.photos/seed/ui/600/400" className="w-full h-full object-cover opacity-80" alt="UI" />
                 </motion.div>

                 <div className="z-30 text-center">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-4">
                        <PenTool className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Design &<br/>Innovation</h3>
                 </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
