"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewEvent() {
  const [form, setForm] = useState({ 
    name: "", slug: "", date: new Date().toISOString().split("T")[0], 
    location: "Sukabumi", price: 0, stock: 100, 
    description: "", poster_url: "", status: "upcoming" 
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const expiry = localStorage.getItem("admin_expiry");
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
    if (!form.name.trim()) { setMessage("Nama acara wajib diisi."); return; }
    setSaving(true);
    setMessage("");
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        setMessage("Gagal menyimpan acara.");
      }
    } catch {
      setMessage("Server error.");
    }
    setSaving(false);
  };

  const inputStyle = {
    width: "100%", padding: "14px", fontSize: "1rem",
    border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-primary)",
    color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none",
  };

  const labelStyle = { fontWeight: "bold" as const, fontSize: "0.9rem", fontFamily: "var(--font-heading)" as const, letterSpacing: "1px", marginBottom: "6px", display: "block" as const, color: "var(--color-text-secondary)" };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "120px 24px 80px" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>BUAT ACARA BARU</h1>
          <a href="/admin/dashboard" style={{ padding: "10px 20px", border: "1px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>← KEMBALI</a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <label style={labelStyle}>NAMA ACARA (GIGS/FESTIVAL)</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Contoh: Sukabumi Eundeur Festival 2026" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>SLUG (URL TIKET)</label>
            <input name="slug" value={form.slug} onChange={handleChange} style={{ ...inputStyle, color: "var(--color-text-secondary)" }} />
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>TANGGAL ACARA</label>
              <input type="datetime-local" name="date" value={form.date} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>LOKASI</label>
              <input name="location" value={form.location} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>HARGA TIKET (Rp)</label>
              <input type="number" name="price" value={form.price} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>KUOTA/STOK TIKET</label>
              <input type="number" name="stock" value={form.stock} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>STATUS TIKET</label>
              <select name="status" value={form.status} onChange={handleChange} style={inputStyle}>
                <option value="upcoming">Upcoming (Coming Soon)</option>
                <option value="active">Active (Bisa Dibeli)</option>
                <option value="completed">Completed (Selesai)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>URL POSTER ACARA</label>
            <input name="poster_url" value={form.poster_url} onChange={handleChange} placeholder="https://example.com/poster.jpg" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>DESKRIPSI ACARA</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={5} placeholder="Jelaskan detail acara, lineup band, dan peraturan penukaran tiket..." style={{ ...inputStyle, resize: "vertical" }} />
          </div>

          {message && <p style={{ color: "#ef4444", fontWeight: "bold" }}>{message}</p>}

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            <button onClick={handleSave} disabled={saving} style={{ flex: "1 1 150px", padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", cursor: "pointer", border: "none", backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold" }}>
              {saving ? "MENYIMPAN..." : "SIMPAN ACARA & PUBLISH"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
