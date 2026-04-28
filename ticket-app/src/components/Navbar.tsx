"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="container nav-container" style={{ padding: "24px", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
      <a href="/" style={{ display: "flex", alignItems: "center", zIndex: 1100 }}>
        <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "50px", width: "auto" }} priority />
      </a>

      {/* Hamburger Icon for Mobile */}
      <div 
        className="hamburger" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ cursor: "pointer", zIndex: 1100, padding: "8px" }}
      >
        <div style={{ width: "36px", height: "4px", backgroundColor: isMobileMenuOpen ? "var(--color-bg-primary)" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s", transform: isMobileMenuOpen ? "rotate(-45deg) translate(-6px, 8px)" : "none" }}></div>
        <div style={{ width: "36px", height: "4px", backgroundColor: isMobileMenuOpen ? "transparent" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s" }}></div>
        <div style={{ width: "36px", height: "4px", backgroundColor: isMobileMenuOpen ? "var(--color-bg-primary)" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s", transform: isMobileMenuOpen ? "rotate(45deg) translate(-6px, -8px)" : "none" }}></div>
      </div>

      {/* Desktop & Mobile Navigation Links */}
      <div className={`nav-links-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-links" style={{ fontSize: "0.95rem", letterSpacing: "1px", display: "flex", gap: "24px", alignItems: "center", fontWeight: "bold" }}>
          
          <div className="nav-item">
            <a href="/">BROWSE EVENTS ▾</a>
            <div className="dropdown-menu">
              <a href="/category/music-concerts" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>MUSIC & CONCERTS</a>
              <a href="/category/festivals" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>FESTIVALS</a>
              <a href="/category/underground-gigs" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>UNDERGROUND GIGS</a>
              <a href="/category/workshops" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>WORKSHOPS</a>
            </div>
          </div>

          <div className="nav-item">
            <a href="/my-tickets">MY TICKETS ▾</a>
            <div className="dropdown-menu">
              <a href="/my-tickets/active" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>ACTIVE TICKETS</a>
              <a href="/my-tickets/history" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>PURCHASE HISTORY</a>
              <a href="/my-tickets/payment" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>PAYMENT STATUS</a>
            </div>
          </div>

          <div className="nav-item">
            <a href="/help">SUPPORT ▾</a>
            <div className="dropdown-menu">
              <a href="/help/faq" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>FAQ & HELP CENTER</a>
              <a href="/help/refund" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>REFUND POLICY</a>
              <a href="/help/contact" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>CONTACT PROMOTER</a>
            </div>
          </div>

          <a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary main-site-btn" style={{ padding: "8px 16px", fontSize: "1rem" }} onClick={() => setIsMobileMenuOpen(false)}>MAIN SITE</a>
        </div>
      </div>
    </nav>
  );
}
