export const metadata = {
  title: "Help & FAQ | Sukabumi Eundeur Ticketing",
  description: "Pusat bantuan portal tiket Sukabumi Eundeur. Temukan jawaban seputar cara pembelian, refund tiket, dan hubungi promotor kami.",
};

export default function HelpPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "80px 24px", textAlign: "center", borderBottom: "4px solid var(--color-bg-primary)" }}>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "16px", lineHeight: "1" }}>HELP & FAQ</h1>
        <p style={{ fontSize: "1.2rem", letterSpacing: "2px" }}>PUSAT BANTUAN TICKETBOX</p>
      </div>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          
          <div style={{ border: "4px solid var(--color-text-primary)", padding: "32px", boxShadow: "8px 8px 0 var(--color-text-primary)", backgroundColor: "var(--color-bg-primary)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Q: BAGAIMANA CARA MENDAPATKAN BARCODE TIKET?</h3>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
              A: Setelah pembayaran Anda berhasil diverifikasi oleh sistem kami (biasanya 5-10 menit), e-ticket beserta barcode akan otomatis dikirimkan ke email Anda. Anda juga bisa mengeceknya di menu "MY TICKETS".
            </p>
          </div>

          <div style={{ border: "4px solid var(--color-text-primary)", padding: "32px", boxShadow: "8px 8px 0 var(--color-text-primary)", backgroundColor: "var(--color-bg-primary)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Q: APAKAH TIKET BISA DI-REFUND?</h3>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
              A: Sesuai regulasi promotor, seluruh tiket yang sudah dibeli TIDAK BISA dibatalkan atau dikembalikan uangnya (Non-Refundable) KECUALI jika acara dibatalkan sepenuhnya oleh pihak penyelenggara.
            </p>
          </div>

          <div style={{ border: "4px solid var(--color-text-primary)", padding: "32px", boxShadow: "8px 8px 0 var(--color-text-primary)", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>STILL NEED HELP?</h3>
            <p style={{ fontSize: "1.1rem", color: "var(--color-border)", lineHeight: "1.6", marginBottom: "24px" }}>
              Jika pertanyaan Anda tidak terjawab di atas, silakan hubungi tim promotor kami melalui WhatsApp.
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "12px 32px", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", border: "2px solid var(--color-bg-primary)", fontWeight: "bold" }}>
              HUBUNGI WHATSAPP
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
