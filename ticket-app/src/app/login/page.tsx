export const metadata = {
  title: "Login | Sukabumi Eundeur Ticketing",
  description: "Masuk ke portal akun Sukabumi Eundeur untuk mengelola tiket dan riwayat pembelian Anda.",
};

export default function LoginPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "60px 24px", textAlign: "center", borderBottom: "4px solid var(--color-bg-primary)" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "16px", lineHeight: "1" }}>LOGIN ACCOUNT</h1>
        <p style={{ fontSize: "1.1rem", letterSpacing: "2px" }}>PORTAL MASUK METALHEAD</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "500px", width: "100%", border: "4px solid var(--color-text-primary)", padding: "40px", backgroundColor: "var(--color-bg-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="moshpit@example.com" 
                style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "1.1rem" }}>PASSWORD</label>
              <input 
                type="password" 
                placeholder="********" 
                style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem", fontWeight: "bold" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input type="checkbox" style={{ width: "18px", height: "18px", accentColor: "var(--color-text-primary)" }} />
                REMEMBER ME
              </label>
              <a href="#" style={{ textDecoration: "underline" }}>FORGOT PASSWORD?</a>
            </div>

            <button type="button" className="btn btn-primary" style={{ padding: "16px", fontSize: "1.2rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold", marginTop: "16px" }}>
              ENTER MOSHPIT (LOGIN)
            </button>
            
          </form>

          <div style={{ marginTop: "32px", textAlign: "center", borderTop: "2px dashed var(--color-border)", paddingTop: "24px" }}>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>Belum punya akun?</p>
            <a href="/register" className="btn" style={{ display: "block", padding: "16px", fontSize: "1.1rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold", textDecoration: "none", color: "var(--color-text-primary)" }}>
              CREATE ACCOUNT
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
