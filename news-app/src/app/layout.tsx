import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

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
        
        {/* Navigation */}
        <nav className="container nav-container" style={{ padding: "24px", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "50px", width: "auto" }} priority />
          </a>
          <div className="nav-links" style={{ fontSize: "0.95rem", letterSpacing: "1px", display: "flex", gap: "24px", alignItems: "center", fontWeight: "bold", textTransform: "uppercase" }}>
            <a href="/">BERITA UTAMA</a>
            <a href="/gigs">GIGS</a>
            <a href="/review">REVIEW</a>
            <a href="/interview">INTERVIEW</a>
            <a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ borderLeft: "2px solid var(--color-text-primary)", paddingLeft: "16px" }}>MAIN SITE</a>
          </div>
        </nav>

        <main style={{ minHeight: "calc(100vh - 180px)" }}>
          {children}
        </main>

        <footer style={{ borderTop: "4px solid var(--color-text-primary)", padding: "40px 24px", marginTop: "80px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
          <div className="container" style={{ textAlign: "center", fontSize: "0.9rem" }}>
            <p><strong>SUKABUMI EUNDEUR NEWS</strong></p>
            <p style={{ marginTop: "8px" }}>© 2024. Suara Independen Bawah Tanah.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
