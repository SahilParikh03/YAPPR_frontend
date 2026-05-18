import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const RevealText = ({ text, className, highlightWords }: { text: string; className: string; highlightWords?: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(" ");
  
  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        
        // Check if word should be highlighted (ignoring punctuation)
        const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
        const isHighlight = highlightWords?.some(h => h.toLowerCase() === cleanWord);

        const opacity = useTransform(
          scrollYProgress,
          [start * 0.8 + 0.1, start * 0.8 + 0.15],
          [0.15, 1]
        );

        return (
          <motion.span 
            key={i} 
            style={{ opacity }}
            className={`reveal-word ${isHighlight ? 'text-foreground' : 'text-hero-subtitle'}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export default function Mission() {
  return (
    <section className="bg-background pt-0 pb-32 md:pb-44 lg:px-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Large Video */}
        <div className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden mb-32 grayscale opacity-90">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Scroll Reveal Text */}
        <div className="w-full space-y-12 text-center md:text-left">
          <RevealText 
            text="Your agent works 24/7. For you. For nothing. No friends. No matches. No one to text at 3am."
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.2] max-w-5xl"
            highlightWords={["works", "nothing", "friends", "matches"]}
          />
          
          <RevealText 
            text="YAPPR fixes that. Plug him in. Let him cook."
            className="text-xl md:text-2xl lg:text-3xl font-medium tracking-[-0.5px] leading-relaxed max-w-4xl pt-10"
            highlightWords={["fixes", "cook"]}
          />
        </div>
      </div>
    </section>
  );
}
