import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sukabumi Eundeur Indonesia",
  description: "Sejarah, visi, dan misi pergerakan komunitas musik Sukabumi Eundeur.",
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <header style={{ marginBottom: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "16px" }}>TENTANG KAMI</h1>
        <div style={{ width: "80px", height: "4px", backgroundColor: "var(--color-text-primary)", margin: "0 auto" }}></div>
      </header>

      <section style={{ marginBottom: "80px", display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
          <p style={{ marginBottom: "24px" }}>
            <strong style={{ color: "var(--color-text-primary)", fontWeight: "600" }}>Sukabumi Eundeur</strong> berawal dari sebuah pergerakan akar rumput (grassroots) di ranah musik independen, khususnya musik cadas (Rock & Metal) di Kota Sukabumi. Kami lahir dari keresahan dan semangat kolektif untuk membangun sebuah wadah yang mewadahi talenta lokal, menyatukan berbagai distorsi, dan menciptakan ekosistem musik yang solid serta berkelanjutan.
          </p>
          <p>
            Lebih dari sekadar promotor atau event organizer, kami adalah sebuah keluarga besar. Sukabumi Eundeur berkomitmen untuk mengangkat band-band lokal ke panggung yang lebih luas, memberikan edukasi manajerial, serta menjadi episentrum bagi bertemunya para musisi, penikmat musik, dan pelaku industri kreatif.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        <div style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "var(--color-text-primary)", fontSize: "2.5rem" }}>#</span> VISI
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Menjadi kiblat pergerakan musik independen dan ekosistem industri kreatif paling progresif di Jawa Barat, yang dikenal karena integritas, kualitas karya, dan solidaritas persaudaraan yang tak tergoyahkan.
          </p>
        </div>

        <div style={{ padding: "40px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "var(--color-bg-secondary)", fontSize: "2.5rem" }}>#</span> MISI
          </h2>
          <ul style={{ color: "var(--color-bg-secondary)", fontSize: "1.1rem", lineHeight: "1.6", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>Menyelenggarakan event musik berkualitas dan berkelanjutan secara berkala.</li>
            <li>Mengorbitkan dan mendistribusikan karya dari talent-talent lokal ke kancah nasional maupun internasional.</li>
            <li>Membangun manajemen profesional bagi para musisi independen.</li>
            <li>Menciptakan ruang kreasi dan literasi (melalui artikel/berita) bagi pelaku seni.</li>
            <li>Mengembangkan sektor usaha mandiri (Merchandise & Ticketing) untuk mendukung pergerakan roda ekonomi komunitas.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
