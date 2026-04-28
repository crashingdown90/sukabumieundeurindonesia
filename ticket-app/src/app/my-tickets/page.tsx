export const metadata = {
  title: "My Tickets | Sukabumi Eundeur Ticketing",
  description: "Portal manajemen tiket pribadi. Masuk untuk melihat tiket aktif, barcode event, dan riwayat transaksi Anda.",
};

export default function MyTicketsPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>MY TICKETS</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>PORTAL MANAJEMEN TIKET PRIBADI ANDA</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "550px", width: "100%", border: "1px solid var(--color-border)", padding: "40px", backgroundColor: "var(--color-bg-primary)", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>LOGIN REQUIRED</h2>
          <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "32px", lineHeight: "1.6" }}>
            Silakan masuk dengan email yang Anda gunakan saat pembelian untuk melihat tiket aktif, riwayat pembelian, dan barcode event Anda.
          </p>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <input 
              type="email" 
              placeholder="ALAMAT EMAIL" 
              style={{ padding: "16px", fontSize: "1rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none", textAlign: "center", letterSpacing: "1px" }}
            />
            <button type="button" style={{ padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", cursor: "pointer" }}>
              KIRIM KODE OTP
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
