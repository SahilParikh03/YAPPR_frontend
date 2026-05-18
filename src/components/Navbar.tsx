import { Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/images/favicon_removebg.png';

export default function Navbar() {
  const navLinks = ["Home", "How It Works", "Philosophy", "Use Cases"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 lg:py-8 py-4 flex items-center justify-between pointer-events-none">
      <div className="flex items-center gap-12 pointer-events-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-8 h-8">
            <img 
              src={logo} 
              alt="YAPPR Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">YAPPR</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <div key={link} className="flex items-center gap-6">
              <a 
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`${i === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'} transition-colors font-medium text-sm`}
              >
                {link}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-muted-foreground/30 text-xs">•</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 pointer-events-auto">
        {[Twitter].map((Icon, i) => (
          <motion.a
            key={i}
            href="https://x.com/useYAPPR"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
