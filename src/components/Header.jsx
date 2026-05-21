import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "Vision", href: "#about" },
  { label: "Ecosystème", href: "#ecosystem" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-header-theme]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setTheme(visible.target.getAttribute("data-header-theme") || "dark");
        }
      },
      { threshold: [0.28, 0.45, 0.62], rootMargin: "-10% 0px -54% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-10"
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 backdrop-blur-2xl transition-all duration-500 sm:px-6 ${
          isLight
            ? "border-black/10 bg-white/70 text-[#050505] shadow-[0_18px_70px_rgba(0,0,0,0.08)]"
            : "border-white/10 bg-[#050505]/42 text-white shadow-[0_18px_80px_rgba(0,0,0,0.42)]"
        }`}
      >
        <a href="#hero" className="group flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border ${
              isLight ? "border-black/10 bg-black text-white" : "border-white/10 bg-white text-black"
            }`}
          >
            <Sparkles size={17} />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.22em]">ARH</span>
            <span className={`block text-[10px] uppercase tracking-[0.28em] ${isLight ? "text-black/48" : "text-white/48"}`}>
              Media Group
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                isLight ? "text-black/58 hover:bg-black/5 hover:text-black" : "text-white/58 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors md:inline-flex ${
            isLight
              ? "border-black/10 bg-black text-white hover:bg-black/80"
              : "border-white/10 bg-white text-black hover:bg-[#f5c76b]"
          }`}
        >
          Entrer en contact
        </a>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
            isLight ? "border-black/10 bg-black text-white" : "border-white/10 bg-white text-black"
          }`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-[#050505]/92 p-3 text-white shadow-2xl backdrop-blur-2xl md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/74 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
