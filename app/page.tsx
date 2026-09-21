"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThreeCanvas from "./components/ThreeCanvas";

export default function Home() {
  const [conversations, setConversations] = useState(5000);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const estimatedSavings = Math.round((conversations / 1000) * 15);

  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      {/* Scroll-Driven Fullpage 3D Canvas */}
      <ThreeCanvas />

      {/* Header */}
      <header className="mkt-nav">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CM Buddy Logo"
            width={160}
            height={44}
            priority
            className="mkt-logo-img"
          />
        </Link>

        <nav className="mkt-nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#calculator">Calculator</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link href="http://localhost:8080/" className="mkt-btn-secondary">
            Log In
          </Link>
          <Link href="https://cmbuddy.pk" className="mkt-btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mkt-container mkt-hero">
        <span className="mkt-hero-badge">WhatsApp Business API Platform</span>
        <h1>
          Automate & Scale <br />
          <span style={{ color: "#25d366" }}>Customer Conversations</span>
        </h1>
        <p>
          CM Buddy unifies AI chatbot automation, multi-agent shared inbox, bulk campaigns, and analytics into a single WhatsApp Business suite.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="#pricing" className="mkt-btn-primary">
            Start Free 14-Day Trial
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mkt-container">
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>Engineered for Scale</h2>
        <div className="mkt-grid-3">
          {[
            { icon: "🤖", title: "AI Automation & Chatbots", desc: "Deploy custom AI workflows to handle FAQs, lead qualification, and instant support 24/7." },
            { icon: "📥", title: "Shared Team Inbox", desc: "Collaborate seamlessly across support agents with auto-assignment, labels, and private notes." },
            { icon: "🚀", title: "Broadcast Campaigns", desc: "Reach thousands with personalized broadcast messages with detailed read & conversion metrics." },
            { icon: "📊", title: "Real-Time Analytics", desc: "Track agent performance, message throughput, response times, and customer satisfaction." },
            { icon: "⚡", title: "Meta Cloud API Integration", desc: "Official WhatsApp Business Platform architecture with maximum speed and reliability." },
            { icon: "🛒", title: "E-Commerce Sync", desc: "Send automated order updates, cart recovery notifications, and COD verifications." }
          ].map((item, idx) => (
            <div key={idx} className="mkt-card">
              <div className="mkt-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Chat Preview */}
      <section id="demo" className="mkt-container">
        <div className="mkt-card" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "12px", borderBottom: "1px solid var(--mkt-card-border)", marginBottom: "16px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#25d366" }}></span>
            <strong style={{ fontSize: "14px" }}>CM Buddy Assistant</strong>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ alignSelf: "flex-end", background: "#25d366", color: "#fff", padding: "10px 16px", borderRadius: "16px 16px 0 16px", fontSize: "14px", maxWidth: "80%" }}>
              Hi! What are your business hours and product prices?
            </div>
            <div style={{ alignSelf: "flex-start", background: "#1e293b", color: "#f8fafc", padding: "10px 16px", borderRadius: "16px 16px 16px 0", fontSize: "14px", maxWidth: "80%", border: "1px solid var(--mkt-card-border)" }}>
              Hello! 👋 We are open 24/7 online! Our starting pricing plan is $29/mo. Would you like a quick walkthrough?
            </div>
          </div>
        </div>
      </section>

      {/* ROI Volume Calculator */}
      <section id="calculator" className="mkt-container">
        <div className="mkt-card" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Estimate Your Monthly Volume</h2>
          <p style={{ color: "var(--mkt-muted)", marginBottom: "24px" }}>
            Adjust the slider to see how CM Buddy handles your message workload.
          </p>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ color: "var(--mkt-muted)" }}>Conversations / month: </span>
            <strong style={{ color: "#25d366", fontSize: "20px" }}>{conversations.toLocaleString()}</strong>
          </div>

          <input
            type="range"
            min={1000}
            max={50000}
            step={1000}
            value={conversations}
            onChange={(e) => setConversations(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#25d366" }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
            <div className="mkt-card">
              <span style={{ fontSize: "12px", color: "var(--mkt-muted)" }}>RESPONSE SPEED</span>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: "#06b6d4" }}>&lt; 2 Seconds</div>
            </div>
            <div className="mkt-card">
              <span style={{ fontSize: "12px", color: "var(--mkt-muted)" }}>ESTIMATED SAVINGS</span>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: "#25d366" }}>${estimatedSavings} / mo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mkt-container">
        <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "8px" }}>Simple, Transparent Pricing</h2>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="mkt-btn-primary"
            style={{ background: "#1e293b", border: "1px solid var(--mkt-card-border)" }}
          >
            Billing: <strong style={{ color: "#25d366" }}>{billingCycle.toUpperCase()}</strong>
          </button>
        </div>

        <div className="mkt-grid-3">
          {[
            { name: "Starter", price: billingCycle === "yearly" ? 23 : 29, features: ["1,000 Conversations/mo", "2 Agent Seats", "Basic AI Chatbot", "Shared Inbox"] },
            { name: "Growth", price: billingCycle === "yearly" ? 63 : 79, popular: true, features: ["10,000 Conversations/mo", "5 Agent Seats", "Advanced AI Workflows", "Campaign Broadcasts", "Analytics Dashboard"] },
            { name: "Enterprise", price: billingCycle === "yearly" ? 159 : 199, features: ["Unlimited Conversations", "Unlimited Agents", "Custom AI Integrations", "Dedicated Account Manager", "99.9% SLA"] }
          ].map((tier, idx) => (
            <div key={idx} className="mkt-card mkt-pricing-card">
              {tier.popular && <span className="mkt-popular-badge">Most Popular</span>}
              <div>
                <h3>{tier.name}</h3>
                <div className="mkt-price-tag">
                  ${tier.price} <span>/ month</span>
                </div>
                <ul className="mkt-feature-list">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
              <button className="mkt-btn-primary" style={{ width: "100%" }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mkt-footer">
        <p>© 2026 CM Buddy. All rights reserved.</p>
      </footer>
    </main>
  );
}