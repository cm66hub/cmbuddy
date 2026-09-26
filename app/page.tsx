'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Zap,
  LayoutDashboard,
  MessageSquare,
  Users,
  Settings,
  ExternalLink,
  Bell,
  Camera,
  Hand,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Lock,
  Globe,
  VideoOff,
  Sliders,
  LogOut,
  LogIn,
  UserCheck,
  X,
  Sparkles,
  Eye,
} from 'lucide-react';

export default function CmBuddyDashboard() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [activeUserName, setActiveUserName] = useState('Guest User');

  // Dashboard & Controls State
  const [cameraActive, setCameraActive] = useState(false);
  const [handScrollEnabled, setHandScrollEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sensitivity, setSensitivity] = useState('High');
  const [brightnessThreshold, setBrightnessThreshold] = useState(150);

  // 3D Scene Controls State
  const [sceneWireframe, setSceneWireframe] = useState(false);
  const [particleDensity, setParticleDensity] = useState(60);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  // Canvas Reference
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Canvas Light Reactive Animation Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    const greenShades = ['#10b981', '#059669', '#34d399', '#047857'];

    for (let i = 0; i < particleDensity; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.8 * rotationSpeed,
        vy: (Math.random() - 0.5) * 0.8 * rotationSpeed,
        color: greenShades[Math.floor(Math.random() * greenShades.length)],
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle light grid background
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw central 3D geometric ring structure
      const centerX = width * 0.75;
      const centerY = height * 0.35;
      const ringRadius = 110;

      angle += 0.01 * rotationSpeed;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Orbiting 3D rings
      ctx.strokeStyle = sceneWireframe ? '#10b981' : 'rgba(16, 185, 129, 0.25)';
      ctx.lineWidth = sceneWireframe ? 1.5 : 2;

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius, ringRadius * 0.4, angle, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(5, 150, 105, 0.2)';
      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadius * 1.3, ringRadius * 0.5, -angle * 1.2, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating central core
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      const coreX = Math.cos(angle) * (ringRadius * 0.8);
      const coreY = Math.sin(angle) * (ringRadius * 0.3);
      ctx.arc(coreX, coreY, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 - dist / 800})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleDensity, rotationSpeed, sceneWireframe]);

  // Auth Handler
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    const nameFromEmail = userEmail.split('@')[0];
    setActiveUserName(nameFromEmail || 'Mubasher');
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveUserName('Guest User');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative overflow-x-hidden">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Top Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/85 backdrop-blur-md px-6 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 shadow-sm">
              <Zap className="w-5 h-5 fill-emerald-500/20" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                CmBuddy
              </h1>
              <p className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase">
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

        {/* User Session & WhatsApp Gateway */}
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

            {isAuthenticated ? (
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm uppercase">
                    {activeUserName.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-slate-800 capitalize">
                    {activeUserName}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  title="Log Out"
                  className="p-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 border border-slate-200 rounded-lg text-slate-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login');
                  setShowAuthModal(true);
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                Log In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Dashboard Workspace */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / Center Column: Motion Control & 3D Interactive Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Breadcrumb Header */}
          <div className="flex items-center justify-between">
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
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Light Reactive
            </span>
          </div>

          {/* Camera Feed Viewport Card */}
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-sm backdrop-blur-md relative overflow-hidden">
            <div className="aspect-video w-full bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
              {cameraActive ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-emerald-400">
                  <Activity className="w-12 h-12 animate-pulse mb-2 text-emerald-400" />
                  <p className="text-xs font-mono tracking-wide">
                    Tracking Motion & Gesture Inputs...
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-slate-500 gap-2">
                  <VideoOff className="w-10 h-10 stroke-[1.5]" />
                  <span className="text-xs font-medium">Video Feed Inactive</span>
                </div>
              )}

              {/* Camera Active Badge */}
              <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md text-[11px] text-slate-300 font-mono flex items-center gap-2 shadow-sm">
                <span
                  className={`w-2 h-2 rounded-full ${
                    cameraActive ? 'bg-emerald-400 animate-ping' : 'bg-rose-500'
                  }`}
                ></span>
                Camera: {cameraActive ? 'ON' : 'OFF'}
              </div>
            </div>

            {/* Gesture Engine Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="text-[11px] text-slate-500 font-medium">Scroll Triggers</div>
                <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">
                  0 Events detected
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
                <div className="text-[11px] text-slate-500 font-medium">Sensitivity</div>
                <div className="text-lg font-bold text-emerald-600 font-mono mt-0.5">
                  {sensitivity}
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-500 font-medium">Brightness threshold</div>
                <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">
                  {brightnessThreshold}
                </div>
              </div>
            </div>

            {/* Gesture Engine Action Bar */}
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

          {/* Interactive 3D Canvas Tuning Panel */}
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-sm backdrop-blur-md">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Eye className="w-4 h-4 text-emerald-600" />
              Reactive 3D Scene Controls
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Wireframe Toggle */}
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-xs font-medium text-slate-700">Wireframe Mesh</span>
                <button
                  onClick={() => setSceneWireframe(!sceneWireframe)}
                  className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                    sceneWireframe ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform ${
                      sceneWireframe ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Rotation Speed Control */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col justify-center">
                <div className="flex items-center justify-between text-xs text-slate-700 font-medium mb-1">
                  <span>Orbit Speed</span>
                  <span className="font-mono text-emerald-600">{rotationSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.2"
                  value={rotationSpeed}
                  onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Particle Count Slider */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col justify-center">
                <div className="flex items-center justify-between text-xs text-slate-700 font-medium mb-1">
                  <span>Particles</span>
                  <span className="font-mono text-emerald-600">{particleDensity}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="10"
                  value={particleDensity}
                  onChange={(e) => setParticleDensity(parseInt(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Node Operations & System Diagnostics */}
        <div className="space-y-6">
          {/* System Operational Widget */}
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-sm backdrop-blur-md">
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

          {/* Active Node Info */}
          <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-sm backdrop-blur-md">
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

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600">
                <Zap className="w-4 h-4 fill-emerald-500/20" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {authMode === 'login' ? 'Welcome Back' : 'Create CmBuddy Account'}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              Access real-time gesture automation tools and settings.
            </p>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="mubasher@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                {authMode === 'login' ? 'Sign In to Workspace' : 'Register Account'}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="text-xs text-emerald-600 hover:underline font-semibold"
              >
                {authMode === 'login'
                  ? "Don't have an account? Sign Up"
                  : 'Already registered? Log In'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}