export const metadata = {
  title: "About Us | Sukabumi Eundeur News",
  description: "Tentang Sukabumi Eundeur News, portal berita independen skena bawah tanah.",
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "120px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "32px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>ABOUT US</h1>
      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
        <p style={{ marginBottom: "24px" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>SUKABUMI EUNDEUR NEWS</strong> adalah portal media jurnalistik independen yang lahir dari rahim skena bawah tanah Sukabumi. Kami hadir sebagai corong suara bagi komunitas, band, kolektif, dan pergerakan kultur ekstrem yang seringkali tidak tersorot oleh media arus utama (mainstream).
        </p>
        <p style={{ marginBottom: "24px" }}>
          Didirikan pada tahun 2024 sebagai bagian dari ekosistem <strong>PT. Sukabumi Eundeur Holding</strong>, kami berkomitmen untuk menyajikan liputan yang tajam, objektif, dan mendalam seputar:
        </p>
        <ul style={{ marginBottom: "24px", paddingLeft: "24px", color: "var(--color-text-primary)", fontWeight: "500" }}>
          <li>Berita terbaru dari ranah musik Hardcore, Metal, Punk, dan genre ekstrem lainnya.</li>
          <li>Review rilisan fisik (Kaset, CD, Vinyl) maupun digital dari band lokal dan nasional.</li>
          <li>Laporan investigatif dan dokumentasi acara/gigs bawah tanah.</li>
          <li>Wawancara eksklusif dengan para pelaku skena dan tokoh penggerak komunitas.</li>
        </ul>
        <p>
          Kami berpegang teguh pada prinsip Do It Yourself (DIY) dan semangat kolektif. Sukabumi Eundeur News bukan sekadar portal berita, melainkan arsip hidup dari sejarah perlawanan dan kreativitas tanpa batas.
        </p>
      </div>
    </div>
  );
}
