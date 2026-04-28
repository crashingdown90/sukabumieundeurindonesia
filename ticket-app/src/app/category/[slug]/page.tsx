export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.slug.replace(/-/g, " ").toUpperCase();
  return {
    title: `${categoryName} Events | Sukabumi Eundeur Ticketing`,
    description: `Daftar acara dan konser untuk kategori ${categoryName} di Sukabumi Eundeur. Amankan tiket Anda sekarang.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const categoryName = rawSlug.replace(/-/g, " ").toUpperCase();

  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>{categoryName}</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>MENAMPILKAN SEMUA EVENT DI KATEGORI INI</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "50vh" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ display: "flex", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", flexDirection: "column", opacity: 0.7 }}>
            <div style={{ height: "200px", backgroundImage: "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", borderBottom: "1px solid var(--color-border)" }}></div>
            <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "0.8rem", fontWeight: "bold", color: "var(--color-bg-primary)", fontFamily: "var(--font-heading)", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>TBA</span>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>SUKABUMI</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "8px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>{categoryName} GIG VOL. 1</h3>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", marginBottom: "24px", flex: 1 }}>
                Detail event belum diumumkan. Silakan kembali lagi nanti untuk informasi lineup dan harga tiket.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "24px", marginTop: "auto" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)", whiteSpace: "nowrap" }}>Rp --</span>
                <button style={{ padding: "12px 32px", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", backgroundColor: "transparent", color: "var(--color-text-primary)", border: "1px solid var(--color-border)", cursor: "not-allowed", opacity: 0.5 }} disabled>COMING SOON</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
