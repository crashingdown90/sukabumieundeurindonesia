export default function MyTicketsPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "80px 24px", textAlign: "center", borderBottom: "4px solid var(--color-bg-primary)" }}>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "16px", lineHeight: "1" }}>MY TICKETS</h1>
        <p style={{ fontSize: "1.2rem", letterSpacing: "2px" }}>PORTAL MANAJEMEN TIKET PRIBADI ANDA</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "600px", width: "100%", border: "4px solid var(--color-text-primary)", padding: "40px", backgroundColor: "var(--color-bg-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>LOGIN REQUIRED</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "32px", lineHeight: "1.6" }}>
            Silakan masuk dengan email yang Anda gunakan saat pembelian untuk melihat tiket aktif, riwayat pembelian, dan barcode event Anda.
          </p>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input 
              type="email" 
              placeholder="ALAMAT EMAIL" 
              style={{ padding: "16px", fontSize: "1.1rem", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", fontFamily: "var(--font-body)", outline: "none" }}
            />
            <button type="button" className="btn btn-primary" style={{ padding: "16px", fontSize: "1.2rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold" }}>
              KIRIM KODE OTP
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
