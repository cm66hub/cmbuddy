import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          WeTarseel
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-xl">
          Next-Generation AI-Powered WhatsApp & Omnichannel Communication Platform
        </p>
      </header>

      <main className="max-w-2xl text-slate-300 space-y-4">
        <p>
          Automate engagement, manage customer workflows, and scale your business interactions seamlessly.
        </p>
      </main>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/923008841611"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>
    </div>
  );
}
