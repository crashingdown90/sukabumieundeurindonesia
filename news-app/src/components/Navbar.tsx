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
        style={{ cursor: "pointer", zIndex: 1100 }}
      >
        <div style={{ width: "30px", height: "3px", backgroundColor: isMobileMenuOpen ? "var(--color-bg-primary)" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s", transform: isMobileMenuOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none" }}></div>
        <div style={{ width: "30px", height: "3px", backgroundColor: isMobileMenuOpen ? "transparent" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s" }}></div>
        <div style={{ width: "30px", height: "3px", backgroundColor: isMobileMenuOpen ? "var(--color-bg-primary)" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s", transform: isMobileMenuOpen ? "rotate(45deg) translate(-5px, -6px)" : "none" }}></div>
      </div>

      {/* Desktop & Mobile Navigation Links */}
      <div className={`nav-links-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-links" style={{ fontSize: "0.95rem", letterSpacing: "1px", display: "flex", gap: "24px", alignItems: "center", fontWeight: "bold", textTransform: "uppercase" }}>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}>BERITA UTAMA</a>
          <a href="/gigs" onClick={() => setIsMobileMenuOpen(false)}>GIGS</a>
          <a href="/review" onClick={() => setIsMobileMenuOpen(false)}>REVIEW</a>
          <a href="/interview" onClick={() => setIsMobileMenuOpen(false)}>INTERVIEW</a>
          <a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="main-site-btn" onClick={() => setIsMobileMenuOpen(false)}>MAIN SITE</a>
        </div>
      </div>
    </nav>
  );
}
