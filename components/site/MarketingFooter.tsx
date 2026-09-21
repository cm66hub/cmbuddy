import Link from "next/link";
import { Icon } from "../ui/icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.cmbuddy.pk";

export default function MarketingFooter() {
  return (
    <footer id="footer" className="mkt-footer">
      <div className="mkt-container">
        <div className="mkt-footer-grid">
          <div className="mkt-footer-brand">
            <Link href="/" className="mkt-logo">
              <span className="mkt-logo-mark">CB</span>
              <span className="mkt-logo-name">CM Buddy</span>
            </Link>
            <p>CM Buddy is the powerful tool to reach your customers and convert your sales effortlessly.</p>
            <div className="mkt-social">
              <a href="#" aria-label="WhatsApp"><Icon name="whatsapp" size={17} /></a>
              <a href="#" aria-label="Facebook"><Icon name="globe" size={17} /></a>
              <a href="#" aria-label="Instagram"><Icon name="star" size={17} /></a>
            </div>
          </div>
          <div className="mkt-footer-col">
            <h4>Product</h4>
            <a href="/#features">Features</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#ai">AI Master</a>
            <a href={`${APP_URL}/login`}>Log in</a>
            <a href={`${APP_URL}/register`}>Sign up</a>
          </div>
          <div className="mkt-footer-col">
            <h4>Use Cases</h4>
            <Link href="/use-cases/ecommerce">E-commerce</Link>
            <Link href="/use-cases/healthcare">Healthcare</Link>
            <a href="/#industries">Real Estate</a>
            <Link href="/use-cases/education">Education</Link>
            <a href="/#industries">Retail</a>
            <a href="/#industries">Finance</a>
          </div>
          <div className="mkt-footer-col">
            <h4>Insights</h4>
            <Link href="/coexistence">WhatsApp Coexistence</Link>
            <Link href="/omnichannel">Omnichannel Messaging</Link>
          </div>
          <div className="mkt-footer-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <a href="#">Contact</a>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
          </div>
          <div className="mkt-footer-col">
            <h4>Contact</h4>
            <a href="mailto:support@cmbuddy.pk">support@cmbuddy.pk</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp Sales</a>
            <span className="mkt-footer-text">Lahore, Pakistan</span>
          </div>
        </div>
        <div className="mkt-footer-bottom">
          <span>CM Buddy © 2026, All rights reserved.</span>
          <span>WhatsApp name, logo, and changes are trademarks of their respective owners.</span>
        </div>
      </div>
    </footer>
  );
}