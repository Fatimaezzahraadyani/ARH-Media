import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import Galaxy from "../components/Galaxy";
import MagneticButton from "../components/MagneticButton";

const title = "Façonner l'Avenir de l'Expérience Digitale";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.32], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.18]);

  return (
    <section
      id="hero"
      data-header-theme="dark"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <Galaxy />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,rgba(5,5,5,0.12),#050505_96%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#f4f1ea]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-[#f5c76b] shadow-[0_0_24px_rgba(245,199,107,0.9)]" />
          Groupe créatif indépendant
        </motion.div>

        <h1 className="max-w-6xl text-balance text-[clamp(3.5rem,11vw,10.5rem)] font-black leading-[0.88] tracking-normal">
          {title.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} className="inline-block overflow-hidden pr-[0.12em] align-bottom">
              <motion.span
                initial={{ y: "110%", rotate: 3 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 grid gap-7 lg:grid-cols-[minmax(0,0.78fr)_auto]"
        >
          <p className="max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            ARH MEDIA Group orchestre des marques digitales qui transforment l'attention en désir, l'image en influence et la technologie en avantage durable.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton href="#ecosystem">
              Explorer
              <ArrowDownRight size={18} />
            </MagneticButton>
            <a
              href="#about"
              className="inline-flex h-14 items-center gap-3 rounded-full border border-white/14 bg-white/7 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-colors hover:bg-white/12"
            >
              <Play size={16} fill="currentColor" />
              Notre vision
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
