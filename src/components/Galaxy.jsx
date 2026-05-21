import { useEffect, useRef } from "react";

const Galaxy = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameId;
    let width = 0;
    let height = 0;
    let stars = [];
    let pointer = { x: 0, y: 0 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      stars = Array.from({ length: Math.floor(width / 4) }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.85 + 0.15,
        radius: Math.random() * 1.4 + 0.25,
        speed: Math.random() * 0.18 + 0.04,
        phase: Math.random() * Math.PI * 2,
        hue: index % 7 === 0 ? 190 : index % 5 === 0 ? 315 : 45,
      }));
    };

    const onMove = (event) => {
      pointer = {
        x: (event.clientX / width - 0.5) * 24,
        y: (event.clientY / height - 0.5) * 24,
      };
    };

    const drawNebula = (time) => {
      const cyan = context.createRadialGradient(
        width * 0.22 + pointer.x,
        height * 0.32 + pointer.y,
        0,
        width * 0.22,
        height * 0.32,
        width * 0.75
      );
      cyan.addColorStop(0, "rgba(0, 217, 255, 0.24)");
      cyan.addColorStop(0.36, "rgba(92, 51, 255, 0.12)");
      cyan.addColorStop(1, "rgba(5, 5, 5, 0)");

      const magenta = context.createRadialGradient(
        width * 0.78 - pointer.x,
        height * 0.18 - pointer.y,
        0,
        width * 0.78,
        height * 0.18,
        width * 0.62
      );
      magenta.addColorStop(0, "rgba(255, 43, 214, 0.2)");
      magenta.addColorStop(0.45, "rgba(245, 199, 107, 0.08)");
      magenta.addColorStop(1, "rgba(5, 5, 5, 0)");

      context.fillStyle = cyan;
      context.fillRect(0, 0, width, height);
      context.fillStyle = magenta;
      context.fillRect(0, 0, width, height);

      context.save();
      context.translate(width * 0.5, height * 0.5);
      context.rotate(Math.sin(time * 0.00008) * 0.04);
      context.strokeStyle = "rgba(255, 255, 255, 0.045)";
      context.lineWidth = 1;
      for (let i = 0; i < 5; i += 1) {
        context.beginPath();
        context.ellipse(0, 0, width * (0.18 + i * 0.08), height * (0.04 + i * 0.02), 0, 0, Math.PI * 2);
        context.stroke();
      }
      context.restore();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#050505";
      context.fillRect(0, 0, width, height);
      drawNebula(time);

      stars.forEach((star) => {
        const twinkle = 0.45 + Math.sin(time * 0.0015 + star.phase) * 0.35;
        const x = star.x + pointer.x * star.z;
        const y = star.y + pointer.y * star.z;

        context.beginPath();
        context.fillStyle = `hsla(${star.hue}, 100%, 82%, ${twinkle})`;
        context.arc(x, y, star.radius * star.z, 0, Math.PI * 2);
        context.fill();

        star.y += star.speed * star.z;
        if (star.y > height + 10) {
          star.y = -10;
          star.x = Math.random() * width;
        }
      });

      frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
};

export default Galaxy;
