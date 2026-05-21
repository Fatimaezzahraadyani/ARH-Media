import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Megaphone, Orbit, Sparkles } from "lucide-react";
import { useRef } from "react";
import RevealText from "../components/RevealText";
import MagneticButton from "../components/MagneticButton";

const pillars = [
  { icon: Megaphone, title: "Stratégie digitale", copy: "Des dispositifs d'acquisition, de marque et de conversion pensés comme des systèmes vivants." },
  { icon: Camera, title: "Production audiovisuelle", copy: "Films, formats sociaux et assets premium créés pour amplifier la perception et la confiance." },
  { icon: Orbit, title: "Ecosystèmes de croissance", copy: "Des plateformes et filiales qui connectent contenu, technologie et expérience client." },
];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section
      id="about"
      ref={ref}
      data-header-theme="light"
      className="relative overflow-hidden bg-[#f4f1ea] px-5 py-28 text-[#050505] sm:px-8 lg:px-10 lg:py-36"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-[-10%] top-16 h-[34rem] w-[34rem] rounded-full bg-[#f5c76b]/22 blur-3xl"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="sticky top-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black/58">
              <Sparkles size={15} />
              About / Expertise
            </div>
            <RevealText
              text="Une agence premium de marketing digital et de production audiovisuelle, propulsée par une équipe d'experts dédiés à l'excellence."
              className="block text-balance text-[clamp(2.45rem,6vw,6.75rem)] font-black leading-[0.95] tracking-normal"
            />
          </div>

          <div className="pt-2 lg:pt-32">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-18% 0px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-xl leading-9 text-black/62 sm:text-2xl"
            >
              Nous concevons des expériences où la stratégie rencontre la mise en scène. Chaque campagne, chaque vidéo, chaque interface est construite pour donner aux marques une présence nette, mémorable et mesurable.
            </motion.p>

            <div className="mt-12 grid gap-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.article
                    key={pillar.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-14% 0px" }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    className="grid gap-6 border-t border-black/10 py-8 sm:grid-cols-[4rem_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#050505] text-white">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-normal">{pillar.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-7 text-black/56">{pillar.copy}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-10">
              <MagneticButton href="#contact" variant="light">
                Construire ensemble
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
