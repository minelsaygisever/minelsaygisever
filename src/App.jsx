import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Expertise />

      <Projects />

      <Experience />

      <Contact />
    </div>
  )
}

export default App;