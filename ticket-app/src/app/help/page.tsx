export const metadata = {
  title: "Help & FAQ | Sukabumi Eundeur Ticketing",
  description: "Pusat bantuan portal tiket Sukabumi Eundeur. Temukan jawaban seputar cara pembelian, refund tiket, dan hubungi promotor kami.",
};

export default function HelpPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>HELP & FAQ</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>PUSAT BANTUAN TICKETBOX</p>
      </div>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          
          <div style={{ border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-primary)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>Q: BAGAIMANA CARA MENDAPATKAN BARCODE TIKET?</h3>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
              A: Setelah pembayaran Anda berhasil diverifikasi oleh sistem kami (biasanya 5-10 menit), e-ticket beserta barcode akan otomatis dikirimkan ke email Anda. Anda juga bisa mengeceknya di menu "MY TICKETS".
            </p>
          </div>

          <div style={{ border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-primary)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>Q: APAKAH TIKET BISA DI-REFUND?</h3>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
              A: Sesuai regulasi promotor, seluruh tiket yang sudah dibeli TIDAK BISA dibatalkan atau dikembalikan uangnya (Non-Refundable) KECUALI jika acara dibatalkan sepenuhnya oleh pihak penyelenggara.
            </p>
          </div>

          <div style={{ border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-secondary)" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>STILL NEED HELP?</h3>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
              Jika pertanyaan Anda tidak terjawab di atas, silakan hubungi tim promotor kami melalui WhatsApp.
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "12px 32px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", fontWeight: "bold", textDecoration: "none" }}>
              HUBUNGI WHATSAPP
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
