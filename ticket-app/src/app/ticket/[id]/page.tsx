export async function generateMetadata() {
  return {
    title: "SUKABUMI EUNDEUR FESTIVAL 2024 | Beli Tiket Resmi",
    description: "Beli tiket Sukabumi Eundeur Festival 2024. Saksikan Burgerkill, DeadSquad, Rosemary, Jasad, dan banyak lagi secara live.",
  };
}

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const ticketId = resolvedParams.id;

  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container" style={{ padding: "40px 24px" }}>
          <a href="/" style={{ fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)", textDecoration: "none" }}>← KEMBALI KE DAFTAR EVENT</a>
        </div>
      </div>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          
          {/* Left Column: Image & Details */}
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ width: "100%", height: "400px", backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%)", border: "1px solid var(--color-border)", marginBottom: "40px" }}></div>
            
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>SUKABUMI EUNDEUR FESTIVAL 2024</h2>
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px", fontSize: "0.8rem", fontWeight: "bold", color: "var(--color-bg-primary)", fontFamily: "var(--font-heading)", flexWrap: "wrap" }}>
              <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>12 AGUSTUS 2024</span>
              <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>GOR MERDEKA SUKABUMI</span>
            </div>

            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
              Festival musik bawah tanah terbesar di Sukabumi kembali hadir! Membawa semangat pergerakan skena lokal dengan lineup mematikan yang siap menghancurkan panggung. 
              Siapkan nyali dan tenaga kalian untuk moshpit paling liar tahun ini.
            </p>

            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "24px", marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>LINEUP ARTIST:</h3>
              <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", color: "var(--color-text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>🔥 BURGERKILL</li>
                <li>🔥 DEADSQUAD</li>
                <li>🔥 JASAD</li>
                <li>🔥 ROSEMARY</li>
                <li>🔥 ...AND MANY MORE</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Checkout Box */}
          <div style={{ flex: "1 1 400px" }}>
            <div style={{ border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-secondary)", position: "sticky", top: "120px" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "24px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PILIH TIKET</h2>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed var(--color-border)", paddingBottom: "16px", marginBottom: "16px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "4px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>EARLY BIRD TICKET</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>Akses ke seluruh area festival.</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.3rem", fontWeight: "bold", display: "block", fontFamily: "var(--font-heading)" }}>Rp 75.000</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "16px" }}>
                <span style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>JUMLAH TIKET</span>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", border: "1px solid var(--color-border)", padding: "4px 16px", backgroundColor: "var(--color-bg-primary)" }}>
                  <button style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold", color: "var(--color-text-primary)" }}>-</button>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>1</span>
                  <button style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold", color: "var(--color-text-primary)" }}>+</button>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>TOTAL:</span>
                <span style={{ fontSize: "2rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>Rp 75.000</span>
              </div>

              <button style={{ width: "100%", padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", textAlign: "center", cursor: "pointer" }}>
                CHECKOUT SEKARANG
              </button>
              
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", textAlign: "center", marginTop: "16px", lineHeight: "1.4" }}>
                Dengan membeli tiket, Anda menyetujui Syarat & Ketentuan festival.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
