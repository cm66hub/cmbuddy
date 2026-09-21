import Link from "next/link";
import { Icon, type IconName } from "../../components/ui/icons";
import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const STATS = [
  { value: "2025", label: "CM Buddy founded" },
  { value: "300+", label: "Businesses onboarded" },
  { value: "2.7B+", label: "WhatsApp users reachable" },
];

const BULLETS = [
  "Run WhatsApp Marketing and Promotional Campaigns",
  "Grow Sales with an Integrated WhatsApp CRM",
  "Engage Directly with Website Visitors and WhatsApp Leads",
  "Maximize WhatsApp Business Capabilities",
  "Sell Products and Services Directly via WhatsApp",
  "Enable Real-Time Collaboration with Teams and Customers",
];

const VALUES: { icon: IconName; title: string; body: string }[] = [
  { icon: "gem", title: "Make an impact", body: "We're building something big. Something that has the power to change the trajectory of any sized business for the better." },
  { icon: "trophy", title: "Learn", body: "Our team are masters of their craft. Even though we're all experts in our respective fields, we always make time to expand our minds." },
  { icon: "globe", title: "Have fun", body: "We work hard and play harder. We believe in celebrating wins big or small, for the business or individuals." },
  { icon: "crown", title: "Empathy", body: "We strive to be empathetic to every customer and colleague — and by doing so we provide a better experience for all." },
];

const QUOTES = [
  {
    quote: "We're looking for a platform that lets us focus on our customers instead of administrative work. CM Buddy gave us exactly that.",
    name: "Mark Zellers",
    role: "CEO & Co-Founder",
  },
  {
    quote: "This powerful tool eliminates the need to leave WhatsApp to get things done. Support and follow-ups are handled automatically.",
    name: "Natalia Larsson",
    role: "Director of Sales",
  },
  {
    quote: "As a business in Europe, compliance matters. CM Buddy processes everything through Meta-approved channels — outstanding.",
    name: "Sarah Edrissi",
    role: "Lead Marketing",
  },
];

const TIMELINE = [
  { year: "2025", title: "Where the idea came up", body: "The idea for CM Buddy came up — turning WhatsApp into a complete marketing, sales, and support platform for businesses." },
  { year: "2026", title: "CM Buddy launches", body: "Launched our first product: a WhatsApp CRM built on the WhatsApp Business API that businesses can set up in minutes." },
  { year: "2026", title: "Opened our office in Lahore", body: "Opened our new office in Lahore, Pakistan — building close to the businesses and customers we serve." },
  { year: "Today", title: "AI Agents go live", body: "Launched the AI Master and AI Request roadmap — an always-on AI agent your customers can chat with around the clock." },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(/[\s.]+/).filter(Boolean).slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join("") || "CB";
  return <span className="mkt-avatar" aria-hidden="true">{initials}</span>;
}

export default function AboutPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-abt-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; About Us</span>
            <h1>About CM Buddy</h1>
            <p className="mkt-abt-lead">
              The modern consumer demands instant, personalized communication — and traditional methods often fall short.
              CM Buddy bridges this gap by transforming WhatsApp into a powerful marketing, sales, and support platform for{" "}
              <strong>D2C brands</strong>. By integrating with your systems, CM Buddy enhances customer interaction — from
              lead capture to post-purchase support — using the WhatsApp Business API.
            </p>
            <p>
              CM Buddy is more than a messaging platform — it&apos;s a complete <strong>WhatsApp CRM solution</strong> that
              empowers your business to manage marketing, sales, and support from one user-friendly interface. Every customer
              touchpoint is optimized for engagement and satisfaction.
            </p>
          </div>
        </section>

        <section className="mkt-abt-stats">
          <div className="mkt-container mkt-abt-stats-inner">
            {STATS.map((s) => (
              <div key={s.label} className="mkt-abt-stat">
                <span className="mkt-abt-stat-value">{s.value}</span>
                <span className="mkt-abt-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mkt-section mkt-white">
          <div className="mkt-container">
            <h2 className="mkt-section-title">Empowering D2C Growth via WhatsApp CRM</h2>
            <p className="mkt-section-sub">
              CM Buddy integrates the <strong>WhatsApp Business API</strong> with your CRM — empowering D2C brands to deliver
              exceptional service and gain a competitive edge.
            </p>
            <div className="mkt-bullet-grid">
              {BULLETS.map((b) => (
                <div key={b} className="mkt-bullet">
                  <Icon name="check-circle" size={18} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mkt-abt-works">
          <div className="mkt-container mkt-abt-works-inner">
            <h2>How CM Buddy Works</h2>
            <p>
              CM Buddy simplifies customer engagement with an all-in-one WhatsApp CRM dashboard — combining campaign
              management, live chat, and automation in one powerful platform. Businesses can communicate seamlessly on
              WhatsApp, use message templates to automate replies, and maintain consistent brand messaging. Easily import
              contacts manually or via CSV to ensure no lead is missed.
            </p>
            <p>
              Take automation to the next level with advanced WhatsApp workflow capabilities — streamlining customer
              interactions without manual effort. Our direct WhatsApp API integration connects CM Buddy to your existing
              platforms, enabling instant delivery of message templates. Scale smarter, engage better, and grow faster with
              CM Buddy.
            </p>
          </div>
        </section>

        <section className="mkt-section mkt-white">
          <div className="mkt-container">
            <h2 className="mkt-section-title">Our Values — It&apos;s Simple!</h2>
            <div className="mkt-values">
              {VALUES.map((v) => (
                <div key={v.title} className="mkt-value-card">
                  <span className="mkt-value-icon"><Icon name={v.icon} size={24} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mkt-section">
          <div className="mkt-container">
            <h2 className="mkt-section-title">Some clients feedback</h2>
            <div className="mkt-abt-quotes">
              {QUOTES.map((q) => (
                <figure key={q.name} className="mkt-abt-quote">
                  <Icon name="quote" size={20} className="mkt-quote-icon" />
                  <blockquote>{q.quote}</blockquote>
                  <figcaption>
                    <Avatar name={q.name} />
                    <span>
                      <strong>{q.name}</strong>
                      <em>{q.role}</em>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mkt-abt-timeline">
          <div className="mkt-container">
            <h2 className="mkt-section-title">How we got here</h2>
            <div className="mkt-timeline">
              {TIMELINE.map((t, i) => (
                <div key={`${t.year}-${t.title}`} className={`mkt-tl-item ${i % 2 === 1 ? "alt" : ""}`}>
                  <span className="mkt-tl-dot" />
                  <div className="mkt-tl-card">
                    <span className="mkt-tl-year">{t.year}</span>
                    <h3>{t.title}</h3>
                    <p>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mkt-cta">
          <div className="mkt-container mkt-cta-inner">
            <h2>Your customers are waiting for you!</h2>
            <p>Around 2.7 billion active users worldwide are ready to purchase.</p>
            <div className="mkt-cta-buttons">
              <Link href="/register" className="mkt-btn-primary big">
                Let&apos;s Get Started <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}