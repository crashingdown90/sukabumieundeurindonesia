import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sukabumi Eundeur - Official Merchandise",
  description: "Official merchandise store of Sukabumi Eundeur Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <nav className="nav-container" style={{ padding: "24px", borderBottom: "1px solid var(--color-border)" }}>
          <a href="https://sukabumieundeurindonesia.com" style={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo-sukabumi.png" alt="Sukabumi Eundeur Logo" width={250} height={80} style={{ objectFit: "contain", height: "60px", width: "auto" }} priority />
          </a>
          <div className="nav-links" style={{ fontSize: "0.95rem", letterSpacing: "1px" }}>
            <a href="/">HOME</a>
            <a href="/#catalog">STORES / ARTISTS</a>
            <a href="/#catalog">CLOTHING</a>
            <a href="/#catalog">ACCESSORIES</a>
            <a href="/shipping">SHIPPING</a>
            <a href="https://sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ borderLeft: "2px solid var(--color-text-primary)", paddingLeft: "16px", marginLeft: "8px" }}>MAIN SITE</a>
          </div>
        </nav>
        
        {/* Marquee Running Text */}
        <div className="marquee-container">
          <div className="marquee-content">
            🔥 NEW COLLECTION 2024 🔥 SUPPORT YOUR LOCAL SCENE 🔥 100% INDEPENDENT 🔥 WORLDWIDE SHIPPING 🔥 100% PROFIT FOR THE MOVEMENT 🔥
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
                Official Merchandise Store. Support pergerakan independen Sukabumi Eundeur dengan membeli produk original.
              </p>
            </div>

            {/* Column 2: Navigasi Toko */}
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "24px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", display: "inline-block" }}>SHOP</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>All Products</a></li>
                <li><a href="/t-shirts" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>T-Shirts</a></li>
                <li><a href="/accessories" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Accessories</a></li>
              </ul>
            </div>

            {/* Column 3: Bantuan */}
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "24px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", display: "inline-block" }}>SUPPORT</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem" }}>
                <li><a href="/shipping" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Shipping & Returns</a></li>
                <li><a href="/faq" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>FAQ</a></li>
                <li><a href="/terms" style={{ color: "var(--color-bg-secondary)", textDecoration: "none" }}>Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4: Kontak */}
            <div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "24px", letterSpacing: "1px", borderBottom: "2px solid var(--color-bg-secondary)", paddingBottom: "8px", display: "inline-block" }}>CONTACT</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", color: "var(--color-bg-secondary)", fontSize: "0.95rem" }}>
                <li>Email: store@sukabumieundeurindonesia.com</li>
                <li>WA: +62 812 3456 7890</li>
                <li><a href="https://instagram.com/sukabumieundeur" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-bg-primary)", fontWeight: "bold", textDecoration: "underline" }}>Instagram</a></li>
              </ul>
            </div>

          </div>
          
          <div className="container" style={{ textAlign: "center", borderTop: "1px solid #333", paddingTop: "24px", color: "#888", fontSize: "0.9rem" }}>
            <p>&copy; {new Date().getFullYear()} Sukabumi Eundeur Official Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
