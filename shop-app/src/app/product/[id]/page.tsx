"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const foundProduct = data.find(p => p.slug === productId || p.id === productId);
          setProduct(foundProduct);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="container" style={{ padding: "100px 24px", textAlign: "center", minHeight: "60vh" }}>
        <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)" }}>MEMUAT DETAIL PRODUK...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container" style={{ padding: "100px 24px", textAlign: "center", minHeight: "60vh" }}>
        <h1 style={{ fontSize: "3rem" }}>PRODUK TIDAK DITEMUKAN</h1>
        <a href="/" className="btn" style={{ marginTop: "24px" }}>&larr; KEMBALI KE KATALOG</a>
      </div>
    );
  }

  // Assuming product might have sizes and colors as arrays if they exist in DB, otherwise defaults:
  const sizes = product.sizes || ["S", "M", "L", "XL", "XXL"];
  const colors = product.colors || ["Black"];
  const isAvailable = product.status === "active" && product.stock > 0;

  const handleWhatsAppOrder = () => {
    if (sizes.length > 0 && sizes[0] !== "All Size" && !selectedSize) {
      alert("Harap pilih Size (Ukuran) terlebih dahulu!");
      return;
    }
    if (colors.length > 0 && !selectedColor) {
      alert("Harap pilih Color (Warna) terlebih dahulu!");
      return;
    }

    const sizeText = selectedSize ? selectedSize : "All Size";
    const colorText = selectedColor ? selectedColor : "Sesuai Gambar";
    
    // Format pesan WhatsApp
    const message = `Halo Admin Sukabumi Eundeur,%0A%0ASaya ingin memesan merchandise berikut:%0A*Produk:* ${product.name}%0A*Warna:* ${colorText}%0A*Size:* ${sizeText}%0A*Harga:* Rp ${product.price.toLocaleString("id-ID")}%0A%0AApakah stoknya masih tersedia?`;
    
    // Ganti nomor WhatsApp dengan nomor WA Anda
    const waNumber = "6281234567890"; 
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="container" style={{ padding: "60px 24px 100px 24px" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: "40px", fontWeight: "bold", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "4px" }}>
        &larr; KEMBALI KE KATALOG
      </a>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "clamp(24px, 5vw, 60px)" }}>
        
        {/* Gambar Produk */}
        <div style={{ position: "relative", width: "100%", height: "clamp(300px, 50vh, 500px)", border: "4px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-primary)", boxShadow: "8px 8px 0 var(--color-text-primary)" }}>
          {(!isAvailable) && (
            <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "8px 16px", zIndex: 10, fontWeight: "bold", letterSpacing: "1px" }}>
              {product.status === "upcoming" ? "COMING SOON" : "SOLD OUT"}
            </div>
          )}
          <div style={{ width: "100%", height: "100%", backgroundImage: `url('${product.image_url || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000"}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(110%)", mixBlendMode: "multiply" }} />
        </div>

        {/* Info & Form Pemesanan */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", marginBottom: "16px", fontFamily: "var(--font-heading)" }}>{product.name}</h1>
          <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)" }}>Rp {product.price.toLocaleString("id-ID")}</p>
          
          <div style={{ marginBottom: "32px", borderTop: "2px solid var(--color-border)", borderBottom: "2px solid var(--color-border)", padding: "24px 0" }}>
            <p style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{product.description}</p>
          </div>

          {/* Pemilihan Warna */}
          {colors.length > 0 && (
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "12px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PILIH WARNA:</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {colors.map((color: string) => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      padding: "8px 24px",
                      border: "2px solid var(--color-text-primary)",
                      backgroundColor: selectedColor === color ? "var(--color-text-primary)" : "transparent",
                      color: selectedColor === color ? "var(--color-bg-primary)" : "var(--color-text-primary)",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "all 0.2s"
                    }}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pemilihan Size */}
          {sizes.length > 0 && sizes[0] !== "All Size" && (
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "12px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PILIH SIZE:</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {sizes.map((size: string) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid var(--color-text-primary)",
                      backgroundColor: selectedSize === size ? "var(--color-text-primary)" : "transparent",
                      color: selectedSize === size ? "var(--color-bg-primary)" : "var(--color-text-primary)",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "all 0.2s"
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tombol Action */}
          <button 
            onClick={handleWhatsAppOrder}
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "20px",
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              opacity: !isAvailable ? 0.5 : 1,
              cursor: !isAvailable ? "not-allowed" : "pointer",
              border: "4px solid var(--color-text-primary)"
            }}
            disabled={!isAvailable}
          >
            {!isAvailable ? "MERCHANDISE HABIS" : "PESAN SEKARANG (VIA WHATSAPP)"}
          </button>
          <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
            Anda akan diarahkan ke WhatsApp Admin dengan format order otomatis.
          </p>

        </div>
      </div>
    </div>
  );
}
