export const metadata = {
  title: "Contact Us | Sukabumi Eundeur News",
  description: "Hubungi redaksi Sukabumi Eundeur News.",
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: "120px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "32px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>CONTACT US</h1>
      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
        <p style={{ marginBottom: "32px" }}>
          Redaksi <strong style={{ color: "var(--color-text-primary)" }}>SUKABUMI EUNDEUR NEWS</strong> membuka pintu selebar-lebarnya untuk segala bentuk kerja sama, pengiriman press release (rilisan pers), undangan liputan, maupun kritik dan saran.
        </p>
        
        <div style={{ border: "2px solid var(--color-text-primary)", padding: "32px", marginBottom: "32px", backgroundColor: "var(--color-bg-secondary)" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginBottom: "16px" }}>KIRIM PRESS RELEASE</h2>
          <p style={{ marginBottom: "16px" }}>Untuk Band, Label Rekaman, atau Kolektif yang ingin karyanya kami ulas, silakan kirimkan EPK (Electronic Press Kit) beserta foto *high-resolution* ke alamat email berikut:</p>
          <a href="mailto:redaksi@sukabumieundeurindonesia.com" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--color-text-primary)", textDecoration: "underline" }}>redaksi@sukabumieundeurindonesia.com</a>
        </div>

        <div style={{ border: "2px solid var(--color-text-primary)", padding: "32px" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginBottom: "16px" }}>IKLAN & KERJA SAMA (PARTNERSHIP)</h2>
          <p style={{ marginBottom: "16px" }}>Untuk inquiries seputar penempatan iklan (Banner Ads, Advertorial) dan Media Partner untuk acara/gigs Anda, silakan hubungi tim bisnis kami:</p>
          <a href="mailto:business@sukabumieundeurindonesia.com" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--color-text-primary)", textDecoration: "underline" }}>business@sukabumieundeurindonesia.com</a>
          <p style={{ marginTop: "16px", fontWeight: "bold", color: "var(--color-text-primary)" }}>WhatsApp: +62 8XX XXXX XXXX</p>
        </div>
      </div>
    </div>
  );
}
