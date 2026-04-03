import { useEffect } from 'react';
import resumeData from './data/resume.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import OpenSource from './components/OpenSource';

import Footer from './components/Footer';
import SketchDivider from './components/SketchDivider';
import './App.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const d = resumeData;

  return (
    <div className="app">
      <Navbar personal={d.personal} />

      <main>
        <Hero personal={d.personal} />
        <SketchDivider />
        <About about={d.personal.about} education={d.education?.[0]} />
        <SketchDivider />
        <Experience experience={d.experience} />
        <SketchDivider />
        <Skills skills={d.skills} />
        <SketchDivider />
        <OpenSource projects={d.openSource} />
      </main>

      <Footer personal={d.personal} />
    </div>
  );
}
