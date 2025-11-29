import React, { useState } from 'react';
import { Send, MapPin, Mail, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Create<br />Something Iconic.</h2>
              <p className="text-slate-400 text-lg mb-12">
                Available for freelance projects and full-time opportunities. If you have an idea, I have the tools to make it visual.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email Me</h4>
                      <a href="mailto:hello@prabh.design" className="text-slate-400 hover:text-white transition-colors">hello@prabh.design</a>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-violet-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-slate-400">New Westminster, BC (Remote Friendly)</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-slate-600 text-sm">Preferred Tech Stack: Adobe Creative Suite, Figma, Webflow.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-800/30 rounded-2xl p-6 md:p-8 border border-white/5">
             {submitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center p-8">
                 <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                   <Send size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                 <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                 <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-cyan-400 hover:underline">Send another message</button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input type="text" id="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input type="email" id="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea id="message" required rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <Send size={18} /></>}
                  </button>
               </form>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;