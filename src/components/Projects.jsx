import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Coursera Skip & Test Chrome Extension',
    desc: 'Chrome extension to skip Coursera videos and automatically pass tests in one click.',
    link: 'https://github.com/Amanlabh/coursera',
    tag: 'GitHub: Amanlabh/coursera'
  },
  {
    title: 'Toutatis (Contributor)',
    desc: 'Python script to extract Instagram info—including mobile number and Gmail—from Instagram profiles.',
    link: 'https://github.com/Amanlabh/toutatis',
    tag: 'GitHub: Amanlabh/toutatis'
  },
  {
    title: 'Twitter (Grok) Session Extractor',
    desc: 'Utility to extract all the current session details from Twitter using web scraping techniques.',
  },
  {
    title: 'Meta / Facebook (Contributor)',
    desc: 'Contributed to Meta by helping resolve security vulnerabilities in react-scripts.',
    link: 'https://github.com/facebook/create-react-app',
    tag: 'GitHub PR/Discussion'
  },
];

export default function Projects() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">Things I made that made my life easy</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-white font-semibold">{p.title}</h4>
                  <p className="mt-1 text-sm text-white/80">{p.desc}</p>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
              {p.tag && <p className="mt-3 text-xs text-white/60">{p.tag}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
