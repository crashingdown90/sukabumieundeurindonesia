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
      <nav className="container nav-container" style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "24px",
        position: "relative"
      }}>
        <a href="https://sukabumieundeurindonesia.com" style={{ display: "flex", alignItems: "center", zIndex: 1100 }}>
          <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "50px", width: "auto", filter: "invert(1)" }} priority />
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
          <div className="nav-links" style={{ fontSize: "0.95rem", letterSpacing: "1px", display: "flex", gap: "24px", alignItems: "center" }}>
            <a href="/" style={{ padding: "24px 0" }} onClick={() => setIsMobileMenuOpen(false)}>HOME</a>
            
            {/* ARTISTS DROPDOWN */}
            <div className="nav-item">
              <a href="/#catalog" onClick={(e) => toggleDropdown("artists", e)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                ARTISTS <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "artists" ? "rotate(180deg)" : "none" }}>▼</span>
              </a>
              <div className={`dropdown-mega-artists ${activeDropdown === "artists" ? "force-open" : ""}`}>
                <div className="dropdown-column">
                  <div className="dropdown-header">HIGHLIGHTED STORES</div>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Sukabumi Eundeur</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Reroute To Roots</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Total Aggression</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Sound Revival</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">#-F</div>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Avhath</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Beside</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Betrayer</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Bowlong</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Burgerkill</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>DeadSquad</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Death Vomit</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Down For Life</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Forgotten</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">G-P</div>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Hellcrust</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Humiliation</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Jasad</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Koil</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Noxa</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">Q-Z</div>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Repton</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Revenge The Fate</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Rosemary</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Rotor</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Seringai</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Siksakubur</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>St. Loco</a>
                  <a href="#" className="dropdown-link" style={{ fontSize: "0.85rem" }}>Straightout</a>
                </div>
              </div>
            </div>

            {/* SHOP MEGA MENU */}
            <div className="nav-item">
              <a href="/#catalog" onClick={(e) => toggleDropdown("shop", e)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                SHOP <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "shop" ? "rotate(180deg)" : "none" }}>▼</span>
              </a>
              <div className={`dropdown-mega ${activeDropdown === "shop" ? "force-open" : ""}`}>
                <div className="dropdown-column">
                  <a href="#" className="dropdown-header">CLEARANCE</a>
                  <a href="#" className="dropdown-header" style={{ marginTop: "16px" }}>ALL PRODUCTS</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">MUSIC</div>
                  <a href="#" className="dropdown-link">Vinyl</a>
                  <a href="#" className="dropdown-link">CDs</a>
                  <a href="#" className="dropdown-link">Cassettes</a>
                </div>
                <div className="dropdown-column">
                  <div className="dropdown-header">APPAREL</div>
                  <a href="#" className="dropdown-link">T-SHIRTS</a>
                  <a href="#" className="dropdown-link">OUTERWEAR</a>
                  <a href="#" className="dropdown-link">ACCESSORIES</a>
                </div>
              </div>
            </div>

            {/* HELP DROPDOWN */}
            <div className="nav-item">
              <a href="/faq" onClick={(e) => toggleDropdown("help", e)} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                HELP <span style={{ fontSize: "0.7rem", transition: "0.2s", transform: activeDropdown === "help" ? "rotate(180deg)" : "none" }}>▼</span>
              </a>
              <div className={`dropdown-menu ${activeDropdown === "help" ? "force-open" : ""}`}>
                <a href="/shipping" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>SHIPPING</a>
                <a href="/terms" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>TERMS & CONDITIONS</a>
                <a href="/faq" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              </div>
            </div>

            <a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="main-site-btn">MAIN SITE</a>
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
