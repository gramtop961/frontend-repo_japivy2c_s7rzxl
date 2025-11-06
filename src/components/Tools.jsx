import React from 'react';

// A playful, responsive "keyboard" of tools & technologies.
// The last row replaces the typical Enter key with a prominent "Hire Me" button.

const rows = [
  [
    'React', 'Next.js', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML5', 'CSS3', 'Framer Motion', 'Radix UI',
  ],
  [
    'Node.js', 'Express', 'FastAPI', 'Python', 'Flask', 'Django', 'GraphQL', 'REST', 'tRPC', 'WebSockets',
  ],
  [
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'Mongoose', 'Redis', 'Supabase', 'Firebase', 'Drizzle',
  ],
  [
    'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Linux', 'Nginx', 'CI/CD', 'Git', 'GitHub Actions',
  ],
  [
    'OpenAI', 'Claude', 'Gemini', 'LangChain', 'LLMs', 'Pinecone', 'Vector DB', 'RAG', 'Hugging Face', 'TensorFlow',
  ],
];

function Key({ label }) {
  return (
    <div
      className="select-none rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-medium text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
    >
      {label}
    </div>
  );
}

export default function Tools() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Tools & Technologies — My Keyboard
        </h2>

        <div className="space-y-3">
          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
              {row.map((label) => (
                <Key key={label} label={label} />
              ))}
            </div>
          ))}

          {/* Bottom row with a wide "Hire Me" in place of Enter */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
            <Key label="Zsh" />
            <Key label="Bash" />
            <Key label="Zod" />
            <Key label="Redux" />
            <Key label="Zustand" />
            <Key label="Expo" />
            <Key label="RN" />
            <Key label="WebRTC" />
            <Key label="Three.js" />
            <a
              href="mailto:amanlabh.work@gmail.com?subject=Hire%20Me%20—%20From%20Portfolio"
              className="col-span-1 flex select-none items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/20 px-3 py-3 text-center text-sm font-semibold text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:bg-emerald-500/30 active:translate-y-0 md:col-span-2 lg:col-span-2"
            >
              Hire Me
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/60">
          Every key above maps to tools I use daily. Looking for a builder who ships fast and clean? Hit “Hire Me”.
        </p>
      </div>
    </section>
  );
}
