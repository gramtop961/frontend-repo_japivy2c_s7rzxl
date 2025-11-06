import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Certification() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">Certification</h2>
        <div className="grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[120px_1fr]">
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Microsoft Certified: Azure Administrator Associate</h3>
            <p className="mt-1 text-sm text-white/80">
              Credential earned for demonstrating skills to configure, manage, secure, and administer key Microsoft Azure functions, including virtual networking, storage, compute, identities, and governance.
            </p>
            <p className="mt-2 text-sm text-white/70">
              Certification validates hands-on abilities using Azure portal, Azure CLI, PowerShell, and managing cloud infrastructure in real business environments.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Verify Credential
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
