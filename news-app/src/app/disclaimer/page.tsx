export const metadata = {
  title: "Disclaimer | Sukabumi Eundeur News",
  description: "Sangkalan dan pembebasan tanggung jawab (Disclaimer).",
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "32px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>DISCLAIMER</h1>
      <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
        <p style={{ marginBottom: "24px" }}>
          Semua informasi yang ada di situs web ini (<strong style={{ color: "var(--color-text-primary)" }}>news.sukabumieundeurindonesia.com</strong>) diterbitkan dengan itikad baik dan untuk tujuan informasi umum dan jurnalistik semata. Sukabumi Eundeur News tidak memberikan jaminan apa pun mengenai kelengkapan, keandalan, dan keakuratan informasi ini.
        </p>
        
        <p style={{ marginBottom: "24px" }}>
          Tindakan apa pun yang Anda ambil atas informasi yang Anda temukan di situs web ini (Sukabumi Eundeur News), sepenuhnya merupakan risiko Anda sendiri. Sukabumi Eundeur News tidak akan bertanggung jawab atas segala kerugian dan/atau kerusakan sehubungan dengan penggunaan situs web kami.
        </p>

        <p style={{ marginBottom: "24px" }}>
          Dari situs web kami, Anda dapat mengunjungi situs web lain dengan mengikuti hyperlink ke situs eksternal tersebut. Meskipun kami berusaha keras untuk hanya menyediakan tautan berkualitas ke situs web yang bermanfaat dan etis, kami tidak memiliki kontrol atas konten dan sifat situs-situs tersebut. Tautan ini ke situs web lain tidak menyiratkan rekomendasi untuk semua konten yang ditemukan di situs-situs tersebut. Pemilik situs dan konten dapat berubah tanpa pemberitahuan dan mungkin terjadi sebelum kami memiliki kesempatan untuk menghapus tautan yang mungkin telah menjadi 'buruk'.
        </p>

        <p style={{ marginBottom: "24px" }}>
          Harap disadari pula bahwa ketika Anda meninggalkan situs web kami, situs lain mungkin memiliki kebijakan dan ketentuan privasi yang berbeda yang berada di luar kendali kami. Harap pastikan untuk memeriksa Kebijakan Privasi situs tersebut serta "Ketentuan Layanan" mereka sebelum terlibat dalam bisnis apa pun atau mengunggah informasi apa pun.
        </p>

        <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginTop: "32px", marginBottom: "16px" }}>Hak Cipta (Copyright)</h2>
        <p style={{ marginBottom: "24px" }}>
          Seluruh karya jurnalistik (teks, foto, logo) yang diproduksi oleh redaksi adalah hak milik intelektual Sukabumi Eundeur News, kecuali dinyatakan lain (seperti *press release* atau foto atribusi pihak ketiga). Penggunaan materi redaksional tanpa izin tertulis dilarang keras.
        </p>

        <h2 style={{ fontSize: "1.5rem", color: "var(--color-text-primary)", marginTop: "32px", marginBottom: "16px" }}>Persetujuan</h2>
        <p style={{ marginBottom: "24px" }}>
          Dengan menggunakan situs web kami, Anda dengan ini menyetujui disclaimer kami dan menyetujui ketentuannya. Jika kami memperbarui, mengubah, atau membuat perubahan apa pun pada dokumen ini, perubahan tersebut akan diposting secara jelas di sini.
        </p>
      </div>
    </div>
  );
}
