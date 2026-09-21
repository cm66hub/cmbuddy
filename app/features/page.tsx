import type { Metadata } from "next";
import {
  MessageCircle,
  Bot,
  Zap,
  Users,
  UsersRound,
  Megaphone,
  BarChart3,
  Link2,
  ShieldCheck
} from "lucide-react";

import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.cmbuddy.pk";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore CM Buddy features — shared inbox, AI agent, automations, campaigns, analytics, and more."
};

export default function FeaturesPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <section className="site-hero" style={{ paddingBottom: 20 }}>
        <h1>Features</h1>
        <p style={{ maxWidth: 550 }}>
          Everything you need to manage WhatsApp communication, automate responses,
          and scale your business — from one powerful dashboard.
        </p>
      </section>

      <section className="site-section" style={{ paddingTop: 20 }}>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon"><MessageCircle size={22} /></div>
            <h3>Shared Inbox</h3>
            <p>
              Manage all WhatsApp conversations in one place. Assign to team members,
              switch between AI and human modes, and never miss a message. Every
              conversation is tracked with full history.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Bot size={22} /></div>
            <h3>AI Agent</h3>
            <p>
              Configure a custom AI agent that handles customer queries automatically.
              Train it with your business knowledge, set boundaries, and take over
              the conversation at any time.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Zap size={22} /></div>
            <h3>Automations</h3>
            <p>
              Build workflows that trigger on events like inbound messages and
              new contacts. Auto-reply, assign tags, and send notifications.
              No code required.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Users size={22} /></div>
            <h3>Contact Management</h3>
            <p>
              Import, tag, and manage your customer contacts. Build rich profiles
              with conversation history and notes. Segment contacts for targeted
              campaigns.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Megaphone size={22} /></div>
            <h3>Campaigns</h3>
            <p>
              Send WhatsApp messages to your audience safely. Use compliant templates,
              enforce opt-in rules, and track delivery and engagement
              in real time.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><BarChart3 size={22} /></div>
            <h3>Analytics</h3>
            <p>
              Track messages sent, AI usage, campaign performance, and team
              productivity. Dashboards help you make data-driven decisions.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><UsersRound size={22} /></div>
            <h3>Team Management</h3>
            <p>
              Invite team members with role-based access. Owner, admin, and staff
              roles with granular permissions. Track who handled what and when.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Link2 size={22} /></div>
            <h3>WhatsApp Business API</h3>
            <p>
              Built on the WhatsApp Business Platform. Template syncing,
              message status, and webhook integration.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><ShieldCheck size={22} /></div>
            <h3>Enterprise Security</h3>
            <p>
              Role-based access, JWT authentication, audit logging, and tenant
              isolation. Data is encrypted in transit.
            </p>
          </div>
        </div>
      </section>

      <section className="site-cta">
        <h2>See it in action</h2>
        <p>Join early access and experience what CM Buddy can do for your business.</p>
        <a href={`${APP_URL}/register`} className="btn-primary">
          Get Started →
        </a>
      </section>
      <MarketingFooter />
    </div>
  );
}
