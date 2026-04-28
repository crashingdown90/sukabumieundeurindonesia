"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const [form, setForm] = useState({ 
    name: "", slug: "", category: "T-SHIRT", 
    price: 0, stock: 100, 
    description: "", image_url: "", status: "active",
    sizes: [] as string[], colors: [] as string[]
  });
  
  const [colorInput, setColorInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const availableSizes = ["S", "M", "L", "XL", "XXL", "All Size"];

  useEffect(() => {
    const token = localStorage.getItem("shop_admin_token");
    const expiry = localStorage.getItem("shop_admin_expiry");
    if (!token || !expiry || Date.now() > Number(expiry)) { router.push("/admin"); }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === "name") {
      setForm(prev => ({ ...prev, slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") }));
    }
  };

  const toggleSize = (size: string) => {
    setForm(prev => {
      const isSelected = prev.sizes.includes(size);
      if (isSelected) {
        return { ...prev, sizes: prev.sizes.filter(s => s !== size) };
      } else {
        return { ...prev, sizes: [...prev.sizes, size] };
      }
    });
  };

  const addColor = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && colorInput.trim() !== "") {
      e.preventDefault();
      if (!form.colors.includes(colorInput.trim())) {
        setForm(prev => ({ ...prev, colors: [...prev.colors, colorInput.trim()] }));
      }
      setColorInput("");
    }
  };

  const removeColor = (color: string) => {
    setForm(prev => ({ ...prev, colors: prev.colors.filter(c => c !== color) }));
  };

  const handleSave = async () => {
    if (!form.name.trim()) { setMessage("Nama produk wajib diisi."); return; }
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        setMessage("Gagal menyimpan produk.");
      }
    } catch {
      setMessage("Server error.");
    }
    setSaving(false);
  };

  const inputStyle = {
    width: "100%", padding: "14px", fontSize: "1rem",
    border: "2px solid var(--color-border)", backgroundColor: "var(--color-bg-primary)",
    color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none",
  };

  const labelStyle = { fontWeight: "bold" as const, fontSize: "0.9rem", fontFamily: "var(--font-heading)" as const, letterSpacing: "1px", marginBottom: "6px", display: "block" as const, color: "var(--color-text-secondary)" };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "120px 24px 80px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "4px solid var(--color-border)", paddingBottom: "24px", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>TAMBAH PRODUK BARU</h1>
          <a href="/admin/dashboard" style={{ padding: "10px 20px", border: "2px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>← KEMBALI</a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "40px" }}>
          
          {/* Form Kiri */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <label style={labelStyle}>NAMA MERCHANDISE</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Contoh: OFFICIAL T-SHIRT 2024" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>SLUG (URL PRODUK)</label>
              <input name="slug" value={form.slug} onChange={handleChange} style={{ ...inputStyle, color: "var(--color-text-secondary)" }} />
            </div>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label style={labelStyle}>KATEGORI</label>
                <select name="category" value={form.category} onChange={handleChange} style={inputStyle}>
                  <option value="T-SHIRT">T-SHIRT</option>
                  <option value="HOODIE">HOODIE</option>
                  <option value="OUTERWEAR">OUTERWEAR</option>
                  <option value="ACCESSORIES">ACCESSORIES</option>
                  <option value="MUSIC">MUSIC (CD/Vinyl/Kaset)</option>
                </select>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={labelStyle}>STATUS</label>
                <select name="status" value={form.status} onChange={handleChange} style={inputStyle}>
                  <option value="active">Active (Tersedia)</option>
                  <option value="upcoming">Pre-Order</option>
                  <option value="sold out">Sold Out (Habis)</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label style={labelStyle}>HARGA (Rp)</label>
                <input type="number" name="price" value={form.price} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={labelStyle}>STOK BARANG</label>
                <input type="number" name="stock" value={form.stock} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            {/* Opsi Ukuran & Warna */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
              <div style={{ flex: "1 1 200px" }}>
                <label style={labelStyle}>UKURAN TERSEDIA</label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      style={{
                        padding: "8px 16px",
                        border: "2px solid var(--color-text-primary)",
                        backgroundColor: form.sizes.includes(size) ? "var(--color-text-primary)" : "transparent",
                        color: form.sizes.includes(size) ? "var(--color-bg-primary)" : "var(--color-text-primary)",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontFamily: "var(--font-heading)"
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ flex: "1 1 200px" }}>
                <label style={labelStyle}>WARNA (TEKAN ENTER UNTUK MENAMBAH)</label>
                <input 
                  value={colorInput} 
                  onChange={(e) => setColorInput(e.target.value)} 
                  onKeyDown={addColor} 
                  placeholder="Contoh: Black" 
                  style={inputStyle} 
                />
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                  {form.colors.map(color => (
                    <span key={color} style={{ padding: "4px 12px", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: "8px" }}>
                      {color} <button onClick={() => removeColor(color)} style={{ background: "transparent", color: "#ef4444", border: "none", cursor: "pointer", fontWeight: "bold" }}>X</button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label style={labelStyle}>URL GAMBAR PRODUK</label>
              <input name="image_url" value={form.image_url} onChange={handleChange} placeholder="https://example.com/baju.jpg" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>DESKRIPSI LENGKAP</label>
              <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Jelaskan bahan kain, sablon, dan panduan ukuran..." style={{ ...inputStyle, resize: "vertical" }} />
            </div>

            {message && <p style={{ color: "#ef4444", fontWeight: "bold" }}>{message}</p>}

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "2px solid var(--color-border)", paddingTop: "24px" }}>
              <button onClick={handleSave} disabled={saving} style={{ flex: "1 1 150px", padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", cursor: "pointer", border: "4px solid #22c55e", backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold" }}>
                {saving ? "MENYIMPAN..." : "SIMPAN PRODUK & PUBLISH"}
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Live Preview */}
          <div style={{ display: "flex", flexDirection: "column" }}>
             <label style={{ ...labelStyle, marginBottom: "24px" }}>LIVE PREVIEW (KATALOG UTAMA)</label>
             <div style={{ maxWidth: "350px", margin: "0 auto", width: "100%" }}>
                <div className="product-card" style={{ border: "4px solid var(--color-text-primary)", display: "flex", flexDirection: "column", backgroundColor: "var(--color-bg-primary)", pointerEvents: "none" }}>
                  
                  {/* Image Container */}
                  <div className="product-img" style={{ position: "relative", backgroundImage: `url('${form.image_url || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000"}')`, filter: "grayscale(100%) contrast(120%)" }}>
                    {form.status === "sold out" && (
                      <div style={{ position: "absolute", top: "20px", right: "-40px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "8px 40px", transform: "rotate(45deg)", zIndex: 10, fontWeight: "bold", letterSpacing: "1px", fontSize: "0.9rem" }}>
                        SOLD OUT
                      </div>
                    )}
                    {form.status === "upcoming" && (
                      <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", padding: "8px 16px", border: "2px solid var(--color-text-primary)", zIndex: 10, fontWeight: "bold", fontSize: "0.8rem" }}>
                        PRE-ORDER
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="product-content">
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: "bold", marginBottom: "8px", letterSpacing: "1px" }}>{form.category || "CATEGORY"}</p>
                    <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", lineHeight: "1.2" }}>{form.name || "NAMA PRODUK"}</h3>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "24px", color: "var(--color-text-primary)" }}>Rp {Number(form.price).toLocaleString("id-ID")}</p>
                    
                    <div className="btn btn-primary" style={{ marginTop: "auto", width: "100%", opacity: form.status === "sold out" || form.stock <= 0 ? 0.5 : 1, textAlign: "center" }}>
                      LIHAT DETAIL
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
