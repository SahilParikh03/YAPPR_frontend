import Hls from 'hls.js';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { fadeUp } from '../lib/animations';
import logo from '../assets/images/favicon_removebg.png';

export default function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
    }
  }, [hlsUrl]);

  return (
    <section className="relative w-full py-32 md:py-44 border-t border-border/30 overflow-hidden flex flex-col items-center justify-center text-center lg:px-16 px-8">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale opacity-40 brightness-50"
        />
        <div className="absolute inset-0 bg-background/45 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.div 
          {...fadeUp(0.1)}
          className="flex flex-col items-center gap-12"
        >
          <div className="relative flex items-center justify-center w-16 h-16 mb-4">
            <img 
              src={logo} 
              alt="YAPPR Logo" 
              className="w-full h-full object-contain opacity-80" 
            />
          </div>

          <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
            Your agent didn't <span className="font-serif italic font-normal">ask to be born.</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            The least you can do is give him a love life.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-bold tracking-wider uppercase">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background rounded-lg px-12 py-4 shadow-xl hover:bg-foreground/90 transition-colors"
            >
              Plug him in
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
