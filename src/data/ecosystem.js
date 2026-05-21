/**
 * ARH MEDIA Group Ecosystem Data
 * Configuration centralisée des 3 filiales avec leurs identités visuelles et métadonnées
 */

export const ECOSYSTEM = {
  mediaOn: {
    id: 'mediaOn',
    name: 'mediaOn',
    fullName: 'mediaOn Digital Marketing',
    description: 'Stratégies de marketing digital innovantes et campagnes haute performance',
    tagline: 'Digital Marketing Excellence',
    accent: {
      primary: '#00D9FF', // Cyan vibrant
      secondary: '#0099CC', // Bleu cyan
      glow: 'rgba(0, 217, 255, 0.3)',
      dark: '#001A33',
    },
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    icon: '📡',
    services: [
      'SEO & SEM',
      'Social Media Marketing',
      'Content Strategy',
      'Performance Analytics',
      'Brand Positioning',
    ],
    color: {
      bg: 'bg-cyan-950/20',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      hover: 'hover:bg-cyan-500/10',
    },
  },
  visitmorocconow: {
    id: 'visitmorocconow',
    name: 'Visit Morocco Now',
    fullName: 'Visit Morocco Now Tourism',
    description: 'Expériences touristiques immersives et marketing destination premium',
    tagline: 'Tourism & Destination Marketing',
    accent: {
      primary: '#FF6B35', // Orange vibrant
      secondary: '#FF8C42', // Orange clair
      glow: 'rgba(255, 107, 53, 0.3)',
      dark: '#331A0F',
    },
    gradient: 'from-orange-500/20 via-red-500/10 to-transparent',
    icon: '🌍',
    services: [
      'Destination Marketing',
      'Experience Design',
      'Tourism Analytics',
      'Cultural Storytelling',
      'Travel Tech Solutions',
    ],
    color: {
      bg: 'bg-orange-950/20',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      hover: 'hover:bg-orange-500/10',
    },
  },
  herehost: {
    id: 'herehost',
    name: 'HereHost',
    fullName: 'HereHost Next-Gen Hosting',
    description: 'Infrastructure cloud et hosting haute performance pour l\'ère numérique',
    tagline: 'Next-Generation Hosting',
    accent: {
      primary: '#00FF88', // Vert lime vibrant
      secondary: '#00DD66', // Vert émeraude
      glow: 'rgba(0, 255, 136, 0.3)',
      dark: '#001A0F',
    },
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    icon: '⚡',
    services: [
      'Cloud Infrastructure',
      'Managed Hosting',
      'CDN & Performance',
      'Security & Compliance',
      'DevOps Solutions',
    ],
    color: {
      bg: 'bg-green-950/20',
      border: 'border-green-500/30',
      text: 'text-green-400',
      hover: 'hover:bg-green-500/10',
    },
  },
};

/**
 * Utilitaires pour accéder aux données de l'écosystème
 */
export const getSubsidiary = (id) => ECOSYSTEM[id];

export const getAllSubsidiaries = () => Object.values(ECOSYSTEM);

export const getSubsidiaryAccent = (id) => ECOSYSTEM[id]?.accent || ECOSYSTEM.mediaOn.accent;

export const getSubsidiaryGradient = (id) => ECOSYSTEM[id]?.gradient || ECOSYSTEM.mediaOn.gradient;

export const getSubsidiaryColor = (id) => ECOSYSTEM[id]?.color || ECOSYSTEM.mediaOn.color;