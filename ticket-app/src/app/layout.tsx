import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sukabumi Eundeur - Official Ticket",
  description: "Beli tiket resmi event Sukabumi Eundeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)" }}>
        
        <Navbar />

        <main style={{ minHeight: "calc(100vh - 180px)" }}>
          {children}
        </main>

        <footer style={{ padding: "80px 24px 40px 24px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", borderTop: "4px solid var(--color-border)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "60px" }}>
            
            {/* Column 1: Brand */}
            <div style={{ paddingRight: "20px" }}>
              <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={200} height={80} style={{ objectFit: "contain", height: "60px", width: "auto", filter: "grayscale(1) invert(1) brightness(2)", marginBottom: "24px" }} />
              <p style={{ color: "var(--color-bg-secondary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Platform Tiket Resmi Sukabumi Eundeur. 100% Independent. Dukung pergerakan skena lokal dengan membeli tiket resmi.
              </p>
            </div>

            {/* Column 2: Navigasi Utama */}
            <details className="footer-details">
              <summary style={{ fontSize: "1.2rem", marginBottom: "8px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", outline: "none" }}>SITEMAP</summary>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Events</a></li>
                <li><a href="/my-tickets" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>My Tickets</a></li>
                <li><a href="/help" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Help & FAQ</a></li>
              </ul>
            </details>

            {/* Column 3: Portal Eksternal & Legal */}
            <details className="footer-details">
              <summary style={{ fontSize: "1.2rem", marginBottom: "8px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", outline: "none" }}>PORTAL & KEBIJAKAN</summary>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Main Site ↗</a></li>
                <li><a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Official Merchandise ↗</a></li>
                <li style={{ marginTop: "12px" }}><a href="https://news.sukabumieundeurindonesia.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)" }}>Privacy Policy</a></li>
                <li><a href="https://news.sukabumieundeurindonesia.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)" }}>Terms & Conditions</a></li>
              </ul>
            </details>

            {/* Column 4: Kontak */}
            <details className="footer-details">
              <summary style={{ fontSize: "1.2rem", marginBottom: "8px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", outline: "none" }}>CONTACT TICKETBOX</summary>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", color: "var(--color-bg-secondary)", fontSize: "0.95rem" }}>
                <li>Email: ticket@sukabumieundeurindonesia.com</li>
                <li>WA: +62 812 3456 7890</li>
              </ul>
            </details>

          </div>
          
          <div className="container" style={{ textAlign: "center", borderTop: "1px solid #333", paddingTop: "24px", color: "#888", fontSize: "0.9rem" }}>
            <p>&copy; {new Date().getFullYear()} Sukabumi Eundeur Indonesia. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
