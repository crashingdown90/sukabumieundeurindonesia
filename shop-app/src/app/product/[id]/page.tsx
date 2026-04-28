"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

// Placeholder data (same as home page)
const products = [
  {
    id: "1",
    name: "SUKABUMI EUNDEUR OFFICIAL T-SHIRT 2024",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK",
    description: "T-Shirt official dengan material Heavy Cotton 24s berkualitas tinggi. Potongan Boxy Fit, sablon plastisol ink yang kuat dan tahan lama.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"]
  },
  {
    id: "2",
    name: "SOUND REVIVAL HOODIE (BLACK)",
    price: "Rp 350.000",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    status: "PRE-ORDER",
    description: "Premium Fleece 330gsm. Oversized fit dengan detail bordir logo. Sangat cocok untuk moshpit di suhu dingin.",
    sizes: ["M", "L", "XL"],
    colors: ["Black"]
  },
  {
    id: "3",
    name: "TOTAL AGGRESSION LONGSLEEVE",
    price: "Rp 210.000",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    status: "SOLD OUT",
    description: "Longsleeve dengan detail print di lengan. Heavy Cotton.",
    sizes: ["L", "XL"],
    colors: ["Black", "Red"]
  },
  {
    id: "4",
    name: "REST IN PEACE TOTEBAG",
    price: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1597818784365-5d9c228a47ff?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK",
    description: "Kanvas tebal 14oz. Sablon full print. Ukuran 40x45cm.",
    sizes: ["All Size"],
    colors: ["Black"]
  },
  {
    id: "5",
    name: "OFFICIAL LOGO CAP",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK",
    description: "Topi Trucker/Snapback dengan bordir 3D logo utama.",
    sizes: ["All Size"],
    colors: ["Black", "Charcoal"]
  },
  {
    id: "6",
    name: "DISTORTION LANYARD",
    price: "Rp 45.000",
    image: "https://images.unsplash.com/photo-1610443423719-7d08baee1da4?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK",
    description: "Lanyard tebal dengan print 2 sisi lengkap dengan pengait baja.",
    sizes: ["All Size"],
    colors: ["Black"]
  }
];

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return (
      <div className="container" style={{ padding: "100px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>PRODUK TIDAK DITEMUKAN</h1>
        <a href="/" className="btn" style={{ marginTop: "24px" }}>&larr; KEMBALI KE KATALOG</a>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    if (product.sizes.length > 0 && product.sizes[0] !== "All Size" && !selectedSize) {
      alert("Harap pilih Size (Ukuran) terlebih dahulu!");
      return;
    }
    if (product.colors.length > 0 && !selectedColor) {
      alert("Harap pilih Color (Warna) terlebih dahulu!");
      return;
    }

    const sizeText = selectedSize ? selectedSize : "All Size";
    const colorText = selectedColor ? selectedColor : "Sesuai Gambar";
    
    // Format pesan WhatsApp
    const message = `Halo Admin Sukabumi Eundeur,%0A%0ASaya ingin memesan merchandise berikut:%0A*Produk:* ${product.name}%0A*Warna:* ${colorText}%0A*Size:* ${sizeText}%0A*Harga:* ${product.price}%0A%0AApakah stoknya masih tersedia?`;
    
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
        <div style={{ position: "relative", width: "100%", height: "clamp(300px, 50vh, 500px)", border: "2px solid var(--color-text-primary)", backgroundColor: "#e4e4e7" }}>
          {product.status !== "READY STOCK" && (
            <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "8px 16px", zIndex: 10, fontWeight: "bold", letterSpacing: "1px" }}>
              {product.status}
            </div>
          )}
          <div style={{ width: "100%", height: "100%", backgroundImage: `url('${product.image}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(110%)", mixBlendMode: "multiply" }} />
        </div>

        {/* Info & Form Pemesanan */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.1", marginBottom: "16px" }}>{product.name}</h1>
          <p style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", color: "var(--color-text-secondary)" }}>{product.price}</p>
          
          <div style={{ marginBottom: "32px", borderTop: "2px solid var(--color-border)", borderBottom: "2px solid var(--color-border)", padding: "24px 0" }}>
            <p style={{ lineHeight: "1.6" }}>{product.description}</p>
          </div>

          {/* Pemilihan Warna */}
          {product.colors.length > 0 && (
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "12px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PILIH WARNA:</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {product.colors.map(color => (
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
          {product.sizes.length > 0 && product.sizes[0] !== "All Size" && (
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontWeight: "bold", marginBottom: "12px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PILIH SIZE:</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {product.sizes.map(size => (
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
              opacity: product.status === "SOLD OUT" ? 0.5 : 1,
              cursor: product.status === "SOLD OUT" ? "not-allowed" : "pointer"
            }}
            disabled={product.status === "SOLD OUT"}
          >
            {product.status === "SOLD OUT" ? "MERCHANDISE HABIS" : "PESAN SEKARANG (VIA WHATSAPP)"}
          </button>
          <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
            Anda akan diarahkan ke WhatsApp Admin dengan format order otomatis.
          </p>

        </div>
      </div>
    </div>
  );
}
