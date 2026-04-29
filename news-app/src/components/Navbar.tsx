"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      width: "100%", 
      zIndex: 1000, 
      padding: scrolled ? "12px 0" : "24px 0",
      backgroundColor: scrolled ? "rgba(5, 5, 5, 0.7)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
      transition: "all 0.3s ease-in-out" 
    }}>
      <div className="container nav-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", zIndex: 1100 }}>
          <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "40px", width: "auto", filter: "invert(1)" }} priority />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div 
          className="hamburger" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ cursor: "pointer", zIndex: 1100, padding: "8px" }}
        >
          <div style={{ width: "30px", height: "3px", backgroundColor: "var(--color-text-primary)", margin: "6px 0", transition: "0.4s", transform: isMobileMenuOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none" }}></div>
          <div style={{ width: "30px", height: "3px", backgroundColor: isMobileMenuOpen ? "transparent" : "var(--color-text-primary)", margin: "6px 0", transition: "0.4s" }}></div>
          <div style={{ width: "30px", height: "3px", backgroundColor: "var(--color-text-primary)", margin: "6px 0", transition: "0.4s", transform: isMobileMenuOpen ? "rotate(45deg) translate(-5px, -6px)" : "none" }}></div>
        </div>

        {/* Desktop & Mobile Navigation Links */}
        <div className={`nav-links-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-links" style={{ fontSize: "0.95rem", letterSpacing: "1px", display: "flex", gap: "24px", alignItems: "center", fontWeight: "600" }}>
            
            <div className="nav-item">
              <Link href="/" className="hover-opacity">BERITA ▾</Link>
              <div className="dropdown-menu">
                <Link href="/" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>BERITA UTAMA</Link>
                <Link href="/kategori/sains-musik" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>SAINS & MUSIK</Link>
                <Link href="/kategori/skena-lokal" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>SKENA LOKAL</Link>
              </div>
            </div>

            <Link href="/kategori/gigs" className="hover-opacity" onClick={() => setIsMobileMenuOpen(false)}>GIGS</Link>
            <Link href="/kategori/review-album" className="hover-opacity" onClick={() => setIsMobileMenuOpen(false)}>REVIEW</Link>
            <Link href="/kategori/interview" className="hover-opacity" onClick={() => setIsMobileMenuOpen(false)}>INTERVIEW</Link>
            {/* CROSS NAVIGATION */}
            <Link href="https://shop.sukabumieundeurindonesia.com" className="hover-opacity main-site-btn" style={{ padding: "8px 20px", fontSize: "0.9rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)" }} onClick={() => setIsMobileMenuOpen(false)}>MERCH</Link>
            <Link href="https://ticket.sukabumieundeurindonesia.com" className="hover-opacity main-site-btn" style={{ padding: "8px 20px", fontSize: "0.9rem", borderRadius: "20px", border: "1px solid var(--color-primary)", background: "var(--color-primary)", color: "var(--color-bg-primary)" }} onClick={() => setIsMobileMenuOpen(false)}>BELI TIKET</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
