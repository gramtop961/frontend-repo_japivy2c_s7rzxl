import React from 'react';
import Hero from './components/Hero';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0b10] via-[#0e0e14] to-[#0b0b10] text-white">
      <Hero />
      <Tools />
      <Experience />
      <Projects />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Aman Kumar Labh. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="mailto:amanlabh.work@gmail.com" className="text-white/70 hover:text-white">Email</a>
              <a href="https://github.com/Amanlabh" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">GitHub</a>
              <a href="https://www.linkedin.com/in/amanlabh" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
