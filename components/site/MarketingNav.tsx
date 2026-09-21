"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "../ui/icons";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.cmbuddy.pk";

export default function MarketingNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="/#features">Features</a>
      <a href="/#pricing">Pricing</a>
      <a href="/#industries">Industries</a>
      <a href="/#faq">FAQ</a>
    </>
  );

  return (
    <header className="mkt-nav">
      <div className="mkt-container mkt-nav-inner">
        <Link href="/" className="mkt-logo">
          <span className="mkt-logo-mark">CB</span>
          <span className="mkt-logo-name">CM Buddy</span>
        </Link>

        <nav className="mkt-links" aria-label="Main">{navLinks}</nav>

        <div className="mkt-nav-actions">
          <a href={`${APP_URL}/login`} className="mkt-login">Log in</a>
          <a href={`${APP_URL}/register`} className="mkt-btn-primary">
            Start Free Trial <Icon name="arrow-right" size={15} />
          </a>
          <button className="mkt-burger" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mkt-mobile-links" aria-label="Mobile">
          <a href="/#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/#industries" onClick={() => setMenuOpen(false)}>Industries</a>
          <a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href={`${APP_URL}/login`} onClick={() => setMenuOpen(false)}>Log in</a>
          <a href={`${APP_URL}/register`} className="mkt-btn-primary" onClick={() => setMenuOpen(false)}>
            Start Free Trial
          </a>
        </nav>
      )}
    </header>
  );
}