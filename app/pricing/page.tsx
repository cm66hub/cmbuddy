import type { Metadata } from "next";
import { Rocket, Mail, Handshake } from "lucide-react";

import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.cmbuddy.pk";

export const metadata: Metadata = {
  title: "Pricing — Coming Soon",
  description: "CM Buddy pricing is coming soon. Get early access and we'll notify you when commercial plans launch."
};

export default function PricingPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <section className="site-hero" style={{ paddingBottom: 20 }}>
        <div className="site-hero-badge">Early Access</div>
        <h1>Pricing Coming Soon</h1>
        <p style={{ maxWidth: 560 }}>
          We&apos;re still finalizing commercial plans and pricing for CM Buddy.
          Get early access today — pricing will be announced on this page
          once it&apos;s finalized.
        </p>
        <div className="site-hero-actions">
          <a href={`${APP_URL}/register`} className="btn-primary">
            Get Started →
          </a>
          <a href="/contact" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 20 }}>
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon"><Rocket size={22} /></div>
            <h3>Join Early Access</h3>
            <p>
              Sign up now to get early access to CM Buddy.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Mail size={22} /></div>
            <h3>Stay in the Loop</h3>
            <p>
              We&apos;ll announce pricing and plans on this page as soon as
              they&apos;re finalized.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Handshake size={22} /></div>
            <h3>Questions?</h3>
            <p>
              Talk to us directly. Our team is happy to discuss what CM Buddy
              can do for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="site-cta">
        <h2>Want to get started before pricing launches?</h2>
        <p>Join early access or reach out — we&apos;re here to help.</p>
        <a href={`${APP_URL}/register`} className="btn-primary">
          Get Started →
        </a>
      </section>
      <MarketingFooter />
    </div>
  );
}