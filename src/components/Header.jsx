import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Header - Immersif Volumétrique ultra-cinématique
 * Glow dynamique, animations de particules et parallaxe volumétrique
 */
const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowColor, setGlowColor] = useState({ r: 0, g: 217, b: 255 });
  const headerRef = useRef(null);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: "L'Écosystème", path: '#ecosystem' },
    { name: 'À Propos', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  // Suivi de la position de la souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Variation dynamique de la couleur du glow en fonction de la position
      const hue = (e.clientX / window.innerWidth) * 360;
      const saturation = 100;
      const lightness = 50;

      // Conversion HSL vers RGB pour le glow
      const c = (1 - Math.abs(2 * lightness / 100 - 1)) * saturation / 100;
      const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
      const m = lightness / 100 - c / 2;

      let r = 0, g = 0, b = 0;
      if (hue >= 0 && hue < 60) {
        r = c; g = x; b = 0;
      } else if (hue >= 60 && hue < 120) {
        r = x; g = c; b = 0;
      } else if (hue >= 120 && hue < 180) {
        r = 0; g = c; b = x;
      } else if (hue >= 180 && hue < 240) {
        r = 0; g = x; b = c;
      } else if (hue >= 240 && hue < 300) {
        r = x; g = 0; b = c;
      } else {
        r = c; g = 0; b = x;
      }

      setGlowColor({
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation d'entrée cinématique du header (reveal de masque)
  const headerVariants = {
    hidden: {
      opacity: 0,
      clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
    },
    visible: {
      opacity: 1,
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Animation du logo avec effet de particules
  const logoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.8,
      },
    },
  };

  const logoLetterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  // Composant NavLink avec parallaxe volumétrique
  const VolumetricNavLink = ({ name, path, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const linkRef = useRef(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [volumetricPos, setVolumetricPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
      if (isHovered && linkRef.current) {
        const width = linkRef.current.offsetWidth;
        setUnderlineWidth(width);
      } else {
        setUnderlineWidth(0);
      }
    }, [isHovered]);

    const handleMouseMove = (e) => {
      if (!isHovered || !linkRef.current) return;

      const rect = linkRef.current.getBoundingClientRect();
      const linkCenterX = rect.left + rect.width / 2;
      const linkCenterY = rect.top + rect.height / 2;

      const offsetX = e.clientX - linkCenterX;
      const offsetY = e.clientY - linkCenterY;

      setVolumetricPos({ x: offsetX * 0.3, y: offsetY * 0.3 });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setVolumetricPos({ x: 0, y: 0 });
    };

    return (
      <motion.a
        ref={linkRef}
        href={path}
        className="relative text-white text-sm font-medium tracking-tight transition-colors duration-300 hover:text-white/80 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
      >
        {/* Lumière volumétrique conique derrière le lien */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: `conic-gradient(from 180deg at ${50 + volumetricPos.x * 2}% ${50 + volumetricPos.y * 2}%, 
              rgba(0, 217, 255, 0.3) 0deg, 
              rgba(0, 217, 255, 0) 180deg)`,
            filter: 'blur(20px)',
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Texte du lien */}
        <span className="relative z-10">{name}</span>

        {/* Underline animée */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"
          initial={{ width: 0, x: '-50%' }}
          animate={{
            width: isHovered ? underlineWidth : 0,
            x: isHovered ? '-50%' : '-50%',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.a>
    );
  };

  // Composant CTA Button avec glow volumétrique
  const VolumetricCTAButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);
    const [buttonGlowPos, setButtonGlowPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      if (!isHovered || !buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const offsetX = e.clientX - buttonCenterX;
      const offsetY = e.clientY - buttonCenterY;

      setButtonGlowPos({ x: offsetX * 0.4, y: offsetY * 0.4 });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setButtonGlowPos({ x: 0, y: 0 });
    };

    return (
      <motion.button
        ref={buttonRef}
        className="relative px-6 py-2.5 rounded-full border border-white/15 text-white text-sm font-semibold tracking-tight overflow-hidden group transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderColor: 'rgba(255, 255, 255, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        {/* Glow volumétrique conique au hover */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg at ${50 + buttonGlowPos.x * 2}% ${50 + buttonGlowPos.y * 2}%, 
              rgba(0, 217, 255, 0.4) 0deg, 
              rgba(0, 217, 255, 0) 180deg)`,
            filter: 'blur(25px)',
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            opacity: isHovered ? 0.9 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Texte du bouton */}
        <span className="relative z-10">Démarrer un Projet</span>
      </motion.button>
    );
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/5 py-3 px-10 flex items-center justify-between"
      style={{ zIndex: 50 }}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glow dynamique derrière le header */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, 0.15) 0%, 
            rgba(${glowColor.r}, ${glowColor.g}, ${glowColor.b}, 0) 50%)`,
          filter: 'blur(40px)',
          opacity: 0.6,
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Logo avec animation de particules */}
      <motion.div
        className="font-extrabold text-xl tracking-tighter text-white relative z-10"
        variants={logoContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {'ARH MEDIA'.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={logoLetterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Navigation (Centre) */}
      <nav className="flex items-center gap-8 relative z-10">
        {navLinks.map((link, index) => (
          <VolumetricNavLink
            key={index}
            name={link.name}
            path={link.path}
            index={index}
          />
        ))}
      </nav>

      {/* CTA Button (Droite) */}
      <div className="relative z-10">
        <VolumetricCTAButton />
      </div>
    </motion.header>
  );
};

export default Header;  