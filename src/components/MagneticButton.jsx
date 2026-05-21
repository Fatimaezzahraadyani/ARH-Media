import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children, className = "", href = "#contact", variant = "dark" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 16, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 170, damping: 16, mass: 0.7 });

  const onMove = (event) => {
    const bounds = ref.current.getBoundingClientRect();
    const distanceX = event.clientX - (bounds.left + bounds.width / 2);
    const distanceY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(distanceX * 0.22);
    y.set(distanceY * 0.22);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantClass =
    variant === "light"
      ? "border-[#050505]/15 bg-[#050505] text-white hover:bg-[#1b1b1b]"
      : "border-white/15 bg-white text-[#050505] hover:bg-[#f5c76b]";

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex h-14 items-center justify-center gap-3 rounded-full border px-7 text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${variantClass} ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default MagneticButton;
