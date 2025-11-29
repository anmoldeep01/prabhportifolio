import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
       <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Professional Journey</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-cyan-500 group-hover:bg-cyan-900/30 text-slate-500 group-hover:text-cyan-400 transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_rgba(15,23,42,1)] z-10">
                  <Briefcase size={18} />
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded border border-cyan-500/20">{job.period}</span>
                  </div>
                  <div className="text-sm text-slate-400 font-medium mb-4">{job.role} • {job.type}</div>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-sm text-slate-400 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Experience;
