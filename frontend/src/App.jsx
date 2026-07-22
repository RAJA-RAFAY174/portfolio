import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setCount(current);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`preloader ${!loading ? 'hidden' : ''}`}>
        <div className="count-up-text">{count}%</div>
      </div>
      
      <div className="aurora-bg"></div>
      
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Analytics />
    </>
  );
}

export default App;
