export const metadata = {
  title: "Payment Status | Sukabumi Eundeur Ticketing",
  description: "Cek status pembayaran tiket konser Sukabumi Eundeur Anda. Segera selesaikan transaksi untuk mengamankan e-ticket.",
};

export default function PaymentStatusPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "60px 24px", textAlign: "center", borderBottom: "4px solid var(--color-bg-primary)" }}>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", marginBottom: "16px", lineHeight: "1" }}>PAYMENT STATUS</h1>
        <p style={{ fontSize: "1.1rem", letterSpacing: "2px" }}>MENUNGGU KONFIRMASI PEMBAYARAN TIKET</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ maxWidth: "600px", width: "100%" }}>
          
          {/* Warning / Pending Box */}
          <div style={{ border: "4px solid var(--color-text-primary)", padding: "24px", backgroundColor: "var(--color-bg-secondary)", boxShadow: "8px 8px 0 var(--color-text-primary)", marginBottom: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⏳</div>
            <h2 style={{ fontSize: "2rem", marginBottom: "8px" }}>PAYMENT PENDING</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Silakan selesaikan pembayaran Anda sebelum waktu habis.
            </p>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", fontFamily: "monospace", letterSpacing: "4px", border: "2px dashed var(--color-text-primary)", padding: "16px", marginBottom: "24px", backgroundColor: "var(--color-bg-primary)" }}>
              01:59:45
            </div>
          </div>

          {/* Payment Details */}
          <div style={{ border: "4px solid var(--color-text-primary)", padding: "32px", backgroundColor: "var(--color-bg-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", borderBottom: "2px solid var(--color-border)", paddingBottom: "16px" }}>INSTRUKSI TRANSFER</h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: "bold" }}>BANK TUJUAN:</span>
              <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>BCA - PT SUKABUMI EUNDEUR</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: "bold" }}>NO. REKENING:</span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.2rem", letterSpacing: "2px" }}>8823 445 667</span>
                <button style={{ padding: "4px 8px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>SALIN</button>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px", borderBottom: "1px dashed var(--color-border)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--color-text-secondary)", fontWeight: "bold" }}>TOTAL BAYAR:</span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Rp 75.000</span>
                <button style={{ padding: "4px 8px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", border: "none", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem" }}>SALIN</button>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <button className="btn btn-primary" style={{ padding: "16px", fontSize: "1.1rem", border: "4px solid var(--color-text-primary)", fontWeight: "bold", textAlign: "center", width: "100%" }}>
                SAYA SUDAH TRANSFER
              </button>
              <a href="/my-tickets" style={{ textAlign: "center", color: "var(--color-text-secondary)", textDecoration: "underline", fontSize: "0.95rem" }}>
                CEK RIWAYAT TIKET
              </a>
            </div>
            
          </div>

        </div>

      </div>
    </>
  );
}
