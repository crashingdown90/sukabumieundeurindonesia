export default function NewsHome() {
  return (
    <>
      {/* Ticker / Breaking News */}
      <div className="marquee-container" style={{ display: "flex", alignItems: "center", padding: 0, marginTop: "88px" }}>
        <div style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", padding: "12px 24px", fontWeight: "bold", zIndex: 10, position: "relative", borderRight: "1px solid var(--color-border)" }}>
          BREAKING
        </div>
        <div style={{ overflow: "hidden", flex: 1, padding: "12px 0" }}>
          <div className="marquee-content" style={{ paddingLeft: "100%" }}>
            SUKABUMI EUNDEUR FESTIVAL 2026 SEGERA DIUMUMKAN! PERSIAPKAN DIRI KALIAN UNTUK DISTORSI TERBESAR DALAM SEJARAH PERGERAKAN BAWAH TANAH SUKABUMI.
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "40px 24px" }}>
        
        {/* Editorial Header */}
        <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "40px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: "0.9", letterSpacing: "-2px" }}>THE HEADLINE</h1>
          <p style={{ fontSize: "1.2rem", fontWeight: "500", marginTop: "16px", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>EDISI: V.01 / KABAR BAWAH TANAH</p>
        </div>

        {/* Top Story - Newspaper Style */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginBottom: "80px" }}>
          <div style={{ borderRight: "1px solid var(--color-border)", paddingRight: "40px" }}>
            <h2 style={{ fontSize: "3.5rem", lineHeight: "1", marginBottom: "24px" }}>KEBANGKITAN SKENA LOKAL PASCA PANDEMI</h2>
            <div style={{ display: "flex", gap: "16px", fontSize: "0.9rem", fontWeight: "bold", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "8px 0", marginBottom: "24px", color: "var(--color-text-secondary)" }}>
              <span>Oleh: REDAKSI</span>
              <span>•</span>
              <span>28 APRIL 2024</span>
            </div>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Lebih dari sekadar hingar bingar musik keras, skena underground Sukabumi membuktikan ketangguhannya. Ratusan kolektif mulai kembali merapatkan barisan, menggelar gigs mandiri di berbagai sudut kota tanpa sponsor korporat. Ini adalah bukti bahwa semangat Do It Yourself (DIY) tidak pernah benar-benar mati.
            </p>
            <a href="/artikel/kebangkitan-skena" className="btn btn-primary" style={{ borderRadius: "0" }}>BACA SELENGKAPNYA</a>
          </div>

          <div style={{ 
            minHeight: "400px", 
            backgroundImage: "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            filter: "grayscale(100%) contrast(130%) brightness(0.7)",
            border: "1px solid var(--color-border)"
          }}>
          </div>
        </div>

        {/* Grid Articles */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "32px" }}>BERITA TERKINI</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px" }}>
            
            {/* Article 1 - Metalhead Health */}
            <a href="/artikel/metalhead-kesehatan" style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
              <div style={{ padding: "0" }}>
                <div style={{ height: "200px", backgroundImage: "url('/metalhead-health.png')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%) brightness(0.8)" }}></div>
                <div style={{ padding: "24px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>SAINS & MUSIK</span>
                  <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>Metalhead Boleh Bangga! Ternyata, Musik Cadas Punya Pengaruh Positif Buat Kesehatan!</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Penelitian dari Universitas Manchester membuktikan bahwa musik keras melatih ketajaman berpikir.</p>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="#" style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
              <div style={{ padding: "0" }}>
                <div style={{ height: "200px", backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) brightness(0.7)" }}></div>
                <div style={{ padding: "24px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>REVIEW ALBUM</span>
                  <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>Membedah Album Terbaru &apos;Total Aggression&apos;</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Riff gitar super cepat dengan lirik penuh amarah sosial.</p>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="#" style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
              <div style={{ padding: "0" }}>
                <div style={{ height: "200px", backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a1a2a5f014e3?q=80&w=800&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) brightness(0.7)" }}></div>
                <div style={{ padding: "24px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>INTERVIEW</span>
                  <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>Eksklusif: Di Balik Dapur Rekaman Burgerkill</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Obrolan santai bersama para dedengkot metal tanah air.</p>
                </div>
              </div>
            </a>

          </div>
        </div>

      </div>
    </>
  );
}
