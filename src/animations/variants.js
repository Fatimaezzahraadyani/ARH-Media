/**
 * Framer Motion Animation Variants
 * Bibliothèque centralisée de variantes d'animation réutilisables
 * Maintient la cohérence visuelle et réduit la duplication de code
 */

// ============================================================================
// CONTENEURS & ORCHESTRATION
// ============================================================================

export const staggerContainer = {
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

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
      duration: 0.5,
    },
  },
};

export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 1.2,
    },
  },
};

// ============================================================================
// ANIMATIONS D'ENTRÉE BASIQUES
// ============================================================================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInUp = {
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

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================================================
// ANIMATIONS D'ÉCHELLE
// ============================================================================

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const scaleInSmall = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// ANIMATIONS DE ROTATION
// ============================================================================

export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// ANIMATIONS DE TEXTE - REVEAL PAR MOT
// ============================================================================

export const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const letterReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// ANIMATIONS DE HOVER
// ============================================================================

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const hoverScaleLarge = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const hoverGlow = {
  rest: {
    boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)',
  },
  hover: {
    boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// ANIMATIONS DE BOUTON
// ============================================================================

export const buttonHover = {
  rest: {
    scale: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  hover: {
    scale: 1.02,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const buttonTap = {
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// ============================================================================
// ANIMATIONS DE PULSATION & GLOW
// ============================================================================

export const pulse = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

export const glowPulse = {
  hidden: {
    boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)',
  },
  visible: {
    boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)',
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// ANIMATIONS FLOTTANTES
// ============================================================================

export const float = {
  hidden: { y: 0 },
  visible: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatSlow = {
  hidden: { y: 0 },
  visible: {
    y: [-15, 15, -15],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// ANIMATIONS DE PARALLAXE
// ============================================================================

export const parallax = (offset = 50) => ({
  hidden: { y: 0 },
  visible: {
    y: offset,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
});

// ============================================================================
// ANIMATIONS D'APPARITION PROGRESSIVE
// ============================================================================

export const slideInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// ============================================================================
// ANIMATIONS DE BORDURE & ACCENT
// ============================================================================

export const borderGlow = {
  rest: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  hover: {
    borderColor: 'rgba(0, 217, 255, 0.5)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// ============================================================================
// ANIMATIONS COMBINÉES COMPLEXES
// ============================================================================

export const heroTitle = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

export const heroWord = {
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

export const ctaButton = {
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

// ============================================================================
// ANIMATIONS DE CHARGEMENT
// ============================================================================

export const shimmer = {
  hidden: { opacity: 0.5 },
  visible: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const skeleton = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// UTILITAIRES D'EXPORT
// ============================================================================

export const getVariant = (name) => {
  const variants = {
    staggerContainer,
    fadeIn,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    rotateIn,
    slideInUp,
    slideInDown,
    slideInLeft,
    slideInRight,
    heroTitle,
    heroWord,
    ctaButton,
  };
  return variants[name] || fadeIn;
};