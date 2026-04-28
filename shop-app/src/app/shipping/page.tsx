export default function Shipping() {
  return (
    <div className="container" style={{ padding: "80px 24px 120px 24px", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "40px", borderBottom: "4px solid var(--color-text-primary)", paddingBottom: "16px" }}>SHIPPING & RETURNS</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "32px", fontSize: "1.1rem", lineHeight: "1.8" }}>
        
        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>1. KEBIJAKAN PENGIRIMAN</h2>
          <p>
            Semua pesanan yang masuk akan diproses dalam waktu 1-2 hari kerja (Senin - Jumat, di luar hari libur nasional). Nomor resi akan otomatis dikirimkan melalui WhatsApp atau Email yang didaftarkan setelah barang diserahkan ke pihak ekspedisi.
          </p>
          <p style={{ marginTop: "12px" }}>
            Kami bekerja sama dengan ekspedisi JNE, J&T, dan Sicepat untuk pengiriman domestik ke seluruh wilayah Indonesia. Lama pengiriman bergantung pada estimasi ekspedisi yang dipilih oleh pembeli.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>2. BIAYA PENGIRIMAN</h2>
          <p>
            Biaya pengiriman dihitung secara otomatis berdasarkan berat total pesanan dan lokasi tujuan. Untuk area Sukabumi Raya, kami menyediakan opsi <em>Same-Day Delivery</em> atau pengambilan langsung di drop-point (gigs/event terdekat).
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "16px" }}>3. KEBIJAKAN PENGEMBALIAN (RETURNS)</h2>
          <p>
            Barang yang sudah dibeli tidak dapat dikembalikan atau ditukar dengan alasan salah ukuran (karena pembeli wajib membaca <em>Size Chart</em> sebelum memesan). Pengembalian atau penukaran HANYA berlaku jika terdapat cacat produksi atau kesalahan pengiriman dari pihak Sukabumi Eundeur.
          </p>
          <ul style={{ paddingLeft: "24px", marginTop: "12px" }}>
            <li>Klaim maksimal 3x24 jam sejak barang diterima (berdasarkan sistem tracking ekspedisi).</li>
            <li>Wajib menyertakan video unboxing dari awal paket dibuka tanpa terputus.</li>
            <li>Barang harus dalam kondisi baru, belum dicuci, dan hangtag masih menempel.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
