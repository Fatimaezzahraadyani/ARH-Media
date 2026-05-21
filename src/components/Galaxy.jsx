import React, { useRef, useEffect, useState } from 'react';

/**
 * Composant Galaxy - Arrière-plan animé ultra-fluide basé sur Canvas
 * Génère un champ d'étoiles avec glow, scintillement, rotation et interactivité souris
 * Optimisé pour 60fps avec requestAnimationFrame
 */
const Galaxy = ({
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1,
  glowIntensity = 0.3,
  saturation = 0,
  hueShift = 140,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  starSpeed = 0.5,
  speed = 1,
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  /**
   * Classe Particle - Représente une étoile/particule
   */
  class Particle {
    constructor(x, y, canvas) {
      this.x = x;
      this.y = y;
      this.baseX = x;
      this.baseY = y;
      this.canvas = canvas;

      // Propriétés de mouvement
      this.vx = (Math.random() - 0.5) * 0.5 * starSpeed;
      this.vy = (Math.random() - 0.5) * 0.5 * starSpeed;

      // Propriétés visuelles
      this.size = Math.random() * 2 + 0.5;
      this.baseSize = this.size;
      this.opacity = Math.random() * 0.5 + 0.3;
      this.baseOpacity = this.opacity;

      // Propriétés d'animation
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.rotationAngle = Math.random() * Math.PI * 2;
      this.distance = Math.hypot(x - canvas.width / 2, y - canvas.height / 2);
      this.angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2);
    }

    update(time, centerX, centerY, canvasWidth, canvasHeight) {
      // Rotation orbitale autour du centre
      this.angle += (rotationSpeed * speed) / 10000;
      this.x = centerX + Math.cos(this.angle) * this.distance;
      this.y = centerY + Math.sin(this.angle) * this.distance;

      // Scintillement basé sur le temps
      this.twinklePhase += twinkleIntensity * 0.05;
      const twinkle = Math.sin(this.twinklePhase) * 0.5 + 0.5;
      this.opacity = this.baseOpacity * (0.5 + twinkle * 0.5);

      // Variation de taille avec scintillement
      this.size = this.baseSize * (0.8 + twinkle * 0.4);

      // Wrapping des bords
      if (this.x < 0) this.x = canvasWidth;
      if (this.x > canvasWidth) this.x = 0;
      if (this.y < 0) this.y = canvasHeight;
      if (this.y > canvasHeight) this.y = 0;
    }

    applyMouseRepulsion(mouseX, mouseY) {
      if (!mouseInteraction || !mouseRepulsion) return;

      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.hypot(dx, dy);
      const repulsionRadius = 150;

      if (distance < repulsionRadius) {
        const force = (1 - distance / repulsionRadius) * repulsionStrength;
        const angle = Math.atan2(dy, dx);

        this.x += Math.cos(angle) * force;
        this.y += Math.sin(angle) * force;

        // Augmentation de l'opacité au survol
        this.opacity = Math.min(1, this.opacity + 0.1);
      }
    }

    applyAutoCenter(centerX, centerY) {
      if (autoCenterRepulsion <= 0) return;

      const dx = this.x - centerX;
      const dy = this.y - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance > 50) {
        const force = (autoCenterRepulsion * 0.01) / (distance + 1);
        this.x -= (dx / distance) * force;
        this.y -= (dy / distance) * force;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.opacity;

      // Glow effect
      if (glowIntensity > 0) {
        const glowSize = this.size * (2 + glowIntensity * 3);
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          glowSize
        );

        const hue = hueShift;
        const saturationValue = saturation;
        const glowColor = `hsla(${hue}, ${saturationValue}%, 50%, ${glowIntensity * 0.3})`;

        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'hsla(0, 0%, 100%, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Particule principale
      ctx.fillStyle = `hsla(${hueShift}, ${saturation}%, 100%, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  /**
   * Initialisation du canvas et des particules
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Configuration du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Génération des particules
    const particleCount = Math.floor(100 * density);
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.4;
      const x = canvas.width / 2 + Math.cos(angle) * distance;
      const y = canvas.height / 2 + Math.sin(angle) * distance;

      particlesRef.current.push(new Particle(x, y, canvas));
    }

    /**
     * Boucle d'animation principale (requestAnimationFrame)
     */
    const animate = () => {
      timeRef.current += 1;

      // Effacer le canvas avec un léger trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Mise à jour et rendu des particules
      particlesRef.current.forEach((particle) => {
        particle.update(timeRef.current, centerX, centerY, canvas.width, canvas.height);

        if (mouseRef.current.isActive) {
          particle.applyMouseRepulsion(mouseRef.current.x, mouseRef.current.y);
        }

        particle.applyAutoCenter(centerX, centerY);
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Gestion du mouvement de la souris
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    density,
    glowIntensity,
    saturation,
    hueShift,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    starSpeed,
    speed,
    mouseInteraction,
    mouseRepulsion,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        display: 'block',
        background: '#050505',
      }}
    />
  );
};

export default Galaxy;