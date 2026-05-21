import React from 'react';
import Header from '../components/Header';
import HeroSection from '../sections/HeroSection';

const Home = () => {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-hidden">
      <Header />
      <HeroSection />
    </main>
  );
};

export default Home;