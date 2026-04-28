export const metadata = {
  title: "Payment Status | Sukabumi Eundeur Ticketing",
  description: "Cek status pembayaran tiket konser Sukabumi Eundeur Anda. Segera selesaikan transaksi untuk mengamankan e-ticket.",
};

export default function PaymentStatusPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>PAYMENT STATUS</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>MENUNGGU KONFIRMASI PEMBAYARAN TIKET</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "600px", width: "100%" }}>
          
          {/* Warning / Pending Box */}
          <div style={{ border: "1px solid var(--color-border)", padding: "24px", backgroundColor: "var(--color-bg-secondary)", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⏳</div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "8px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PAYMENT PENDING</h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Silakan selesaikan pembayaran Anda sebelum waktu habis.
            </p>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "4px", border: "1px dashed var(--color-border)", padding: "16px", marginBottom: "24px", backgroundColor: "var(--color-bg-primary)" }}>
              01:59:45
            </div>
          </div>

          {/* Payment Details */}
          <div style={{ border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-primary)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "24px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>INSTRUKSI TRANSFER</h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: "bold", fontSize: "0.9rem" }}>BANK TUJUAN:</span>
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>BCA - PT SUKABUMI EUNDEUR</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: "bold", fontSize: "0.9rem" }}>NO. REKENING:</span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.1rem", letterSpacing: "2px", fontFamily: "var(--font-heading)" }}>8823 445 667</span>
                <button style={{ padding: "4px 8px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>SALIN</button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: "bold", fontSize: "0.9rem" }}>TOTAL BAYAR:</span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.3rem", fontFamily: "var(--font-heading)" }}>Rp 75.000</span>
                <button style={{ padding: "4px 8px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>SALIN</button>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <button style={{ padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold", textAlign: "center", width: "100%", cursor: "pointer" }}>
                SAYA SUDAH TRANSFER
              </button>
              <a href="/my-tickets" style={{ textAlign: "center", color: "var(--color-text-secondary)", textDecoration: "underline", fontSize: "0.9rem" }}>
                CEK RIWAYAT TIKET
              </a>
            </div>
            
          </div>

        </div>

      </div>
    </>
  );
}
