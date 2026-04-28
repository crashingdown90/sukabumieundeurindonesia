export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const categoryName = rawSlug.replace(/-/g, " ").toUpperCase();

  return (
    <>
      <div style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "80px 24px", textAlign: "center", borderBottom: "4px solid var(--color-bg-primary)" }}>
        <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "16px", lineHeight: "1" }}>{categoryName}</h1>
        <p style={{ fontSize: "1.2rem", letterSpacing: "2px" }}>MENAMPILKAN SEMUA EVENT DI KATEGORI INI</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "50vh" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div className="ticket-card" style={{ opacity: 0.7 }}>
            <div className="ticket-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop')" }}></div>
            <div className="ticket-content">
              <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "0.9rem", fontWeight: "bold", color: "var(--color-bg-primary)", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>TBA</span>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>SUKABUMI</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "8px", lineHeight: "1.1" }}>{categoryName} GIG VOL. 1</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                Detail event belum diumumkan. Silakan kembali lagi nanti untuk informasi lineup dan harga tiket.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold", whiteSpace: "nowrap" }}>Rp --</span>
                <button className="btn" style={{ padding: "12px 32px", opacity: 0.5, cursor: "not-allowed", border: "4px solid var(--color-text-primary)" }} disabled>COMING SOON</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
