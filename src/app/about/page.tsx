import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sukabumi Eundeur Indonesia",
  description: "Sejarah, visi, dan misi pergerakan komunitas musik Sukabumi Eundeur.",
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "100px 24px" }}>
      
      {/* Header */}
      <header style={{ marginBottom: "80px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", marginBottom: "16px", textShadow: "0 10px 30px rgba(0,0,0,0.5)", fontWeight: "bold" }}>TENTANG KAMI</h1>
        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, transparent, white, transparent)", margin: "0 auto", borderRadius: "2px" }}></div>
      </header>

      {/* Description Section */}
      <section style={{ marginBottom: "100px", display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", fontSize: "1.2rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "var(--color-text-primary)", fontWeight: "600", fontSize: "1.3rem" }}>Sukabumi Eundeur</strong> berawal dari sebuah pergerakan akar rumput (grassroots) di ranah musik independen, khususnya musik cadas (Rock & Metal) di Kota Sukabumi. Kami lahir dari keresahan dan semangat kolektif untuk membangun sebuah wadah yang mewadahi talenta lokal, menyatukan berbagai distorsi, dan menciptakan ekosistem musik yang solid serta berkelanjutan.
          </p>
          <p>
            Lebih dari sekadar promotor atau event organizer, kami adalah sebuah keluarga besar. Sukabumi Eundeur berkomitmen untuk mengangkat band-band lokal ke panggung yang lebih luas, memberikan edukasi manajerial, serta menjadi episentrum bagi bertemunya para musisi, penikmat musik, dan pelaku industri kreatif.
          </p>
        </div>
      </section>

      {/* Visi Misi Bento Grid */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
        
        {/* Visi Card */}
        <div className="card-hover" style={{ padding: "40px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(20,20,20,0.6)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px", color: "white" }}>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "2.5rem" }}>#</span> VISI
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Menjadi kiblat pergerakan musik independen dan ekosistem industri kreatif paling progresif di Jawa Barat, yang dikenal karena integritas, kualitas karya, dan solidaritas persaudaraan yang tak tergoyahkan.
          </p>
        </div>

        {/* Misi Card */}
        <div className="card-hover" style={{ padding: "40px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.2)", background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)", backgroundColor: "#18181b", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <div style={{ zIndex: 2, position: "relative" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px", color: "white" }}>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "2.5rem" }}>#</span> MISI
            </h2>
            <ul style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", lineHeight: "1.8", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "16px", listStyleType: "circle" }}>
              <li>Menyelenggarakan event musik berkualitas dan berkelanjutan secara berkala.</li>
              <li>Mengorbitkan dan mendistribusikan karya dari talent-talent lokal ke kancah nasional maupun internasional.</li>
              <li>Membangun manajemen profesional bagi para musisi independen.</li>
              <li>Menciptakan ruang kreasi dan literasi (melalui artikel/berita) bagi pelaku seni.</li>
              <li>Mengembangkan sektor usaha mandiri (Merchandise & Ticketing) untuk mendukung pergerakan roda ekonomi komunitas.</li>
            </ul>
          </div>
          {/* Subtle Glow */}
          <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", background: "rgba(255,255,255,0.03)", filter: "blur(60px)", borderRadius: "50%", zIndex: 1 }}></div>
        </div>

      </section>
    </div>
  );
}
