import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Sukabumi Eundeur News - Berita Gigs & Komunitas",
  description: "Portal berita underground, review album, dan gigs lokal Sukabumi.",
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

        <footer style={{ borderTop: "4px solid var(--color-text-primary)", padding: "60px 24px 40px", marginTop: "80px", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)" }}>
          <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "40px", marginBottom: "40px" }}>
            <div style={{ flex: "1 1 300px" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>SUKABUMI EUNDEUR NEWS</h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
                Portal jurnalistik independen yang mendokumentasikan pergerakan musik bawah tanah, gigs lokal, dan kultur ekstrem di Sukabumi dan sekitarnya.
              </p>
            </div>
            
            <div style={{ flex: "1 1 200px" }}>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "16px", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "8px", display: "inline-block" }}>INFORMASI</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="/about" style={{ fontWeight: "500" }}>About Us</a></li>
                <li><a href="/contact" style={{ fontWeight: "500" }}>Contact</a></li>
                <li><a href="/pedoman-media-siber" style={{ fontWeight: "500" }}>Pedoman Media Siber</a></li>
              </ul>
            </div>

            <div style={{ flex: "1 1 200px" }}>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "16px", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "8px", display: "inline-block" }}>KEBIJAKAN</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="/privacy-policy" style={{ fontWeight: "500" }}>Privacy Policy</a></li>
                <li><a href="/disclaimer" style={{ fontWeight: "500" }}>Disclaimer</a></li>
                <li><a href="/terms" style={{ fontWeight: "500" }}>Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="container" style={{ textAlign: "center", borderTop: "1px solid var(--color-border)", paddingTop: "24px", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
            <p>© {new Date().getFullYear()} SUKABUMI EUNDEUR INDONESIA. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
