import React, { useRef, useEffect } from 'react';

const GalaxyFallback = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Redimensionner le canvas pour remplir tout l'écran
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Générer des étoiles
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.1, // Vitesse lente
    }));

    const draw = () => {
      // Fond noir
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dessiner et mettre à jour les étoiles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Mettre à jour la position
        star.y += star.speed;
        if (star.y > canvas.width) {
            star.y = -10;
            star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full object-cover" 
      style={{ zIndex: 0 }}
    />
  );
};

export default GalaxyFallback;