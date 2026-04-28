import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="container" style={{ padding: "80px 24px" }}>
      <HeroSlider />

      {/* Grid Features */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", marginBottom: "100px" }}>
        <div className="card-hover" style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>BERITA & ARTIKEL</h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Update terbaru seputar rilisan album, interview eksklusif, dan review gigs.</p>
          <a href="https://news.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "4px" }}>BACA SEKARANG &rarr;</a>
        </div>
        <div className="card-hover" style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>TIKET ONLINE</h3>
          <p style={{ marginBottom: "24px", color: "#a1a1aa" }}>Amankan posisimu di moshpit. Dapatkan tiket presale untuk event mendatang.</p>
          <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-bg-primary)", paddingBottom: "4px", color: "var(--color-bg-primary)" }}>PESAN TIKET &rarr;</a>
        </div>
        <div className="card-hover" style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>BIOGRAPHY</h3>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>Kenali lebih dekat profil band, talent, dan penggerak skena Sukabumi Eundeur.</p>
          <a href="/biography" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "4px" }}>LIHAT ROSTER &rarr;</a>
        </div>
      </section>
    </div>
  );
}
