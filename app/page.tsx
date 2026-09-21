'use client';

import React, { useEffect, useRef, useState } from 'react';
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
      setGestureStatus('Requesting Camera Access...');
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraActive(true);
      setGestureStatus('Camera Active - Raise hand to scroll');
      startHandTracking();
    } catch (err) {
      console.error('Camera access denied:', err);
      setGestureStatus('Camera Permission Denied');
    }
  };

  // Simple Brightness Motion Tracking Simulation for Hand Scrolling
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

        // Calculate average Y position of bright moving area
        let totalY = 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 16) {
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
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
    <div className="relative min-h-[200vh] bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50 text-slate-800 flex flex-col items-center justify-start p-6 overflow-x-hidden">
      
      {/* Animated Floating Background Elements */}
      <div className="fixed top-12 left-10 w-72 h-72 bg-purple-200/50 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-16 right-10 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

      {/* Floating Camera Gesture Control Box */}
      <div className="fixed top-20 right-6 z-40 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-indigo-100 flex flex-col items-center gap-2 max-w-[200px]">
        <video ref={videoRef} className={w-full h-28 object-cover rounded-lg bg-black } muted />
        <button
          onClick={toggleCamera}
          className="w-full py-2 px-3 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
        >
          {cameraActive ? 'Stop Camera Gesture' : '??? Enable Hand Scroll'}
        </button>
        <span className="text-[10px] font-medium text-slate-500 text-center">{gestureStatus}</span>
      </div>

      {/* Navigation / Header */}
      <header className="w-full max-w-5xl flex justify-between items-center py-4 px-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 mt-2 sticky top-4 z-30">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CmBuddy Logo"
            width={40}
            height={40}
            className="rounded-xl shadow-sm hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CmBuddy
          </span>
        </div>
        <a
          href="https://wa.me/923008841611"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Get Started
        </a>
      </header>

      {/* Hero Section */}
      <main className="max-w-3xl text-center flex flex-col items-center space-y-8 my-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100/80 text-indigo-700 rounded-full text-sm font-semibold tracking-wide shadow-inner">
          ? Next-Gen AI Automation
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Transform Your Messaging Experience with <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">CmBuddy</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Smart AI-powered conversational automation tailored for seamless integration and effortless business operations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://wa.me/923008841611"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-200 transition-all transform hover:-translate-y-0.5"
          >
            Connect on WhatsApp
          </a>
        </div>
      </main>

      {/* Scrollable Features Section */}
      <section className="w-full max-w-4xl py-20 space-y-12">
        <h2 className="text-3xl font-bold text-center text-slate-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/80">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Automated Messaging</h3>
            <p className="text-slate-600">Scale your communication effortlessly with intelligent workflow triggers.</p>
          </div>
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/80">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Gesture Navigation</h3>
            <p className="text-slate-600">Control the application hands-free using real-time camera tracking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} CmBuddy. All rights reserved.
      </footer>

      {/* Floating Animated WhatsApp Action Button */}
      <a
        href="https://wa.me/923008841611"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact CmBuddy on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-200 transition-all hover:scale-110 animate-bounce"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>

    </div>
  );
}
