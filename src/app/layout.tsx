import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sukabumi Eundeur Indonesia",
  description: "Website resmi Sukabumi Eundeur Indonesia - Komunitas Musik Metal & Rock",
  verification: {
    google: "9yWnWHR-ZcG9FN-0YqUQjrd1WcigetavwhtgHSpB6Pk",
  },
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



        <main style={{ minHeight: "calc(100vh - 180px)" }}>
          {children}
        </main>
        <footer style={{ padding: "80px 24px 40px 24px", backgroundColor: "#0a0a0a", color: "var(--color-text-primary)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "60px" }}>
            
            {/* Column 1: Brand */}
            <div style={{ paddingRight: "20px" }}>
              <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={200} height={80} style={{ objectFit: "contain", height: "60px", width: "auto", filter: "invert(1)", marginBottom: "24px", opacity: 0.9 }} />
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Episentrum pergerakan musik independen Sukabumi. Menyatukan distorsi, energi, dan semangat solidaritas dalam satu frekuensi sejak tahun 2000.
              </p>
            </div>

            {/* Column 2: Navigasi Utama */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-1" className="footer-toggle" />
              <label htmlFor="footer-toggle-1" className="footer-summary" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>SITEMAP</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Home</a></li>
                <li><a href="/about" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">About Us</a></li>
                <li><a href="/biography" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Biography</a></li>
                <li><a href="/events" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Events & Gigs</a></li>
              </ul>
            </div>

            {/* Column 3: Portal Eksternal & Legal */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-2" className="footer-toggle" />
              <label htmlFor="footer-toggle-2" className="footer-summary" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>PORTAL & KEBIJAKAN</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="https://news.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">News & Article ↗</a></li>
                <li><a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Official Merchandise ↗</a></li>
                <li><a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Ticket Online ↗</a></li>
                <li style={{ marginTop: "12px" }}><a href="https://news.sukabumieundeurindonesia.com/privacy-policy" style={{ color: "var(--color-text-secondary)" }} className="hover-opacity">Privacy Policy</a></li>
                <li><a href="https://news.sukabumieundeurindonesia.com/terms" style={{ color: "var(--color-text-secondary)" }} className="hover-opacity">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Kontak */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-3" className="footer-toggle" />
              <label htmlFor="footer-toggle-3" className="footer-summary" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>CONTACT</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "16px", color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                <li>Email: info@sukabumieundeurindonesia.com</li>
                <li>WA: +62 812 3456 7890</li>
                <li style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                  <a href="https://instagram.com/sukabumieundeur" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }} className="hover-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span style={{ fontWeight: "bold" }}>Instagram</span>
                  </a>
                  <a href="https://facebook.com/sukabumieundeur" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }} className="hover-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                    <span style={{ fontWeight: "bold" }}>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="container" style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
            <p>&copy; {new Date().getFullYear()} Sukabumi Eundeur Indonesia. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
