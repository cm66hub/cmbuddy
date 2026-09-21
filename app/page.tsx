'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [gestureStatus, setGestureStatus] = useState('Camera Off');

  // Toggle Camera and Hand Tracking
  const toggleCamera = async () => {
    if (cameraActive) {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      setCameraActive(false);
      setGestureStatus('Camera Off');
      return;
    }

    try {
      setGestureStatus('Requesting Access...');
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
      setGestureStatus('Motion Control Active');
      startHandTracking();
    } catch (err) {
      console.error('Camera access denied:', err);
      setGestureStatus('Access Denied');
    }
  };

  // Brightness Motion Tracking Strategy for Hand Scrolling
  const startHandTracking = () => {
    let lastY: number | null = null;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const interval = setInterval(() => {
      if (!videoRef.current || videoRef.current.paused || videoRef.current.ended) {
        clearInterval(interval);
        return;
      }

      canvas.width = 160;
      canvas.height = 120;
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        let totalY = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 16) {
          const r = data[i] ?? 0;
          const g = data[i + 1] ?? 0;
          const b = data[i + 2] ?? 0;
          const brightness = (r + g + b) / 3;

          if (brightness > 150) {
            const y = Math.floor(i / 4 / canvas.width);
            totalY += y;
            count++;
          }
        }

        if (count > 50) {
          const avgY = totalY / count;
          if (lastY !== null) {
            const diff = avgY - lastY;
            if (Math.abs(diff) > 3) {
              window.scrollBy({ top: diff * 8, behavior: 'smooth' });
            }
          }
          lastY = avgY;
        }
      }
    }, 150);
  };

  return (
    <div className="relative min-h-[200vh] bg-white text-slate-800 flex flex-col items-center justify-start p-6 overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Dynamic Animated Moving Background Objects */}
      <div className="fixed top-12 left-10 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl animate-pulse pointer-events-none -z-10" />
      <div className="fixed bottom-24 right-12 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/3 w-64 h-64 bg-green-50/60 rounded-full blur-2xl animate-bounce duration-[10000ms] pointer-events-none -z-10" />

      {/* Floating Camera Gesture Widget */}
      <div className="fixed top-20 right-6 z-40 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-emerald-100 flex flex-col items-center gap-2 max-w-[210px] transition-all hover:border-emerald-300">
        <video 
          ref={videoRef} 
          className={cameraActive ? "w-full h-28 object-cover rounded-xl bg-black block shadow-inner" : "w-full h-28 object-cover rounded-xl bg-black hidden"} 
          muted 
        />
        <button
          onClick={toggleCamera}
          className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md hover:shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>{cameraActive ? '🛑 Disable Motion' : '🖐️ Enable Hand Scroll'}</span>
        </button>
        <span className="text-[10px] font-semibold text-slate-500 tracking-wide text-center uppercase">{gestureStatus}</span>
      </div>

      {/* Navigation Header */}
      <header className="w-full max-w-5xl flex justify-between items-center py-4 px-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-emerald-100/80 mt-2 sticky top-4 z-30">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CmBuddy Logo"
            width={42}
            height={42}
            className="rounded-xl shadow-sm hover:rotate-3 transition-transform"
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 bg-clip-text text-transparent tracking-tight">
            CmBuddy
          </span>
        </div>

        <a
          href="https://wa.me/923008841611"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-200 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 text-sm"
        >
          <span>Get Started</span>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v4h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
          </svg>
        </a>
      </header>

      {/* Hero Section */}
      <main className="max-w-3xl text-center flex flex-col items-center space-y-8 my-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse">
          ✨ Next-Gen WhatsApp Automation
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          Supercharge Messaging with <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-500 bg-clip-text text-transparent">CmBuddy</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
          Lightweight, ultra-fast WhatsApp conversational workflows designed for seamless audience interaction and operations.
        </p>

        {/* Attractive Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <a
            href="https://wa.me/923008841611"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white text-base font-bold rounded-2xl shadow-xl shadow-emerald-200 hover:shadow-emerald-300 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>Connect on WhatsApp</span>
          </a>

          <button
            onClick={toggleCamera}
            className="px-8 py-4 bg-white hover:bg-emerald-50/50 text-slate-800 font-bold text-base rounded-2xl border border-emerald-200 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
          >
            <span>🖐️ Try Motion Scroll</span>
          </button>
        </div>
      </main>

      {/* Features Cards Grid */}
      <section className="w-full max-w-4xl py-16 space-y-10">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-emerald-100 hover:shadow-xl hover:border-emerald-200 transition-all">
            <div className="w-12 h-12 mb-4 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">⚡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Automated Messaging</h3>
            <p className="text-slate-600 leading-relaxed">Scale conversations effortlessly using smart triggers and real-time response flows.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-emerald-100 hover:shadow-xl hover:border-emerald-200 transition-all">
            <div className="w-12 h-12 mb-4 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">🖐️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Gesture Control</h3>
            <p className="text-slate-600 leading-relaxed">Navigate the web hands-free with optimized real-time camera tracking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-10 text-sm text-slate-500 border-t border-slate-100 mt-auto">
        © {new Date().getFullYear()} CmBuddy. All rights reserved.
      </footer>

      {/* Animated Floating WhatsApp Action CTA */}
      <a
        href="https://wa.me/923008841611"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact CmBuddy on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full shadow-2xl shadow-emerald-300 transition-all hover:scale-110 active:scale-95 animate-bounce"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>

    </div>
  );
}
