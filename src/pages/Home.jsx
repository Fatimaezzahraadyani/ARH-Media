import React from 'react';
import Header from '../components/Header';
// Import HeroSection si tu l'as créé, sinon commente cette ligne
import HeroSection from '../sections/HeroSection';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans antialiased">
      <Header />
      { 
        <HeroSection /> 
       /* Décommente cette ligne une fois que tu as créé HeroSection.jsx
      */}
    </main>
  );
};

export default Home;