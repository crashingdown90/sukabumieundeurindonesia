export default function Terms() {
  return (
    <div className="container" style={{ padding: "80px 24px 120px 24px", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "40px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>TERMS & CONDITIONS</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontSize: "1.1rem", lineHeight: "1.8" }}>
        
        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>1. PENDAHULUAN</h2>
          <p>
            Selamat datang di Sukabumi Eundeur Official Store. Dengan mengakses dan menggunakan website ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan yang berlaku. Jika Anda tidak menyetujui ketentuan ini, harap tidak melanjutkan transaksi.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>2. PEMESANAN DAN PEMBAYARAN</h2>
          <p>
            Semua pesanan yang masuk melalui website akan diarahkan ke WhatsApp Admin. Status pesanan baru akan diproses setelah pembayaran lunas dilakukan ke rekening resmi yang diberikan oleh Admin WhatsApp kami. Bukti transfer wajib dikirimkan sebagai bentuk konfirmasi.
          </p>
          <p style={{ marginTop: "12px", color: "var(--color-text-secondary)" }}>
            *Jangan pernah melakukan transfer ke nomor rekening yang tidak dikonfirmasi langsung oleh nomor Admin resmi kami.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>3. PRE-ORDER BARANG</h2>
          <p>
            Barang dengan status <strong>PRE-ORDER</strong> berarti barang sedang dalam tahap produksi. Estimasi waktu produksi dan pengiriman akan dicantumkan secara detail oleh Admin. DP (Down Payment) minimal 50% diwajibkan untuk mengamankan kuota Pre-Order. Pembatalan sepihak oleh pembeli akan mengakibatkan DP hangus (tidak dapat dikembalikan).
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>4. KEKAYAAN INTELEKTUAL</h2>
          <p>
            Seluruh desain merchandise, logo, gambar, dan aset visual lainnya yang terdapat di website ini adalah hak milik mutlak Sukabumi Eundeur Indonesia. Dilarang keras mereproduksi, meniru, atau memperbanyak desain untuk kepentingan komersial tanpa izin tertulis. Support pergerakan dengan selalu membeli yang <strong>ORIGINAL</strong>.
          </p>
        </section>

      </div>
    </div>
  );
}
