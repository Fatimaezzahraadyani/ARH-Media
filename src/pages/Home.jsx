import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import CustomCursor from "../components/CustomCursor";
import { useLenis } from "../hooks/useLenis";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Ecosystem from "../sections/Ecosystem";
import Footer from "../sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useLenis();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        const depth = Number(element.getAttribute("data-parallax")) || 80;
        gsap.to(element, {
          y: depth * -1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <Header />
      <Hero />
      <About />
      <Ecosystem />
      <Footer />
    </main>
  );
};

export default Home;
