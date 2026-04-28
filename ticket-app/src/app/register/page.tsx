export const metadata = {
  title: "Register | Sukabumi Eundeur Ticketing",
  description: "Buat akun baru untuk membeli tiket konser, melihat riwayat transaksi, dan mengamankan e-ticket Anda.",
};

export default function RegisterPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "60px 24px", textAlign: "center", borderBottom: "4px solid var(--color-bg-primary)" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "16px", lineHeight: "1" }}>REGISTER</h1>
        <p style={{ fontSize: "1.1rem", letterSpacing: "2px" }}>BERGABUNG KE DALAM SKENA</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "600px", width: "100%", border: "4px solid var(--color-text-primary)", padding: "40px", backgroundColor: "var(--color-bg-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 1 200px" }}>
                <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>FIRST NAME</label>
                <input 
                  type="text" 
                  placeholder="NAMA DEPAN" 
                  style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1 1 200px" }}>
                <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>LAST NAME</label>
                <input 
                  type="text" 
                  placeholder="NAMA BELAKANG" 
                  style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="EMAIL AKTIF (UNTUK PENGIRIMAN TIKET)" 
                style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>WHATSAPP NUMBER</label>
              <input 
                type="tel" 
                placeholder="+62 8XX XXXX XXXX" 
                style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>CREATE PASSWORD</label>
              <input 
                type="password" 
                placeholder="MINIMAL 8 KARAKTER" 
                style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer", fontSize: "0.95rem", lineHeight: "1.4", marginTop: "8px" }}>
              <input type="checkbox" style={{ width: "20px", height: "20px", accentColor: "var(--color-text-primary)", flexShrink: 0, marginTop: "2px" }} />
              <span>Saya menyetujui <a href="#" style={{ textDecoration: "underline", fontWeight: "bold" }}>Syarat & Ketentuan</a> serta <a href="#" style={{ textDecoration: "underline", fontWeight: "bold" }}>Kebijakan Privasi</a> Sukabumi Eundeur Indonesia.</span>
            </label>

            <button type="button" className="btn btn-primary" style={{ padding: "16px", fontSize: "1.2rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold", marginTop: "16px" }}>
              CREATE ACCOUNT
            </button>
            
          </form>

          <div style={{ marginTop: "32px", textAlign: "center", borderTop: "2px dashed var(--color-border)", paddingTop: "24px" }}>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>Sudah punya akun?</p>
            <a href="/login" className="btn" style={{ display: "block", padding: "16px", fontSize: "1.1rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold", textDecoration: "none", color: "var(--color-text-primary)" }}>
              LOGIN SEKARANG
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
