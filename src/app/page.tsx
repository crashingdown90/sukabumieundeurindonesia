import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div style={{ paddingBottom: "100px" }}>
      {/* Full-width Hero Slider */}
      <HeroSlider />

      <div className="container" style={{ paddingTop: "40px" }}>
        {/* Bento Grid Features */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          
          <div className="card-hover" style={{ padding: "40px", borderRadius: "16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", color: "var(--color-text-primary)" }}>BERITA & ARTIKEL</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px", lineHeight: "1.6" }}>Update terbaru seputar rilisan album, interview eksklusif, dan review gigs.</p>
            </div>
            <a href="https://news.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", fontWeight: "bold", color: "var(--color-text-primary)", transition: "opacity 0.3s" }} className="hover-opacity">BACA SEKARANG <span style={{ marginLeft: "8px" }}>&rarr;</span></a>
          </div>

          <div className="card-hover" style={{ padding: "40px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.2)", background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)", backgroundColor: "#18181b", color: "var(--color-text-primary)", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
            <div style={{ zIndex: 2, position: "relative" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", color: "white" }}>TIKET ONLINE</h3>
              <p style={{ marginBottom: "32px", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>Amankan posisimu di moshpit. Dapatkan tiket presale untuk event mendatang.</p>
            </div>
            <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" style={{ zIndex: 2, position: "relative", display: "inline-flex", alignItems: "center", fontWeight: "bold", color: "white" }} className="hover-opacity">PESAN TIKET <span style={{ marginLeft: "8px" }}>&rarr;</span></a>
            {/* Premium Subdued Glow effect */}
            <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "200px", height: "200px", background: "rgba(255,255,255,0.05)", filter: "blur(50px)", borderRadius: "50%", zIndex: 1 }}></div>
          </div>

          <div className="card-hover" style={{ padding: "40px", borderRadius: "16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "16px", color: "var(--color-text-primary)" }}>BIOGRAPHY</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px", lineHeight: "1.6" }}>Kenali lebih dekat profil band, talent, dan penggerak skena Sukabumi Eundeur.</p>
            </div>
            <a href="/biography" style={{ display: "inline-flex", alignItems: "center", fontWeight: "bold", color: "var(--color-text-primary)" }} className="hover-opacity">LIHAT ROSTER <span style={{ marginLeft: "8px" }}>&rarr;</span></a>
          </div>
          
        </section>
      </div>
    </div>
  );
}
