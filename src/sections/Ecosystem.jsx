import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe2, Hotel, Server, Sparkles } from "lucide-react";
import RevealText from "../components/RevealText";

const brands = [
  {
    name: "MediaOn",
    role: "Agence de marketing digital",
    accent: "#ff2bd6",
    second: "#8b5cf6",
    icon: Globe2,
    copy: "Performance marketing, social intelligence et direction créative pour des marques qui veulent dominer leur catégorie.",
    metric: "+360",
    label: "campagnes orchestrées",
  },
  {
    name: "VisitMoroccoNow",
    role: "Plateforme de tourisme premium",
    accent: "#ff8a2a",
    second: "#f5c76b",
    icon: Hotel,
    copy: "Une vitrine cinématique du Maroc, pensée pour inspirer les voyageurs exigeants et valoriser les expériences d'exception.",
    metric: "12",
    label: "territoires narratifs",
  },
  {
    name: "HereHost",
    role: "Hébergement web next-gen",
    accent: "#00d9ff",
    second: "#2563eb",
    icon: Server,
    copy: "Infrastructure rapide, sécurité moderne et accompagnement technique pour faire grandir les présences digitales sans friction.",
    metric: "99.9%",
    label: "ambition de disponibilité",
  },
];

const EcosystemCard = ({ brand, index }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-22, 22]);
  const Icon = brand.icon;

  const onMove = (event) => {
    const bounds = ref.current.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.82, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY }}
      className="preserve-3d relative min-h-[31rem] overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.055] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-9"
    >
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          background: `radial-gradient(circle, ${brand.accent}66, transparent 62%)`,
        }}
        className="absolute -right-28 -top-28 h-80 w-80 rounded-full blur-2xl"
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `linear-gradient(145deg, ${brand.accent}16, transparent 42%, ${brand.second}18)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/14"
            style={{ background: `${brand.accent}18`, color: brand.accent }}
          >
            <Icon size={28} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/38">0{index + 1}</span>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: brand.accent }}>
            {brand.role}
          </p>
          <h3 className="mt-4 text-[clamp(2.4rem,4.8vw,4.8rem)] font-black leading-none tracking-normal text-white">
            {brand.name}
          </h3>
          <p className="mt-7 max-w-md text-base leading-8 text-white/60">{brand.copy}</p>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-8">
          <div>
            <div className="text-4xl font-black tracking-normal text-white">{brand.metric}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">{brand.label}</div>
          </div>
          <div className="h-12 w-12 rounded-full border border-white/12 bg-white/8" />
        </div>
      </div>
    </motion.article>
  );
};

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      data-header-theme="dark"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="absolute inset-0 bg-grid opacity-45" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#6d28d9]/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/58 backdrop-blur-xl">
            <Sparkles size={15} />
            Ecosystème ARH
          </div>
          <RevealText
            text="Trois marques, une même exigence : créer des expériences digitales qui restent dans la mémoire."
            className="block text-balance text-[clamp(2.6rem,7vw,7.6rem)] font-black leading-[0.94] tracking-normal"
          />
        </div>

        <div className="perspective-1200 grid gap-6 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <EcosystemCard key={brand.name} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
