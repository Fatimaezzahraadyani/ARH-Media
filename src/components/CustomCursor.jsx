import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const root = document.documentElement;
    const move = (event) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div className="custom-cursor" aria-hidden="true" />;
};

export default CustomCursor;
