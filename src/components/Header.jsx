import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '../animations/variants';

/**
 * Header - Composant sticky ultra-premium avec glassmorphism
 * Navigation magnétique, animations fluides et design next-generation
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('accueil');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navLinksRef = useRef({});

  // Navigation links configuration
  const navLinks = [
    { id: 'accueil', label: 'Accueil', href: '#home' },
    { id: 'ecosystem', label: "L'Écosystème", href: '#ecosystem' },
    { id: 'about', label: 'À Propos', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Détection du scroll pour ajuster le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Suivi de la position de la souris pour effets magnétiques
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Gestion du clic sur les liens de navigation
  const handleNavClick = (id) => {
    setActiveLink(id);
  };

  // Composant NavLink avec effet magnétique et underline animée
  const NavLink = ({ id, label, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    const linkRef = useRef(null);
    const [underlineWidth, setUnderlineWidth] = useState(0);

    useEffect(() => {
      if (isHovered && linkRef.current) {
        const width = linkRef.current.offsetWidth;
        setUnderlineWidth(width);
      } else {
        setUnderlineWidth(0);
      }
    }, [isHovered]);

    return (
      <motion.a
        ref={linkRef}
        href={href}
        className="relative text-sm md:text-base font-medium text-gray-300 transition-colors duration-300 hover:text-white cursor-pointer"
        onClick={() => handleNavClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {label}

        {/* Underline animée au hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? underlineWidth : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />

        {/* Indicateur d'état actif */}
        {activeLink === id && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400"
            layoutId="activeLink"
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.a>
    );
  };

  // Animation du header au chargement
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Animation des éléments du header
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6 + index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-2xl border-b border-white/5 shadow-lg'
          : 'bg-black/10 backdrop-blur-xl border-b border-white/5'
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo (Gauche) */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo placeholder - À remplacer par une image */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-black text-lg">A</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-black text-sm leading-tight">
                ARH
              </span>
              <span className="text-gray-400 text-xs leading-tight">
                MEDIA GROUP
              </span>
            </div>
          </motion.div>

          {/* Navigation (Centre) */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                id={link.id}
                label={link.label}
                href={link.href}
              />
            ))}
          </motion.nav>

          {/* CTA Button (Droite) */}
          <motion.button
            className="px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-white text-sm md:text-base bg-white/15 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-glow transition-all duration-300 hover:bg-white/25 hover:border-white/40 relative overflow-hidden group"
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow background effect au hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            {/* Texte du bouton */}
            <span className="relative z-10">Démarrer un Projet</span>
          </motion.button>

          {/* Menu mobile (Hamburger) - À implémenter si besoin */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Ligne de glow subtile au bas du header */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        animate={{
          opacity: isScrolled ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.header>
  );
};

export default Header;