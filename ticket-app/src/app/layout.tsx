import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Beli Tiket Resmi Sukabumi Eundeur Festival 2024 - Official Ticket",
  description: "Platform resmi pembelian tiket untuk semua event, gigs, dan festival musik keras bawah tanah yang diselenggarakan oleh Sukabumi Eundeur Indonesia. 100% aman dan terpercaya.",
  keywords: "tiket konser sukabumi, tiket sukabumi eundeur, tiket burgerkill, tiket deadsquad, festival metal sukabumi, gigs underground, tiket online",
  openGraph: {
    title: "Beli Tiket Resmi Sukabumi Eundeur Festival 2024",
    description: "Platform resmi pembelian tiket event Sukabumi Eundeur Indonesia.",
    url: "https://ticket.sukabumieundeurindonesia.com",
    siteName: "Sukabumi Eundeur Ticket",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google AdSense Integration */}
        <meta name="google-adsense-account" content="ca-pub-1234567890123456" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
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
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-1" className="footer-toggle" />
              <label htmlFor="footer-toggle-1" className="footer-summary">SITEMAP</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Events</a></li>
                <li><a href="/my-tickets" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>My Tickets</a></li>
                <li><a href="/help" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Help & FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Portal Eksternal & Legal */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-2" className="footer-toggle" />
              <label htmlFor="footer-toggle-2" className="footer-summary">PORTAL & KEBIJAKAN</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Main Site ↗</a></li>
                <li><a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Official Merchandise ↗</a></li>
                <li style={{ marginTop: "12px" }}><a href="https://news.sukabumieundeurindonesia.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)" }}>Privacy Policy</a></li>
                <li><a href="https://news.sukabumieundeurindonesia.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-secondary)" }}>Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Kontak */}
            <div className="footer-accordion">
              <input type="checkbox" id="footer-toggle-3" className="footer-toggle" />
              <label htmlFor="footer-toggle-3" className="footer-summary">CONTACT TICKETBOX</label>
              <ul className="footer-content" style={{ listStyle: "none", padding: 0, flexDirection: "column", gap: "12px", color: "var(--color-bg-secondary)", fontSize: "0.95rem" }}>
                <li>Email: ticket@sukabumieundeurindonesia.com</li>
                <li>WA: +62 812 3456 7890</li>
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
