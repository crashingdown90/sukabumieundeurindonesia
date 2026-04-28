export default function NewsHome() {
  return (
    <>
      {/* Ticker / Breaking News */}
      <div style={{ width: "100%", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "12px 24px", fontFamily: "var(--font-heading)", letterSpacing: "1px", fontSize: "0.9rem", display: "flex", alignItems: "center" }}>
        <span style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", padding: "2px 8px", marginRight: "16px", fontWeight: "bold" }}>BREAKING</span>
        <marquee>SUKABUMI EUNDEUR FESTIVAL 2024 RESMI DIGELAR BULAN AGUSTUS! TIKET PRESALE 1 SOLD OUT DALAM 2 JAM. BURGERKILL DAN DEADSQUAD DIPASTIKAN JADI HEADLINER.</marquee>
      </div>

      <div className="container" style={{ padding: "40px 24px" }}>
        
        {/* Editorial Header */}
        <div style={{ borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "24px", marginBottom: "40px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: "0.9", letterSpacing: "-2px" }}>THE HEADLINE</h1>
          <p style={{ fontSize: "1.2rem", fontWeight: "500", marginTop: "16px", letterSpacing: "1px" }}>EDISI: V.01 / KABAR BAWAH TANAH</p>
        </div>

        {/* Top Story - Newspaper Style */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginBottom: "80px" }}>
          <div style={{ borderRight: "2px solid var(--color-text-primary)", paddingRight: "40px" }}>
            <h2 style={{ fontSize: "3.5rem", lineHeight: "1", marginBottom: "24px" }}>KEBANGKITAN SKENA LOKAL PASCA PANDEMI</h2>
            <div style={{ display: "flex", gap: "16px", fontSize: "0.9rem", fontWeight: "bold", borderTop: "2px solid var(--color-text-primary)", borderBottom: "2px solid var(--color-text-primary)", padding: "8px 0", marginBottom: "24px" }}>
              <span>Oleh: REDAKSI</span>
              <span>•</span>
              <span>28 APRIL 2024</span>
            </div>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Lebih dari sekadar hingar bingar musik keras, skena underground Sukabumi membuktikan ketangguhannya. Ratusan kolektif mulai kembali merapatkan barisan, menggelar gigs mandiri di berbagai sudut kota tanpa sponsor korporat. Ini adalah bukti bahwa semangat Do It Yourself (DIY) tidak pernah benar-benar mati.
            </p>
            <a href="/artikel/kebangkitan-skena" className="btn btn-primary">BACA SELENGKAPNYA</a>
          </div>

          <div style={{ 
            minHeight: "400px", 
            backgroundImage: "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            filter: "grayscale(100%) contrast(130%)",
            border: "4px solid var(--color-text-primary)"
          }}>
          </div>
        </div>

        {/* Grid Articles */}
        <div style={{ borderTop: "4px solid var(--color-text-primary)", paddingTop: "40px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "32px" }}>BERITA TERKINI</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px" }}>
            
            {/* Article 1 - Metalhead Health */}
            <a href="/artikel/metalhead-kesehatan" style={{ display: "block", textDecoration: "none", color: "inherit", group: "true" }} className="product-card">
              <div style={{ height: "200px", backgroundImage: "url('/metalhead-health.png')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%)", border: "2px solid var(--color-text-primary)", marginBottom: "16px" }}></div>
              <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-text-primary)" }}>SAINS & MUSIK</span>
              <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>Metalhead Boleh Bangga! Ternyata, Musik Cadas Punya Pengaruh Positif Buat Kesehatan!</h4>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Penelitian dari Universitas Manchester membuktikan bahwa musik keras melatih ketajaman berpikir.</p>
            </a>

            {/* Article 2 */}
            <a href="#" style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
              <div style={{ height: "200px", backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)", border: "2px solid var(--color-text-primary)", marginBottom: "16px" }}></div>
              <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-text-primary)" }}>REVIEW ALBUM</span>
              <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>Membedah Album Terbaru 'Total Aggression'</h4>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Riff gitar super cepat dengan lirik penuh amarah sosial.</p>
            </a>

            {/* Article 3 */}
            <a href="#" style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
              <div style={{ height: "200px", backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a1a2a5f014e3?q=80&w=800&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)", border: "2px solid var(--color-text-primary)", marginBottom: "16px" }}></div>
              <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-text-primary)" }}>INTERVIEW</span>
              <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>Eksklusif: Di Balik Dapur Rekaman Burgerkill</h4>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Obrolan santai bersama para dedengkot metal tanah air.</p>
            </a>

          </div>
        </div>

      </div>
    </>
  );
}
