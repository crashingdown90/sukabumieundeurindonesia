export const metadata = {
  title: "Refund Policy | Sukabumi Eundeur Ticketing",
  description: "Kebijakan pengembalian dana tiket untuk setiap event Sukabumi Eundeur.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>REFUND POLICY</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>KEBIJAKAN PENGEMBALIAN DANA</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh" }}>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          
          <div style={{ border: "1px solid var(--color-border)", padding: "40px", backgroundColor: "var(--color-bg-primary)" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "24px", fontFamily: "var(--font-heading)", letterSpacing: "1px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px" }}>KETENTUAN UMUM</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
              <p>
                <strong style={{ color: "var(--color-text-primary)" }}>1. Non-Refundable:</strong> Semua tiket yang telah dibeli dan dikonfirmasi pembayarannya bersifat final dan <strong>tidak dapat dikembalikan</strong> (Non-Refundable), tidak dapat ditukar (Non-Exchangeable), dan tidak dapat dipindahtangankan tanpa persetujuan resmi dari pihak promotor.
              </p>
              
              <p>
                <strong style={{ color: "var(--color-text-primary)" }}>2. Pembatalan Oleh Penyelenggara:</strong> Pengembalian dana penuh (100% dari harga tiket di luar biaya layanan) hanya akan diberikan apabila seluruh rangkaian acara dibatalkan sepenuhnya oleh pihak penyelenggara PT Sukabumi Eundeur Holding.
              </p>
              
              <p>
                <strong style={{ color: "var(--color-text-primary)" }}>3. Force Majeure:</strong> Jika terjadi Force Majeure (Bencana alam, pandemi, kerusuhan massal, atau regulasi mendadak dari pemerintah) yang menyebabkan acara ditunda, tiket Anda akan tetap berlaku untuk tanggal pengganti. Jika Anda tidak dapat hadir pada tanggal pengganti, promotor akan mengumumkan kebijakan refund parsial secara terpisah.
              </p>

              <p>
                <strong style={{ color: "var(--color-text-primary)" }}>4. Lineup Berubah:</strong> Sukabumi Eundeur berhak mengubah susunan penampil (lineup) tanpa pemberitahuan sebelumnya jika artis mengalami kendala tak terduga. Perubahan lineup tidak dapat dijadikan alasan untuk meminta pengembalian dana tiket.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <a href="/help" style={{ display: "inline-block", padding: "16px 32px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", textDecoration: "none" }}>
              KEMBALI KE PUSAT BANTUAN
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
