import type { Metadata } from "next";

import MarketingNav from "../../components/site/MarketingNav";
import MarketingFooter from "../../components/site/MarketingFooter";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about CM Buddy — the WhatsApp Business Platform."
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is CM Buddy?",
      a: "CM Buddy is a WhatsApp Business Platform that helps businesses engage customers with AI-powered automation, a shared inbox, campaign management, contact management, and analytics — all from one dashboard."
    },
    {
      q: "How does the AI agent work?",
      a: "You configure a custom system prompt for your AI agent. It automatically responds to incoming WhatsApp messages based on your instructions. You can take over the conversation at any time, and the AI learns from your business knowledge."
    },
    {
      q: "How much does CM Buddy cost?",
      a: "We haven't finalized commercial pricing yet. CM Buddy is in early access — pricing and plan structure will be announced once finalized."
    },
    {
      q: "Can I connect multiple WhatsApp numbers?",
      a: "Yes. You can connect multiple WhatsApp Business numbers, depending on your setup and Meta's requirements. Contact us to discuss your needs."
    },
    {
      q: "How do campaigns work?",
      a: "Campaigns let you send WhatsApp messages to groups of contacts using compliant WhatsApp Business templates. You select contacts, choose a template, and CM Buddy handles opt-in enforcement, sending, and delivery tracking."
    },
    {
      q: "What automations are available?",
      a: "You can build automations that trigger on events like inbound messages or when a new contact is added. Actions include sending replies and assigning tags. Automations run automatically in the background."
    },
    {
      q: "Is my data secure?",
      a: "We use JWT authentication, role-based access control, and tenant isolation so each customer's data stays separate. See our Privacy Policy for more detail on how we handle data."
    },
    {
      q: "How do I get support?",
      a: "Email us at support@cmbuddy.pk or visit our Contact page."
    },
    {
      q: "Can I cancel or change plans?",
      a: "Pricing and plans aren't finalized yet — CM Buddy is in early access. When commercial plans launch, we'll announce how plan changes work. Contact support with any questions."
    },
    {
      q: "Do you offer enterprise features?",
      a: "Yes, we support custom and enterprise setups. Contact us to discuss your requirements."
    }
  ];

  return (
    <div className="mkt">
      <MarketingNav />
      <div className="faq-page">
        <h1>Frequently Asked Questions</h1>
        <p className="subtitle">Everything you need to know about CM Buddy.</p>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>
      <MarketingFooter />
    </div>
  );
}
