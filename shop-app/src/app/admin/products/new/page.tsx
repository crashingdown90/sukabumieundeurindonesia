"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const [form, setForm] = useState({ 
    name: "", slug: "", category: "T-SHIRT", 
    price: 0, stock: 100, 
    description: "", image_url: "", status: "active" 
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

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
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "4px solid var(--color-border)", paddingBottom: "24px", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>TAMBAH PRODUK BARU</h1>
          <a href="/admin/dashboard" style={{ padding: "10px 20px", border: "2px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>← KEMBALI</a>
        </div>

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

      </div>
    </div>
  );
}
