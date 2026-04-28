"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import RichTextEditor from "@/components/RichTextEditor";

const CATEGORIES = [
  { value: "berita-utama", label: "Berita Utama" },
  { value: "sains-musik", label: "Sains & Musik" },
  { value: "skena-lokal", label: "Skena Lokal" },
  { value: "review-album", label: "Review Album" },
  { value: "interview", label: "Interview" },
  { value: "gigs", label: "Gigs" },
];

export default function NewArticle() {
  const [form, setForm] = useState({ title: "", slug: "", category: "berita-utama", author: "REDAKSI", date: new Date().toISOString().split("T")[0], image: "", metaDescription: "", content: "", status: "draft" });
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
    if (name === "title") {
      setForm(prev => ({ ...prev, slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") }));
    }
  };

  const handleContentChange = (value: string) => {
    setForm(prev => ({ ...prev, content: value }));
  };

  const handleSave = async (status: string) => {
    if (!form.title.trim()) { setMessage("Judul wajib diisi."); return; }
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status }),
      });
      if (res.ok) {
        router.push("/admin/articles");
      } else {
        setMessage("Gagal menyimpan artikel.");
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
          <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>BUAT ARTIKEL BARU</h1>
          <a href="/admin/articles" style={{ padding: "10px 20px", border: "1px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>← KEMBALI</a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <label style={labelStyle}>JUDUL ARTIKEL</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="Masukkan judul artikel..." style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>SLUG (URL)</label>
            <input name="slug" value={form.slug} onChange={handleChange} style={{ ...inputStyle, color: "var(--color-text-secondary)" }} />
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>KATEGORI</label>
              <select name="category" value={form.category} onChange={handleChange} style={inputStyle}>
                {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div style={{ flex: "1 1 150px" }}>
              <label style={labelStyle}>PENULIS</label>
              <input name="author" value={form.author} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ flex: "1 1 150px" }}>
              <label style={labelStyle}>TANGGAL</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>URL GAMBAR UTAMA</label>
            <input name="image" value={form.image} onChange={handleChange} placeholder="https://example.com/image.jpg atau /nama-file.png" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>META DESCRIPTION (SEO)</label>
            <input name="metaDescription" value={form.metaDescription} onChange={handleChange} placeholder="Deskripsi singkat untuk mesin pencari (max 160 karakter)" maxLength={160} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>KONTEN ARTIKEL</label>
            <RichTextEditor value={form.content} onChange={handleContentChange} />
          </div>

          {message && <p style={{ color: "#ef4444", fontWeight: "bold" }}>{message}</p>}

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            <button onClick={() => handleSave("draft")} disabled={saving} style={{ flex: "1 1 150px", padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", cursor: "pointer", border: "1px solid var(--color-border)", backgroundColor: "transparent", color: "var(--color-text-primary)" }}>
              {saving ? "SAVING..." : "SIMPAN DRAFT"}
            </button>
            <button onClick={() => handleSave("published")} disabled={saving} style={{ flex: "1 1 150px", padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", cursor: "pointer", border: "none", backgroundColor: "#22c55e", color: "#fff" }}>
              {saving ? "PUBLISHING..." : "PUBLISH SEKARANG"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
