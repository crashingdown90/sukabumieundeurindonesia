import Image from "next/image";

export const metadata = {
  title: "Metalhead Boleh Bangga! Ternyata, Musik Cadas Punya Pengaruh Positif Buat Kesehatan!",
  description: "Penelitian terbaru membuktikan bahwa mendengarkan musik keras dan cadas memiliki efek positif bagi kesehatan mental dan fisik.",
};

export default function ArticlePage() {
  return (
    <article className="container" style={{ padding: "40px 24px", maxWidth: "900px", margin: "0 auto" }}>
      
      {/* Article Header */}
      <div style={{ borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "32px", marginBottom: "40px" }}>
        <span style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "4px 12px", fontWeight: "bold", fontSize: "0.9rem", display: "inline-block", marginBottom: "16px" }}>BERITA UTAMA</span>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1", marginBottom: "24px", letterSpacing: "-1px" }}>
          Metalhead Boleh Bangga! Ternyata, Musik Cadas Punya Pengaruh Positif Buat Kesehatan!
        </h1>
        <div style={{ display: "flex", gap: "16px", fontSize: "0.9rem", fontWeight: "bold", borderTop: "2px solid var(--color-text-primary)", paddingTop: "16px" }}>
          <span>Ditulis oleh: REDAKSI</span>
          <span>•</span>
          <span>28 APRIL 2024</span>
        </div>
      </div>

      {/* Featured Image */}
      <div style={{ width: "100%", height: "clamp(300px, 50vw, 600px)", position: "relative", marginBottom: "40px", border: "4px solid var(--color-text-primary)" }}>
        <Image 
          src="/metalhead-health.png" 
          alt="Metalhead headbanging at an underground gig" 
          fill 
          style={{ objectFit: "cover", filter: "grayscale(100%) contrast(120%)" }} 
          priority 
        />
      </div>

      {/* Article Body */}
      <div style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}>
        <p style={{ marginBottom: "24px", fontWeight: "bold", fontSize: "1.3rem" }}>
          Buat sebagian orang, musik cadas adalah genre musik yang menyenangkan. Namun, nggak sedikit justru yang menganggap kalau musik jenis ini mengganggu telinga karena berisik.
        </p>

        <p style={{ marginBottom: "24px" }}>
          Namun rupanya, berdasarkan sebuah penelitian di Universitas Manchester, Inggris, menemukan bahwa semakin besar suara yang dihasilkan oleh musik yang kita dengar, maka semakin besar pula kesenangan yang bakal muncul dari diri kita.
        </p>

        <div style={{ padding: "24px", borderLeft: "4px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)", margin: "40px 0", fontStyle: "italic", fontSize: "1.2rem" }}>
          "Semakin besar suara yang dihasilkan oleh musik yang kita dengar, maka semakin besar pula kesenangan yang bakal muncul dari diri kita."
        </div>

        <p style={{ marginBottom: "24px" }}>
          Jadi gini, hal tersebut terjadi karena sistem vestibular, yang bertanggung jawab terhadap keseimbangan dan juga menimbulkan getaran.
        </p>

        <p style={{ marginBottom: "24px" }}>
          Nah, saat gelombang suara terkirim, maka pesan positif juga terkirim ke otak.
        </p>

        <p style={{ marginBottom: "24px" }}>
          Selain itu, penelitian lain menunjukkan bahwa saat telinga menerima gelombang yang ditimbulkan oleh suara gitar elektrik yang melengking, gelombang itu bakal diteruskan ke pusat memori.
        </p>

        <p style={{ marginBottom: "40px", fontWeight: "bold" }}>
          Efeknya, hal itu akan melatih ketajaman berpikir seseorang dan meningkatkan daya ingatnya.
        </p>
      </div>

      {/* Author/Share Box */}
      <div style={{ border: "2px solid var(--color-text-primary)", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
        <div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>BAGIKAN ARTIKEL INI:</h4>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="#" style={{ textDecoration: "underline", fontWeight: "bold" }}>FACEBOOK</a>
            <a href="#" style={{ textDecoration: "underline", fontWeight: "bold" }}>X / TWITTER</a>
            <a href="#" style={{ textDecoration: "underline", fontWeight: "bold" }}>WHATSAPP</a>
          </div>
        </div>
        <a href="/" className="btn btn-primary">KEMBALI KE BERANDA</a>
      </div>

    </article>
  );
}
