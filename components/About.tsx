import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Text Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              Beyond the Pixels
            </motion.h2>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-4 text-slate-400"
            >
              <p>
                Hi, I'm <span className="text-white font-semibold">Prabh</span>. I currently work as a <span className="text-cyan-400">Graphics Assistant</span> at the New Westminster Public Library. My role sits at the intersection of creativity and communication.
              </p>
              <p>
                I specialize in maintaining brand identity across diverse mediums—from digital signage to print campaigns. I believe that good design is not just about aesthetics; it's about solving communication problems efficiently and elegantly.
              </p>
              <p>
                Whether I'm updating web content, analyzing campaign engagement, or designing a new layout in InDesign, I bring a meticulous eye for detail and a collaborative spirit to every project.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {['Clean Layouts', 'Brand Identity', 'Analytics Aware', 'Collaborative'].map((strength, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-cyan-500" />
                  <span className="text-sm font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Visualization */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               <User className="text-cyan-500" size={20}/> Technical Arsenal
             </h3>
             <div className="space-y-6">
                {SKILLS_DATA.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full ${
                          skill.category === 'Software' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 
                          skill.category === 'Design' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' :
                          'bg-slate-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;