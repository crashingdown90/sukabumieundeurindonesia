export const metadata = {
  title: "Terms and Conditions | Sukabumi Eundeur News",
  description: "Syarat dan Ketentuan Penggunaan (Terms and Conditions).",
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: "120px 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "32px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>TERMS & CONDITIONS</h1>
      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
        <p style={{ marginBottom: "24px" }}>Selamat datang di <strong style={{ color: "var(--color-text-primary)" }}>Sukabumi Eundeur News</strong>.</p>
        <p style={{ marginBottom: "24px" }}>
          Ketentuan ini menguraikan aturan dan peraturan untuk penggunaan Situs Web Sukabumi Eundeur News, yang terletak di news.sukabumieundeurindonesia.com.
        </p>
        <p style={{ marginBottom: "24px" }}>
          Dengan mengakses situs web ini, kami berasumsi Anda menerima syarat dan ketentuan ini secara penuh. Jangan terus menggunakan Sukabumi Eundeur News jika Anda tidak menerima semua syarat dan ketentuan yang dinyatakan di halaman ini.
        </p>

        <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginTop: "32px", marginBottom: "16px" }}>Lisensi Penggunaan</h2>
        <p style={{ marginBottom: "24px" }}>
          Kecuali dinyatakan sebaliknya, Sukabumi Eundeur News dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di Sukabumi Eundeur News. Semua hak kekayaan intelektual dilindungi undang-undang. Anda tidak diperkenankan untuk:
        </p>
        <ul style={{ marginBottom: "24px", paddingLeft: "24px" }}>
          <li>Mempublikasikan ulang materi dari Sukabumi Eundeur News (tanpa menautkan sumber asli/backlink).</li>
          <li>Menjual, menyewakan, atau mensublisensikan materi dari Sukabumi Eundeur News.</li>
          <li>Mereproduksi, menggandakan, atau menyalin materi redaksional untuk kepentingan komersial tanpa izin tertulis.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginTop: "32px", marginBottom: "16px" }}>Komentar Pengguna</h2>
        <p style={{ marginBottom: "24px" }}>
          Sebagian dari situs web ini menawarkan kesempatan kepada pengguna untuk memposting dan bertukar opini (jika fitur komentar diaktifkan). Sukabumi Eundeur News tidak memfilter, mengedit, mempublikasikan, atau meninjau Komentar sebelum keberadaannya di situs web. Komentar mencerminkan pandangan dan pendapat dari orang yang mempostingnya. Sesuai dengan batasan undang-undang (termasuk UU ITE), Sukabumi Eundeur News tidak akan bertanggung jawab atas Komentar atau segala bentuk tuntutan akibat penggunaan fitur komentar.
        </p>

        <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginTop: "32px", marginBottom: "16px" }}>Tautan ke Konten Kami</h2>
        <p style={{ marginBottom: "24px" }}>
          Organisasi berikut dapat menautkan situs web kami tanpa persetujuan tertulis sebelumnya: Agensi Pemerintah, Mesin Pencari (Google, Bing, dll), Organisasi Berita, dan Direktori Bisnis. Band, Kolektif, atau Pihak Penyelenggara Acara (EO) sangat dipersilakan untuk menautkan halaman liputan kami ke situs web atau media sosial mereka sebagai bentuk dukungan terhadap skena.
        </p>
      </div>
    </div>
  );
}
