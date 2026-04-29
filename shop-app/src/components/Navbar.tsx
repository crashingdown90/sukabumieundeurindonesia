"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
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
    <>
      <nav className="container nav-container" style={{ padding: "24px", borderBottom: "4px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", zIndex: 1100 }}>
          <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "50px", width: "auto", filter: "invert(1)" }} priority />
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
            
            <a href="/" style={{ padding: "24px 0", width: isMobileMenuOpen ? "100%" : "auto", borderBottom: isMobileMenuOpen ? "1px solid var(--color-border)" : "none" }} onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
            
            {/* ARTISTS DROPDOWN */}
            <div className="nav-item" style={{ width: isMobileMenuOpen ? "100%" : "auto" }}>
              <a href="/#catalog" onClick={(e) => toggleDropdown("artists", e)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                ARTISTS <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "artists" ? "rotate(180deg)" : "none" }}>▼</span>
              </a>
              <div className={`dropdown-mega-artists ${activeDropdown === "artists" ? "force-open" : ""}`} style={isMobileMenuOpen ? { padding: "16px 0", borderTop: "1px solid var(--color-border)", gap: "16px" } : { border: "4px solid var(--color-text-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
                <div className="dropdown-column">
                  <div className="dropdown-header">HIGHLIGHTED STORES</div>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>Sukabumi Eundeur</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>Reroute To Roots</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>Total Aggression</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>Sound Revival</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">#-F</div>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>Burgerkill</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>DeadSquad</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0" }}>Forgotten</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">G-P</div>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>Jasad</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>Koil</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0" }}>Noxa</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">Q-Z</div>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>Revenge The Fate</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>Seringai</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0" }}>Siksakubur</a>
                </div>
              </div>
            </div>

            {/* SHOP MEGA MENU */}
            <div className="nav-item" style={{ width: isMobileMenuOpen ? "100%" : "auto" }}>
              <a href="/#catalog" onClick={(e) => toggleDropdown("shop", e)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                SHOP <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "shop" ? "rotate(180deg)" : "none" }}>▼</span>
              </a>
              <div className={`dropdown-mega ${activeDropdown === "shop" ? "force-open" : ""}`} style={isMobileMenuOpen ? { padding: "16px 0", borderTop: "1px solid var(--color-border)", gap: "16px" } : { border: "4px solid var(--color-text-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
                <div className="dropdown-column">
                  <a href="#" className="dropdown-header">CLEARANCE</a>
                  <a href="#" className="dropdown-header" style={{ marginTop: "16px" }}>ALL PRODUCTS</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">MUSIC</div>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>Vinyl</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>CDs</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0" }}>Cassettes</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">APPAREL</div>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>T-SHIRTS</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>OUTERWEAR</a>
                  <a href="#" className="dropdown-link" style={{ padding: "8px 0" }}>ACCESSORIES</a>
                </div>
              </div>
            </div>

            {/* HELP DROPDOWN */}
            <div className="nav-item" style={{ width: isMobileMenuOpen ? "100%" : "auto" }}>
              <a href="/faq" onClick={(e) => toggleDropdown("help", e)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                HELP <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "help" ? "rotate(180deg)" : "none" }}>▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === "help" ? "force-open" : ""}`} style={isMobileMenuOpen ? { padding: "16px 0", borderTop: "1px solid var(--color-border)" } : { border: "4px solid var(--color-text-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
                <a href="/shipping" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>SHIPPING</a>
                <a href="/terms" className="dropdown-link" style={{ padding: "8px 0", borderBottom: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>TERMS & CONDITIONS</a>
                <a href="/faq" className="dropdown-link" style={{ padding: "8px 0" }} onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              </div>
            </div>

            <div className="nav-item" style={{ marginLeft: isMobileMenuOpen ? "0" : "auto", width: isMobileMenuOpen ? "100%" : "auto" }}>
              <a href="/login" style={{ padding: "8px 16px", fontSize: "1rem", border: "2px solid var(--color-text-primary)", fontWeight: "bold" }} onClick={() => setIsMobileMenuOpen(false)}>LOGIN / REGISTER</a>
            </div>

            {/* CROSS NAVIGATION */}
            <a href="https://www.sukabumieundeurindonesia.com" className="btn btn-primary main-site-btn" style={{ padding: "8px 16px", fontSize: "1rem" }} onClick={() => setIsMobileMenuOpen(false)}>BERITA</a>
            <a href="https://ticket.sukabumieundeurindonesia.com" className="btn btn-primary main-site-btn" style={{ padding: "8px 16px", fontSize: "1rem", backgroundColor: "transparent", color: "var(--color-text-primary)", border: "1px solid var(--color-border)" }} onClick={() => setIsMobileMenuOpen(false)}>BELI TIKET</a>
          </div>
        </div>
      </nav>

      {/* Marquee Running Text */}
      <div className="marquee-container">
        <div className="marquee-content">
          🔥 NEW COLLECTION 2024 🔥 SUPPORT YOUR LOCAL SCENE 🔥 100% INDEPENDENT 🔥 WORLDWIDE SHIPPING 🔥 100% PROFIT FOR THE MOVEMENT 🔥
        </div>
      </div>
    </>
  );
}
