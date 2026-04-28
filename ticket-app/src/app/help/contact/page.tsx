export const metadata = {
  title: "Contact Promoter | Sukabumi Eundeur Ticketing",
  description: "Hubungi tim promotor Sukabumi Eundeur untuk pertanyaan, kerjasama, atau kendala tiket.",
};

export default function ContactPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>CONTACT US</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>HUBUNGI TIM PROMOTOR KAMI</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "60vh" }}>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px" }}>
          
          <div style={{ flex: "1 1 300px", border: "1px solid var(--color-border)", padding: "40px", backgroundColor: "var(--color-bg-primary)", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>💬</div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>WHATSAPP SUPPORT</h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
              Butuh bantuan cepat mengenai tiket atau pembayaran Anda? Tim Customer Service kami siap melayani pada jam kerja (10.00 - 20.00 WIB).
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 32px", backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", textDecoration: "none", width: "100%" }}>
              CHAT VIA WHATSAPP
            </a>
          </div>

          <div style={{ flex: "1 1 300px", border: "1px solid var(--color-border)", padding: "40px", backgroundColor: "var(--color-bg-primary)", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✉️</div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>EMAIL / SPONSORSHIP</h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px" }}>
              Untuk pertanyaan bisnis, penawaran sponsorship, atau kendala non-urgent, silakan kirimkan email resmi kepada kami.
            </p>
            <a href="mailto:info@sukabumieundeur.com" style={{ display: "inline-block", padding: "16px 32px", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", textDecoration: "none", width: "100%" }}>
              KIRIM EMAIL
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
