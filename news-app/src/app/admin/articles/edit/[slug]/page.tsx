"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import RichTextEditor from "@/components/RichTextEditor";

const CATEGORIES = [
  { value: "berita-utama", label: "Berita Utama" },
  { value: "sains-musik", label: "Sains & Musik" },
  { value: "skena-lokal", label: "Skena Lokal" },
  { value: "review-album", label: "Review Album" },
  { value: "interview", label: "Interview" },
  { value: "gigs", label: "Gigs" },
];

export default function EditArticle() {
  const [form, setForm] = useState({ title: "", slug: "", category: "berita-utama", author: "REDAKSI", date: "", image: "", metaDescription: "", content: "", status: "draft" });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const expiry = localStorage.getItem("admin_expiry");
    if (!token || !expiry || Date.now() > Number(expiry)) { router.push("/admin"); return; }
    fetch(`/api/articles/${slug}`).then(r => r.json()).then(data => {
      if (data.error) { router.push("/admin/articles"); return; }
      setForm(data);
      setLoading(false);
    });
  }, [router, slug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (value: string) => {
    setForm(prev => ({ ...prev, content: value }));
  };

  const handleSave = async () => {
    if (!form.title.trim()) { setMessage("Judul wajib diisi."); return; }
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch(`/api/articles/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Artikel berhasil diupdate!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch {
      setMessage("Server error.");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("Yakin ingin menghapus artikel ini secara permanen?")) return;
    await fetch(`/api/articles/${slug}`, { method: "DELETE" });
    router.push("/admin/articles");
  };

  const inputStyle = {
    width: "100%", padding: "14px", fontSize: "1rem",
    border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-primary)",
    color: "var(--color-text-primary)", fontFamily: "var(--font-body)", outline: "none",
  };

  const labelStyle = { fontWeight: "bold" as const, fontSize: "0.9rem", fontFamily: "var(--font-heading)" as const, letterSpacing: "1px", marginBottom: "6px", display: "block" as const, color: "var(--color-text-secondary)" };

  if (loading) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)" }}><p style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>LOADING...</p></div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "24px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>EDIT ARTIKEL</h1>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="/admin/articles" style={{ padding: "10px 20px", border: "1px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>← KEMBALI</a>
            <button onClick={handleDelete} style={{ padding: "10px 20px", border: "1px solid #ef4444", backgroundColor: "transparent", color: "#ef4444", fontSize: "0.9rem", fontFamily: "var(--font-heading)", cursor: "pointer" }}>HAPUS</button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <label style={labelStyle}>JUDUL ARTIKEL</label>
            <input name="title" value={form.title} onChange={handleChange} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>SLUG (URL)</label>
            <input name="slug" value={form.slug} onChange={handleChange} style={{ ...inputStyle, color: "var(--color-text-secondary)" }} disabled />
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

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>STATUS</label>
              <select name="status" value={form.status} onChange={handleChange} style={inputStyle}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div>
            <label style={labelStyle}>URL GAMBAR UTAMA</label>
            <input name="image" value={form.image} onChange={handleChange} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>META DESCRIPTION (SEO)</label>
            <input name="metaDescription" value={form.metaDescription} onChange={handleChange} maxLength={160} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>KONTEN ARTIKEL</label>
            <RichTextEditor value={form.content} onChange={handleContentChange} />
          </div>

          {message && <p style={{ color: message.includes("berhasil") ? "#22c55e" : "#ef4444", fontWeight: "bold" }}>{message}</p>}

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "24px" }}>
            <button onClick={handleSave} disabled={saving} style={{ flex: 1, padding: "16px", fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", cursor: "pointer", border: "none", backgroundColor: "#22c55e", color: "#fff" }}>
              {saving ? "UPDATING..." : "UPDATE ARTIKEL"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
