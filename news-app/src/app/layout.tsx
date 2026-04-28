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
                Portal jurnalistik independen yang mendokumentasikan pergerakan musik bawah tanah, gigs lokal, dan kultur ekstrem di Sukabumi dan sekitarnya.
              </p>
            </div>

            {/* Column 2: Informasi */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-1" className="footer-toggle" />
              <label htmlFor="footer-toggle-1" className="footer-summary" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>INFORMASI</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/about" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">About Us</a></li>
                <li><a href="/contact" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Contact</a></li>
                <li><a href="/pedoman-media-siber" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Pedoman Media Siber</a></li>
              </ul>
            </div>

            {/* Column 3: Kebijakan */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-2" className="footer-toggle" />
              <label htmlFor="footer-toggle-2" className="footer-summary" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>KEBIJAKAN</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/privacy-policy" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Privacy Policy</a></li>
                <li><a href="/disclaimer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Disclaimer</a></li>
                <li><a href="/terms" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Portal */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-3" className="footer-toggle" />
              <label htmlFor="footer-toggle-3" className="footer-summary" style={{ borderBottomColor: "rgba(255,255,255,0.1)" }}>PORTAL</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Main Site ↗</a></li>
                <li><a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Ticket Online ↗</a></li>
                <li><a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }} className="hover-opacity">Merchandise ↗</a></li>
              </ul>
            </div>

          </div>

          <div className="container" style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
            <p>© {new Date().getFullYear()} SUKABUMI EUNDEUR INDONESIA. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
