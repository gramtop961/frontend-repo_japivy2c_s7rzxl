import React from 'react';

const Section = ({ title, subtitle, location, stack, period }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        {subtitle && <p className="text-white/80">{subtitle}</p>}
      </div>
      {period && <span className="text-xs text-white/50">{period}</span>}
    </div>
    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/70">
      {location && <span className="rounded-md bg-white/5 px-2 py-1">{location}</span>}
      {stack && stack.map((s) => (
        <span key={s} className="rounded-md bg-white/5 px-2 py-1">{s}</span>
      ))}
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">Startup & Work</h2>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-5">
            <h3 className="text-white/80">Startup</h3>
            <Section
              title="Artyuga - Founder & Developer"
              subtitle="Platform for artists, authors & philosophers. Currently in ideation phase • Learning scalability & revenue models • MVP built, needs refinement"
              period="2024 - Present"
            />
          </div>
          <div className="space-y-5">
            <h3 className="text-white/80">Work</h3>
            <Section
              title="Full Stack Developer"
              subtitle="Motojojo Pvt. Ltd."
              location="Remote"
            />
            <Section
              title="Frontend Developer"
              subtitle="WebcoinLabs"
              stack={["React"]}
              location="Remote"
            />
            <Section
              title="Gen-AI Engineer (Freelance)"
              subtitle="DU Desk"
              stack={["React", "Python", "Web Scraping", "SQL", "Scikit-learn"]}
              location="Remote"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
