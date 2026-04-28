export default function FAQ() {
  return (
    <div className="container" style={{ padding: "80px 24px 120px 24px", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "40px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>FREQUENTLY ASKED QUESTIONS</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontSize: "1.1rem", lineHeight: "1.8" }}>
        
        <section style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Q: Bagaimana cara memastikan ukuran baju yang saya beli pas?</h2>
          <p style={{ color: "var(--color-text-secondary)" }}>
            A: Admin WhatsApp kami akan memberikan panduan <em>Size Chart</em> (Panjang x Lebar) setelah Anda mengirimkan format pemesanan. Pastikan Anda mengukur kaos yang biasa Anda pakai untuk dicocokkan dengan Size Chart kami.
          </p>
        </section>

        <section style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Q: Apakah bisa dikirim ke luar Sukabumi?</h2>
          <p style={{ color: "var(--color-text-secondary)" }}>
            A: Tentu! Kami melayani pengiriman ke seluruh Indonesia menggunakan jasa ekspedisi terpercaya. 
          </p>
        </section>

        <section style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Q: Apakah merchandise yang Sold Out akan diproduksi ulang (Restock)?</h2>
          <p style={{ color: "var(--color-text-secondary)" }}>
            A: Merchandise event biasanya diproduksi secara terbatas (Limited Edition) dan tidak akan direstock. Namun untuk Official Core Logo Merchandise, kami akan merestock secara berkala. Ikuti Instagram kami untuk update terbaru.
          </p>
        </section>

        <section style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Q: Kemana perginya keuntungan dari penjualan merch ini?</h2>
          <p style={{ color: "var(--color-text-secondary)" }}>
            A: 100% keuntungan digunakan untuk membiayai operasional pergerakan komunitas, mensubsidi produksi event/gigs lokal Sukabumi Eundeur, serta menjaga skena tetap independen dari intervensi sponsor korporat yang memberatkan.
          </p>
        </section>

      </div>
    </div>
  );
}
