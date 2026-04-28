import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sukabumi Eundeur Indonesia",
  description: "Website resmi Sukabumi Eundeur Indonesia - Komunitas Musik Metal & Rock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        
        <Navbar />

        {/* Marquee Running Text */}
        <div className="marquee-container">
          <div className="marquee-content">
            🔥 SUPPORT YOUR LOCAL SCENE 🔥 100% INDEPENDENT 🔥 SUKABUMI EUNDEUR INDONESIA 🔥 UNDERGROUND MOVEMENT SINCE 2000 🔥
          </div>
        </div>

        <main style={{ minHeight: "calc(100vh - 180px)" }}>
          {children}
        </main>
        <footer style={{ padding: "80px 24px 40px 24px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", borderTop: "4px solid var(--color-border)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "60px" }}>
            
            {/* Column 1: Brand */}
            <div style={{ paddingRight: "20px" }}>
              <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={200} height={80} style={{ objectFit: "contain", height: "60px", width: "auto", filter: "grayscale(1) invert(1) brightness(2)", marginBottom: "24px" }} />
              <p style={{ color: "var(--color-bg-secondary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Episentrum pergerakan musik independen Sukabumi. Menyatukan distorsi, energi, dan semangat solidaritas dalam satu frekuensi sejak tahun 2000.
              </p>
            </div>

            {/* Column 2: Navigasi Utama */}
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "24px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", display: "inline-block" }}>SITEMAP</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Home</a></li>
                <li><a href="/about" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>About Us</a></li>
                <li><a href="/biography" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Biography</a></li>
                <li><a href="/events" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Events & Gigs</a></li>
              </ul>
            </div>

            {/* Column 3: Portal Eksternal & Legal */}
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "24px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", display: "inline-block" }}>PORTAL & KEBIJAKAN</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="https://news.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>News & Article ↗</a></li>
                <li><a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Official Merchandise ↗</a></li>
                <li><a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Ticket Online ↗</a></li>
                <li style={{ marginTop: "12px" }}><a href="https://news.sukabumieundeurindonesia.com/privacy-policy" style={{ color: "var(--color-bg-secondary)" }}>Privacy Policy</a></li>
                <li><a href="https://news.sukabumieundeurindonesia.com/terms" style={{ color: "var(--color-bg-secondary)" }}>Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Kontak */}
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "24px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", display: "inline-block" }}>CONTACT</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", color: "var(--color-bg-secondary)", fontSize: "0.95rem" }}>
                <li>Email: info@sukabumieundeurindonesia.com</li>
                <li>WA: +62 812 3456 7890</li>
                <li><a href="https://instagram.com/sukabumieundeur" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-primary)", fontWeight: "bold", textDecoration: "underline" }}>Instagram</a></li>
              </ul>
            </div>

          </div>
          
          <div className="container" style={{ textAlign: "center", borderTop: "1px solid #333", paddingTop: "24px", color: "#888", fontSize: "0.9rem" }}>
            <p>&copy; {new Date().getFullYear()} Sukabumi Eundeur Indonesia. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
