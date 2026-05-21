import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection - Section principale ultra-premium cinématique
 * Animations Framer Motion et glassmorphism
 */
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  // Suivi de la position de la souris pour l'effet magnétique du bouton
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Effet magnétique du bouton CTA
  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(
      mousePosition.x - buttonCenterX,
      mousePosition.y - buttonCenterY
    );

    const maxDistance = 150;
    if (distance < maxDistance) {
      const angle = Math.atan2(
        mousePosition.y - buttonCenterY,
        mousePosition.x - buttonCenterX
      );
      const force = (1 - distance / maxDistance) * 15;
      const x = Math.cos(angle) * force;
      const y = Math.sin(angle) * force;

      setButtonPosition({ x, y });
    } else {
      setButtonPosition({ x: 0, y: 0 });
    }
  }, [mousePosition]);

  // Découpage du titre en mots pour animation staggered
  const titleWords = 'Façonner l\'Avenir de l\'Expérience Digitale'.split(' ');

  // Découpage du sous-titre en mots pour animation progressive
  const subtitleWords =
    'ARH MEDIA Group. La convergence parfaite entre marketing digital, tourisme premium et hébergement nouvelle génération.'.split(
      ' '
    );

  // Variantes d'animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const heroTitle = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const heroWord = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const ctaButton = {
    rest: {
      scale: 1,
      boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* ============================================================
          CALQUE 1 (z-0) : Arrière-plan dégradé subtil
          ============================================================ */}
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />

      {/* ============================================================
          CALQUE 2 (z-10) : Overlay gradient radial subtil
          Assure la lisibilité du texte
          ============================================================ */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none bg-gradient-radial from-transparent via-[#050505]/20 to-[#050505]" />

      {/* ============================================================
          CALQUE 3 (z-20) : Contenu principal avec animations
          ============================================================ */}
      <motion.div
        className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Titre principal avec animation mot par mot */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight drop-shadow-[0_0_30px_rgba(0,217,255,0.3)]"
          variants={heroTitle}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block mr-3 md:mr-4"
              variants={heroWord}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sous-titre avec glassmorphism subtil */}
        <motion.div
          className="mt-8 md:mt-10 max-w-2xl mx-auto"
          variants={fadeInUp}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-8 py-6 shadow-lg">
            {subtitleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.03,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Bouton CTA avec glassmorphism et effet magnétique */}
        <motion.button
          ref={buttonRef}
          className="mt-10 md:mt-12 px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-white text-base md:text-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-glow transition-all duration-300 cursor-pointer relative overflow-hidden group"
          variants={ctaButton}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          animate={{
            x: buttonPosition.x,
            y: buttonPosition.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 15,
            mass: 0.5,
          }}
        >
          {/* Glow background effect au hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

          {/* Texte du bouton */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            Explorer l&apos;Écosystème
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Indicateur de scroll subtil */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Scroll
            </span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;