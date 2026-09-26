'use client';

import React, { useRef, useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Hand, 
  Zap, 
  MessageSquare, 
  Users, 
  Settings, 
  ExternalLink, 
  Bell, 
  Camera, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Lock, 
  Globe, 
  VideoOff, 
  Sliders,
  Sparkles,
  Sun,
  Eye
} from 'lucide-react';

export default function CmBuddyDashboard() {
  const [cameraActive, setCameraActive] = useState(false);
  const [handScrollEnabled, setHandScrollEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/80 backdrop-blur-md px-6 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600">
              <Zap className="w-5 h-5 fill-emerald-500/20" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                CmBuddy
              </h1>
              <p className="text-[11px] font-bold text-emerald-600 tracking-wide uppercase">
                AI Automation Engine
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200">
            {[
              { name: 'Dashboard', icon: LayoutDashboard },
              { name: 'Live Chats', icon: MessageSquare },
              { name: 'Audience', icon: Users },
              { name: 'Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-emerald-600 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User / WhatsApp Gateway */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-medium text-emerald-700">
            <span>WhatsApp Support</span>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 font-bold text-emerald-600"
            >
              Direct Chat
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
            <button className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                M
              </div>
              <span className="text-xs font-semibold text-slate-800">
                mubasher
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
              <span>Workspace</span>
              <span>›</span>
              <span className="text-slate-800 font-medium">Control Panel</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <Hand className="w-6 h-6 text-emerald-600" />
              Real-Time Motion Gesture Engine
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Control application scroll positioning using web-camera tracking.
            </p>
          </div>

          {/* Camera Feed Container */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm relative overflow-hidden">
            <div className="aspect-video w-full bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
              {cameraActive ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-emerald-400">
                  <Activity className="w-12 h-12 animate-pulse mb-2 text-emerald-400" />
                  <p className="text-xs font-mono">
                    Tracking Motion & Gesture Inputs...
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-slate-500 gap-2">
                  <VideoOff className="w-10 h-10 stroke-[1.5]" />
                  <span className="text-xs font-medium">Video Feed Inactive</span>
                </div>
              )}

              <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md text-[11px] text-slate-300 font-mono flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    cameraActive ? 'bg-emerald-400 animate-ping' : 'bg-rose-500'
                  }`}
                ></span>
                Camera: {cameraActive ? 'ON' : 'OFF'}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="text-[11px] text-slate-500 font-medium">Scroll Triggers</div>
                <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">0 Events detected</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="text-[11px] text-slate-500 font-medium">Sensitivity</div>
                <div className="text-lg font-bold text-emerald-600 font-mono mt-0.5">High</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-500 font-medium">Brightness threshold</div>
                <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">150</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setHandScrollEnabled(!handScrollEnabled)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  handScrollEnabled
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Camera className="w-4 h-4" />
                {handScrollEnabled ? 'Hand Scroll Enabled' : 'Enable Hand Scroll'}
              </button>

              <button
                onClick={() => setCameraActive(!cameraActive)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                Toggle Camera Feed
              </button>
            </div>
          </div>
        </div>

        {/* Right Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-600" />
                System Operational
              </span>
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-mono font-bold">
                100% Online
              </span>
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Engine Latency</span>
                <span className="text-emerald-600 font-mono font-bold">• 14ms</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Security State</span>
                <span className="text-slate-800 flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  TLS Encrypted
                </span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Protection Mode</span>
                <span className="text-slate-800 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Session protection active
                </span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5">
                <span className="text-slate-500">Active Workspace</span>
                <span className="text-slate-900 font-semibold flex items-center gap-1">
                  <Users className="w-3 h-3 text-emerald-600" />
                  CmBuddy Node
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Active Server Node
            </h3>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-600" />
                <div>
                  <div className="text-xs font-mono font-bold text-slate-800">
                    localhost:3000
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Local Development Environment
                  </div>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}