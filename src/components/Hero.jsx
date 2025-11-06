import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span>👨‍💻 Developer</span>
              <span className="text-white/30">•</span>
              <span>⭐ ML-OPS</span>
              <span className="text-white/30">•</span>
              <span>🤔 Philosophy</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Aman Kumar Labh
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              Full-stack developer and CS student building <span className="font-semibold text-white">Artyuga</span>, a startup venture for artists and creators. Currently working at <span className="font-semibold text-white">Motojojo</span>, specializing in AI automation and generative technologies.
            </p>
            <p className="text-white/70">
              Freelancer taking on additional projects and tasks to provide startups with tech consultancy and development guidance for better product outcomes. Vibe coding is part of my life too — achieving 10x productivity through focused, flow-state development.
            </p>

            <div className="pt-2">
              <p className="mb-4 text-sm font-medium tracking-wide text-white/60">Ready to Work Together?</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:amanlabh.work@gmail.com?subject=Project%20Inquiry%20—%20From%20Portfolio"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:shadow-black/30"
                >
                  Book a Call
                </a>
                <a
                  href="https://github.com/Amanlabh"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 md:h-[520px] lg:h-[640px]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/0 to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
