export default function Home() {
  return (
    <div className="container" style={{ padding: "80px 24px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "100px" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "24px", lineHeight: "1.1" }}>
          SUKABUMI <span style={{ color: "var(--color-text-primary)" }}>EUNDEUR</span> INDONESIA
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          Episentrum pergerakan musik independen. Menyatukan distorsi, energi, dan semangat solidaritas dalam satu frekuensi.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <a href="/events" className="btn btn-primary">Lihat Jadwal Gig</a>
          <a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn">Merchandise Resmi</a>
        </div>
      </section>

      {/* Grid Features */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginBottom: "100px" }}>
        <div style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>🔥 BERITA & ARTIKEL</h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Update terbaru seputar rilisan album, interview eksklusif, dan review gigs.</p>
          <a href="https://news.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "4px" }}>BACA SEKARANG &rarr;</a>
        </div>
        <div style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>🎟️ TIKET ONLINE</h3>
          <p style={{ marginBottom: "24px", color: "#a1a1aa" }}>Amankan posisimu di moshpit. Dapatkan tiket presale untuk event mendatang.</p>
          <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-bg-primary)", paddingBottom: "4px", color: "var(--color-bg-primary)" }}>PESAN TIKET &rarr;</a>
        </div>
        <div style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>🎸 BIOGRAPHY</h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Kenali lebih dekat profil band, talent, dan penggerak skena Sukabumi Eundeur.</p>
          <a href="/biography" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "4px" }}>LIHAT ROSTER &rarr;</a>
        </div>
      </section>
    </div>
  );
}
