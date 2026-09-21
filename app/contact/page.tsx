import type { Metadata } from "next";

import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the CM Buddy team. Support, partnerships, and general inquiries."
};

export default function ContactPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Have a question, need support, or want to partner? We&apos;d love to hear from you.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Support</h3>
            <p>
              Need help with CM Buddy? Reach out and we&apos;ll get back to you.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>General Inquiries</h3>
            <p>
              For partnerships, press, or general questions about CM Buddy.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Quick Links</h3>
            <p>
              <a href="/faq">FAQ</a><br />
              <a href="/privacy">Privacy Policy</a><br />
              <a href="/terms">Terms of Service</a><br />
              <a href="/data-deletion">Data Deletion</a>
            </p>
          </div>
        </div>
      </div>
      <MarketingFooter />
    </div>
  );
}
