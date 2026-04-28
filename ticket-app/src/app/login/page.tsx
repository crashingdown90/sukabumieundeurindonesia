export const metadata = {
  title: "Login | Sukabumi Eundeur Ticketing",
  description: "Masuk ke portal akun Sukabumi Eundeur untuk mengelola tiket dan riwayat pembelian Anda.",
};

export default function LoginPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>LOGIN ACCOUNT</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>PORTAL TIKET & MEMBERSHIP</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "450px", width: "100%", border: "1px solid var(--color-border)", padding: "40px", backgroundColor: "var(--color-bg-primary)" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="moshpit@example.com" 
                style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontWeight: "bold", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>PASSWORD</label>
              <input 
                type="password" 
                placeholder="********" 
                style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input type="checkbox" style={{ width: "16px", height: "16px", accentColor: "#22c55e" }} />
                Remember me
              </label>
              <a href="#" style={{ color: "var(--color-text-primary)", textDecoration: "underline" }}>Forgot Password?</a>
            </div>

            <button type="button" style={{ padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", cursor: "pointer", marginTop: "8px" }}>
              ENTER MOSHPIT (LOGIN)
            </button>
            
          </form>

          <div style={{ marginTop: "32px", textAlign: "center", borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>Belum punya akun?</p>
            <a href="/register" style={{ display: "block", padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", border: "1px solid var(--color-border)", fontWeight: "bold", textDecoration: "none", color: "var(--color-text-primary)", backgroundColor: "transparent" }}>
              CREATE ACCOUNT
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
