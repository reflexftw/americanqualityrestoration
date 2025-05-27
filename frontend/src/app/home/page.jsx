"use client"

import About from '@/components/About';
import Contacts from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default HomePage;