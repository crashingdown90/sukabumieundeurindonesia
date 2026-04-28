export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const ticketId = resolvedParams.id;

  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-primary)", borderBottom: "4px solid var(--color-text-primary)" }}>
        <div className="container" style={{ padding: "40px 24px" }}>
          <a href="/" style={{ fontSize: "1rem", fontWeight: "bold", textDecoration: "underline" }}>← KEMBALI KE DAFTAR EVENT</a>
        </div>
      </div>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          
          {/* Left Column: Image & Details */}
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ width: "100%", height: "400px", backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%)", border: "4px solid var(--color-text-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)", marginBottom: "40px" }}></div>
            
            <h2 style={{ fontSize: "3rem", marginBottom: "16px", lineHeight: "1" }}>SUKABUMI EUNDEUR FESTIVAL 2024</h2>
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px", fontSize: "0.9rem", fontWeight: "bold", color: "var(--color-bg-primary)", flexWrap: "wrap" }}>
              <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>12 AGUSTUS 2024</span>
              <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>GOR MERDEKA SUKABUMI</span>
            </div>

            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
              Festival musik bawah tanah terbesar di Sukabumi kembali hadir! Membawa semangat pergerakan skena lokal dengan lineup mematikan yang siap menghancurkan panggung. 
              Siapkan nyali dan tenaga kalian untuk moshpit paling liar tahun ini.
            </p>

            <div style={{ borderTop: "2px solid var(--color-border)", paddingTop: "24px", marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "16px" }}>LINEUP ARTIST:</h3>
              <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", color: "var(--color-text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
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
            <div style={{ border: "4px solid var(--color-text-primary)", padding: "32px", backgroundColor: "var(--color-bg-secondary)", boxShadow: "8px 8px 0 var(--color-text-primary)", position: "sticky", top: "120px" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "24px", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "16px" }}>PILIH TIKET</h2>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px", marginBottom: "16px" }}>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>EARLY BIRD TICKET</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>Akses ke seluruh area festival.</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: "bold", display: "block" }}>Rp 75.000</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>JUMLAH TIKET</span>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", border: "2px solid var(--color-text-primary)", padding: "4px 16px", backgroundColor: "var(--color-bg-primary)" }}>
                  <button style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold" }}>-</button>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>1</span>
                  <button style={{ border: "none", background: "none", fontSize: "1.5rem", cursor: "pointer", fontWeight: "bold" }}>+</button>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>TOTAL:</span>
                <span style={{ fontSize: "2rem", fontWeight: "bold" }}>Rp 75.000</span>
              </div>

              <button className="btn btn-primary" style={{ width: "100%", padding: "16px", fontSize: "1.2rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold", textAlign: "center" }}>
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
