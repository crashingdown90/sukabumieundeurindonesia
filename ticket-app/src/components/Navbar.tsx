"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <nav className="container nav-container" style={{ padding: "24px", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", zIndex: 1100 }}>
        <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "50px", width: "auto", filter: "invert(1)" }} priority />
      </Link>

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
            <Link href="/" onClick={(e) => toggleDropdown("events", e as any)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              BROWSE EVENTS <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "events" ? "rotate(180deg)" : "none" }}>▼</span>
            </Link>
            <div className={`dropdown-menu ${activeDropdown === "events" ? "force-open" : ""}`}>
              <Link href="/category/music-concerts" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>MUSIC & CONCERTS</Link>
              <Link href="/category/festivals" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>FESTIVALS</Link>
              <Link href="/category/underground-gigs" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>UNDERGROUND GIGS</Link>
              <Link href="/category/workshops" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>WORKSHOPS</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link href="/my-tickets" onClick={(e) => toggleDropdown("tickets", e as any)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              MY TICKETS <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "tickets" ? "rotate(180deg)" : "none" }}>▼</span>
            </Link>
            <div className={`dropdown-menu ${activeDropdown === "tickets" ? "force-open" : ""}`}>
              <Link href="/my-tickets/active" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>ACTIVE TICKETS</Link>
              <Link href="/my-tickets/history" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>PURCHASE HISTORY</Link>
              <Link href="/my-tickets/payment" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>PAYMENT STATUS</Link>
            </div>
          </div>

          <div className="nav-item">
            <Link href="/help" onClick={(e) => toggleDropdown("help", e as any)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              SUPPORT <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "help" ? "rotate(180deg)" : "none" }}>▼</span>
            </Link>
            <div className={`dropdown-menu ${activeDropdown === "help" ? "force-open" : ""}`}>
              <Link href="/help/faq" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>FAQ & HELP CENTER</Link>
              <Link href="/help/refund" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>REFUND POLICY</Link>
              <Link href="/help/contact" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>CONTACT PROMOTER</Link>
            </div>
          </div>

          <div className="nav-item" style={{ marginLeft: "auto", marginRight: "12px" }}>
            <Link href="/login" style={{ padding: "8px 16px", fontSize: "1rem", border: "2px solid var(--color-text-primary)", fontWeight: "bold" }} onClick={() => setIsMobileMenuOpen(false)}>LOGIN / REGISTER</Link>
          </div>

          <Link href="https://www.sukabumieundeurindonesia.com" className="btn btn-primary main-site-btn" style={{ padding: "8px 16px", fontSize: "1rem" }} onClick={() => setIsMobileMenuOpen(false)}>BERITA</Link>
          <Link href="https://shop.sukabumieundeurindonesia.com" className="btn btn-primary main-site-btn" style={{ padding: "8px 16px", fontSize: "1rem", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", border: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>MERCH</Link>
        </div>
      </div>
    </nav>
  );
}
