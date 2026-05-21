import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import MagneticButton from "../components/MagneticButton";

const Footer = () => {
  return (
    <footer
      id="contact"
      data-header-theme="dark"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 lg:px-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-[-24rem] right-[-10rem] h-[38rem] w-[38rem] rounded-full bg-[#00d9ff]/12 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/44">Contact stratégique</p>
            <h2 className="mt-6 max-w-4xl text-balance text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-normal">
              Donnons à votre marque une présence impossible à ignorer.
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <MagneticButton href="mailto:contact@arhmedia.group">
              Démarrer un projet
              <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </div>

        <div className="mt-16 grid gap-4 border-y border-white/10 py-8 md:grid-cols-3">
          <a href="mailto:contact@arhmedia.group" className="flex items-center gap-4 rounded-2xl p-4 text-white/62 transition-colors hover:bg-white/7 hover:text-white">
            <Mail size={19} />
            contact@arhmedia.group
          </a>
          <a href="tel:+212000000000" className="flex items-center gap-4 rounded-2xl p-4 text-white/62 transition-colors hover:bg-white/7 hover:text-white">
            <Phone size={19} />
            +212 00 00 00 00
          </a>
          <div className="flex items-center gap-4 rounded-2xl p-4 text-white/62">
            <MapPin size={19} />
            Casablanca, Maroc
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/34 sm:flex-row">
          <p>© 2026 ARH MEDIA Group</p>
          <p>MediaOn / VisitMoroccoNow / HereHost</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
