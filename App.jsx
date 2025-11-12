import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default App;