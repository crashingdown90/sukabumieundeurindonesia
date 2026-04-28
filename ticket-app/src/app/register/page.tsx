export const metadata = {
  title: "Register | Sukabumi Eundeur Ticketing",
  description: "Buat akun baru untuk membeli tiket konser, melihat riwayat transaksi, dan mengamankan e-ticket Anda.",
};

export default function RegisterPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>REGISTER</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>BERGABUNG KE DALAM SKENA</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "550px", width: "100%", border: "1px solid var(--color-border)", padding: "40px", backgroundColor: "var(--color-bg-primary)" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 1 200px" }}>
                <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>FIRST NAME</label>
                <input 
                  type="text" 
                  placeholder="NAMA DEPAN" 
                  style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 1 200px" }}>
                <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>LAST NAME</label>
                <input 
                  type="text" 
                  placeholder="NAMA BELAKANG" 
                  style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="EMAIL AKTIF (UNTUK PENGIRIMAN TIKET)" 
                style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>WHATSAPP NUMBER</label>
              <input 
                type="tel" 
                placeholder="+62 8XX XXXX XXXX" 
                style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>CREATE PASSWORD</label>
              <input 
                type="password" 
                placeholder="MINIMAL 8 KARAKTER" 
                style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", fontSize: "0.95rem", lineHeight: "1.4", marginTop: "8px", color: "var(--color-text-secondary)" }}>
              <input type="checkbox" style={{ width: "20px", height: "20px", accentColor: "#22c55e", flexShrink: 0, marginTop: "2px" }} />
              <span>Saya menyetujui <a href="#" style={{ color: "var(--color-text-primary)", textDecoration: "underline", fontWeight: "bold" }}>Syarat & Ketentuan</a> serta <a href="#" style={{ color: "var(--color-text-primary)", textDecoration: "underline", fontWeight: "bold" }}>Kebijakan Privasi</a> Sukabumi Eundeur.</span>
            </label>

            <button type="button" style={{ padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", cursor: "pointer", marginTop: "8px" }}>
              CREATE ACCOUNT
            </button>
            
          </form>

          <div style={{ marginTop: "32px", textAlign: "center", borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>Sudah punya akun?</p>
            <a href="/login" style={{ display: "block", padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", border: "1px solid var(--color-border)", fontWeight: "bold", textDecoration: "none", color: "var(--color-text-primary)", backgroundColor: "transparent" }}>
              LOGIN SEKARANG
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
