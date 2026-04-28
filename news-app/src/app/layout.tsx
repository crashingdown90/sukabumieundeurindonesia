import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sukabumi Eundeur News - Portal Berita Underground & Komunitas",
  description: "Portal jurnalistik independen yang mendokumentasikan pergerakan musik bawah tanah, gigs lokal, review album, dan kultur ekstrem di Sukabumi dan sekitarnya.",
  keywords: "berita underground, gigs sukabumi, review album metal, interview band lokal, skena musik sukabumi",
  openGraph: {
    title: "Sukabumi Eundeur News",
    description: "Portal berita underground, review album, interview band, dan gigs lokal Sukabumi.",
    url: "https://news.sukabumieundeurindonesia.com",
    siteName: "Sukabumi Eundeur News",
    type: "website",
  },
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

        <footer style={{ borderTop: "4px solid var(--color-text-primary)", padding: "80px 24px 40px", marginTop: "80px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "60px" }}>
            
            {/* Column 1: Brand */}
            <div style={{ paddingRight: "20px" }}>
              <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={200} height={80} style={{ objectFit: "contain", height: "60px", width: "auto", filter: "grayscale(1) invert(1) brightness(2)", marginBottom: "24px" }} />
              <p style={{ color: "var(--color-bg-secondary)", lineHeight: "1.6", fontSize: "0.95rem" }}>
                Portal jurnalistik independen yang mendokumentasikan pergerakan musik bawah tanah, gigs lokal, dan kultur ekstrem di Sukabumi dan sekitarnya.
              </p>
            </div>

            {/* Column 2: Informasi */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-1" className="footer-toggle" />
              <label htmlFor="footer-toggle-1" className="footer-summary">INFORMASI</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/about" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>About Us</a></li>
                <li><a href="/contact" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Contact</a></li>
                <li><a href="/pedoman-media-siber" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Pedoman Media Siber</a></li>
              </ul>
            </div>

            {/* Column 3: Kebijakan */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-2" className="footer-toggle" />
              <label htmlFor="footer-toggle-2" className="footer-summary">KEBIJAKAN</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/privacy-policy" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Privacy Policy</a></li>
                <li><a href="/disclaimer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Disclaimer</a></li>
                <li><a href="/terms" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Portal */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-3" className="footer-toggle" />
              <label htmlFor="footer-toggle-3" className="footer-summary">PORTAL</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Main Site ↗</a></li>
                <li><a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Ticket Online ↗</a></li>
                <li><a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Merchandise ↗</a></li>
              </ul>
            </div>

          </div>

          <div className="container" style={{ textAlign: "center", borderTop: "1px solid #333", paddingTop: "24px", color: "#888", fontSize: "0.9rem" }}>
            <p>© {new Date().getFullYear()} SUKABUMI EUNDEUR INDONESIA. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
