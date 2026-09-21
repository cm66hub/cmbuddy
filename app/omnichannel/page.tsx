import Link from "next/link";
import { Icon } from "../../components/ui/icons";
import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

const KEY_TAKEAWAYS = [
  "CM Buddy now supports omnichannel messaging — WhatsApp, Instagram, and Messenger in one unified inbox.",
  "No more switching apps or losing track of conversations.",
  "Customers choose their favorite channel, you reply from CM Buddy.",
  "Works for small businesses, growing brands, and large enterprises.",
  "AI sits on top: smart routing, context retention, automated replies, and insights.",
];

const AI_CAPABILITIES = [
  { title: "Smart routing", body: "AI identifies customer intent and automatically assigns chats to the right team or agent." },
  { title: "Context retention", body: "It keeps the entire conversation history, so every agent knows what the customer asked before — even if they switched channels." },
  { title: "Automated replies", body: "AI can instantly respond to common queries or follow up with personalized messages like abandoned-cart reminders or appointment confirmations." },
  { title: "Insights and predictions", body: "AI analyzes conversations to reveal what customers ask most, helping you improve support and marketing strategies." },
];

const START_STEPS = [
  "Log in to your CM Buddy account.",
  "Open your channel settings and connect Instagram, Messenger, and WhatsApp.",
  "All future messages appear in your unified inbox.",
];

const START_FOLLOW_UPS = [
  "Set up automation for FAQs.",
  "Assign chats to team members.",
  "Track response times and performance.",
];

const FAQS = [
  { q: "What is an omnichannel communication platform?", a: "An omnichannel platform connects all your customer communication channels — like WhatsApp, Instagram, Facebook Messenger, email, and live chat — into one unified inbox. It helps your team manage conversations seamlessly without switching apps." },
  { q: "How does AI improve omnichannel communication?", a: "AI automates repetitive tasks such as replying to FAQs, routing messages to the right agents, and analyzing customer sentiment. It ensures faster responses, more personalized conversations, and better customer satisfaction — all from one place." },
  { q: "What's the difference between multi-channel and omnichannel communication?", a: "Multi-channel means your business is active on multiple platforms, but each works separately. Omnichannel connects those platforms together so you can view and manage every conversation — no matter where it started — in a single dashboard." },
  { q: "Can AI help increase sales through WhatsApp and social media?", a: "Yes. AI can send automated product recommendations, follow up on abandoned carts, and re-engage inactive customers. Businesses using AI-driven automation often see higher conversion and retention rates." },
  { q: "How secure is customer data in an omnichannel system?", a: "Trusted omnichannel platforms like CM Buddy use secure, Meta-approved integrations and follow data-protection best practices to ensure all customer data remains safe and private." },
];

const TOC = [
  { href: "#what", label: "What Does Omnichannel Mean?" },
  { href: "#ai", label: "Omnichannel with AI" },
  { href: "#example", label: "Omnichannel Example" },
  { href: "#start", label: "Getting Started Is Easy" },
  { href: "#faq", label: "FAQs" },
];

export default function OmnichannelPage() {
  return (
    <div className="mkt">
      <MarketingNav />
      <main>
        <section className="mkt-post-hero">
          <div className="mkt-container">
            <span className="mkt-legal-crumb">CM Buddy &gt; Insights &gt; Omnichannel</span>
            <span className="mkt-pill-new">New</span>
            <h1>CM Buddy Is Now Omnichannel</h1>
            <p className="mkt-post-hero-sub">
              From WhatsApp, Instagram, and Messenger — all your customer messages are now in one place.
            </p>
          </div>
        </section>

        <section className="mkt-post">
          <div className="mkt-container mkt-post-body">
            <div className="mkt-kp">
              <h2>Key Takeaways</h2>
              <ul>
                {KEY_TAKEAWAYS.map((k) => (
                  <li key={k}><Icon name="check-circle" size={16} /> {k}</li>
                ))}
              </ul>
            </div>

            <nav className="mkt-toc" aria-label="Table of contents">
              <h2>Table of Contents</h2>
              <ol>
                {TOC.map((t) => (
                  <li key={t.href}><a href={t.href}>{t.label}</a></li>
                ))}
              </ol>
            </nav>

            <p>
              CM Buddy is built to simplify customer communication, starting with making the WhatsApp Business API easy to
              use. Since its beginning, the platform has expanded into an omnichannel solution that consolidates messages from
              multiple apps into a single interface — so your team replies from one place, and no message slips through.
            </p>
            <p>
              If you don&apos;t know what &ldquo;omnichannel&rdquo; means, don&apos;t worry. The section below explains it in
              simple, step-by-step terms for readers with no prior knowledge.
            </p>

            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=70" alt="Multiple devices connected — WhatsApp, Instagram, and Messenger flowing into one inbox" />
              <figcaption>Every channel, one unified inbox.</figcaption>
            </figure>

            <h2 id="what">What Does Omnichannel Mean?</h2>
            <p>
              When people hear &ldquo;omnichannel,&rdquo; it can sound like just another tech buzzword. In reality, it
              describes a very practical shift in how businesses talk to customers.
            </p>

            <h3>Multi-channel</h3>
            <p>
              Multi-channel means your business is available on different platforms — WhatsApp, Instagram, Messenger, maybe
              even email or live chat. That&apos;s a good start, because customers can pick the app they like best.
            </p>
            <p>
              But here&apos;s the problem: each channel works in isolation. You have to log into Instagram to check Instagram
              DMs, switch to WhatsApp for WhatsApp chats, and so on. Conversations get scattered, which makes it easy to miss
              messages or lose context. Every channel is its own &ldquo;island.&rdquo;
            </p>

            <h3>Omnichannel</h3>
            <p>
              Omnichannel takes this a step further. Instead of treating each platform as a separate island, it
              <strong> connects them all together</strong>. Every message — whether it starts on WhatsApp, Instagram, or
              Messenger — flows into a <strong>single, unified inbox</strong>. Your team sees the full picture and replies
              from one place.
            </p>

            <h2 id="ai">Omnichannel with AI</h2>
            <p>
              Now, imagine adding <strong>AI</strong> on top of that. AI doesn&apos;t just centralize your messages — it
              <strong> automates</strong> how you manage them:
            </p>
            <figure className="mkt-post-figure inline">
              <img src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=900&q=70" alt="AI automates how you handle messages across every channel" loading="lazy" />
            </figure>
            <div className="mkt-mini-grid">
              {AI_CAPABILITIES.map((c) => (
                <div key={c.title} className="mkt-mini-card">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
            <p>
              So, <strong>omnichannel with AI</strong> isn&apos;t just about being everywhere — it&apos;s about being
              <strong> smarter</strong>, <strong>faster</strong>, and <strong>more personal</strong> everywhere your customers
              are.
            </p>

            <h2 id="example">Omnichannel Example</h2>
            <p>Imagine you run a bakery.</p>
            <ul>
              <li>A customer messages you on <strong>WhatsApp</strong> asking about today&apos;s special.</li>
              <li>Later, they DM you on <strong>Instagram</strong> to order a cake.</li>
              <li>The next day, they follow up via <strong>Messenger</strong> about a family order.</li>
            </ul>
            <figure className="mkt-post-figure">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=70" alt="Fresh croissants — a bakery handles WhatsApp, Instagram, and Messenger orders from one inbox" loading="lazy" />
              <figcaption>A bakery running orders from dozens of channels in one place.</figcaption>
            </figure>
            <div className="mkt-compare">
              <div className="mkt-cmp bad">
                <h4>Without CM Buddy</h4>
                <p>
                  You bounce between WhatsApp, Instagram, and Messenger, trying to keep up. Chances are, you&apos;ll lose
                  track of something.
                </p>
              </div>
              <div className="mkt-cmp good">
                <h4>With CM Buddy</h4>
                <p>
                  All those chats land in <strong>one inbox</strong>. You reply in one place, see the whole history, and never
                  miss a detail. The customer feels heard — and you stay stress-free.
                </p>
              </div>
            </div>

            <h2 id="start">Getting Started Is Easy</h2>
            <ol>
              {START_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p>From there, you can:</p>
            <ul>
              {START_FOLLOW_UPS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <h2 id="faq">FAQs</h2>
            <div className="mkt-acc">
              {FAQS.map((f) => (
                <details key={f.q} className="mkt-acc-item">
                  <summary>{f.q} <span className="mkt-acc-chev"><Icon name="chevron-down" size={16} /></span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mkt-post-cta">
              <h3>Bring every conversation into one inbox.</h3>
              <p>Try omnichannel messaging with CM Buddy — WhatsApp, Instagram, and Messenger in a single place, with AI on top.</p>
              <Link href="/register" className="mkt-btn-primary big">
                Start Free Trial <Icon name="arrow-right" size={16} />
              </Link>
            </div>

            <div className="mkt-tags">
              <span>WhatsApp omnichannel</span>
              <span>omnichannel messaging</span>
              <span>unified inbox</span>
              <span>WhatsApp Instagram Messenger</span>
              <span>social media inbox</span>
              <span>AI customer support</span>
              <span>unified customer communication</span>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}