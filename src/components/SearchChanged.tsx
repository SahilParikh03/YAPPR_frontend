import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';

export default function SearchChanged() {
  const platforms = [
    {
      name: "ChatGPT",
      description: "Generative AI that redefined conversation.",
      icon: "https://picsum.photos/seed/chatgpt/200/200?grayscale"
    },
    {
      name: "Perplexity",
      description: "Information discovery at the speed of thought.",
      icon: "https://picsum.photos/seed/perplexity/200/200?grayscale"
    },
    {
      name: "Google AI",
      description: "Search, evolved for the next generation of knowledge.",
      icon: "https://picsum.photos/seed/googleai/200/200?grayscale"
    }
  ];

  return (
    <section className="bg-background lg:px-16 lg:pb-12 px-8 pt-52 md:pt-64 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-t border-white/20 pt-8 mb-24">
          <div className="flex-1">
            <motion.h2 
              {...fadeUp(0.1)}
              className="text-5xl md:text-7xl lg:text-2xl font-medium tracking-tight mb-3"
            >
              Search has <span className="font-serif italic font-normal">changed.</span>
            </motion.h2>
            
            <motion.p 
              {...fadeUp(0.2)}
              className="text-white/40 text-sm leading-relaxed max-w-xs"
            >
              Content community and insight flow together with less noise and more meaning.
            </motion.p>
          </div>

          <div className="flex-1 flex gap-4 w-full">
             <div className="liquid-glass flex-1 aspect-video rounded-xl flex flex-col items-center justify-center border border-white/10">
                <div className="w-8 h-8 bg-white rounded-full mb-2 opacity-80" />
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">Curated Feed</span>
             </div>
             <div className="liquid-glass flex-1 aspect-video rounded-xl flex flex-col items-center justify-center border border-white/10">
                <div className="w-8 h-8 border border-white/40 rounded-lg mb-2 opacity-80" />
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">Writer Tools</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-24">
          {platforms.map((platform, i) => (
            <motion.div 
              key={platform.name}
              {...fadeUp(0.3 + i * 0.1)}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 mb-8 flex items-center justify-center grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
                {platform.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          {...fadeUp(0.6)}
          className="text-muted-foreground/60 text-sm tracking-wide lowercase"
        >
          If you don't answer the questions, someone else will.
        </motion.p>
      </div>
    </section>
  );
}
