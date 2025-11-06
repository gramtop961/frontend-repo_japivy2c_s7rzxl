import React from 'react';
import { Cpu, Cloud, Github, Rocket, Server, Boxes, TerminalSquare, Workflow, Database, FlaskConical } from 'lucide-react';

const tools = [
  { name: 'React', icon: <Rocket className="h-5 w-5" />, tag: '⚛️' },
  { name: 'Next.js', icon: <Server className="h-5 w-5" />, tag: '▲' },
  { name: 'Node.js', icon: <TerminalSquare className="h-5 w-5" />, tag: '🟢' },
  { name: 'Python', icon: <Cpu className="h-5 w-5" />, tag: '🐍' },
  { name: 'Flask', icon: <FlaskConical className="h-5 w-5" />, tag: '🌶️' },
  { name: 'Supabase', icon: <Database className="h-5 w-5" />, tag: '⚡' },
  { name: 'AWS', icon: <Cloud className="h-5 w-5" />, tag: '☁️' },
  { name: 'GCP', icon: <Cloud className="h-5 w-5" />, tag: '🌩️' },
  { name: 'Expo', icon: <Boxes className="h-5 w-5" />, tag: '📱' },
  { name: 'Appwrite', icon: <Server className="h-5 w-5" />, tag: '🔧' },
  { name: 'Gemini', icon: <Cpu className="h-5 w-5" />, tag: '🤖' },
  { name: 'GitHub', icon: <Github className="h-5 w-5" />, tag: '🐙' },
  { name: 'Postman', icon: <Workflow className="h-5 w-5" />, tag: '📮' },
  { name: 'Juno', icon: <Rocket className="h-5 w-5" />, tag: '🪐' },
  { name: 'Linux', icon: <TerminalSquare className="h-5 w-5" />, tag: '🐧' },
  { name: 'Claude', icon: <Cpu className="h-5 w-5" />, tag: '🧠' },
  { name: 'VS Code', icon: <TerminalSquare className="h-5 w-5" />, tag: '💻' },
  { name: 'Solana', icon: <Database className="h-5 w-5" />, tag: '☀️' },
  { name: 'Cursor', icon: <TerminalSquare className="h-5 w-5" />, tag: '🎯' },
  { name: 'n8n', icon: <Workflow className="h-5 w-5" />, tag: '🔄' },
  { name: 'MCP Server', icon: <Server className="h-5 w-5" />, tag: '🔗' },
];

export default function Tools() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tools.map((t) => (
            <div key={t.name} className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="mb-2 flex items-center gap-2 text-white">
                <span className="text-lg">{t.tag}</span>
                {t.icon}
              </div>
              <p className="text-sm font-medium text-white/90">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
