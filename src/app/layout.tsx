import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

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
        <nav style={{ padding: "24px", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "24px", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "60px", width: "auto" }} priority />
          </a>
          <div style={{ display: "flex", gap: "24px", alignItems: "center", fontWeight: "500" }}>
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/biography">BIOGRAPHY</a>
            <a href="/events">EVENTS</a>
            <a href="https://news.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer">NEWS</a>
            <a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer">SHOP</a>
            <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "1rem" }}>TICKETS</a>
          </div>
        </nav>
        <main style={{ minHeight: "calc(100vh - 180px)" }}>
          {children}
        </main>
        <footer style={{ padding: "48px 24px", textAlign: "center", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={200} height={80} style={{ objectFit: "contain", height: "80px", width: "auto", filter: "grayscale(1) invert(1) brightness(2)" }} />
          </div>
          <p style={{ color: "var(--color-text-secondary)" }}>&copy; {new Date().getFullYear()} Sukabumi Eundeur Indonesia. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
