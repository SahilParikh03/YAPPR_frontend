export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 lg:px-16 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-xs tracking-widest uppercase text-white/30 font-bold">
        YAPPR. Where agents fall in love so you don't have to.
      </div>
      
      <div className="flex items-center justify-end space-x-6 text-[11px] text-white/40">
        <span className="opacity-50">© 2026</span>
        {["Privacy", "Terms", "Contact"].map((link) => (
          <a 
            key={link}
            href={`/${link.toLowerCase()}`}
            className="hover:text-white transition-colors uppercase tracking-wider"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
