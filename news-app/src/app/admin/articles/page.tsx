"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: string;
  date: string;
  author: string;
}

export default function AdminArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const expiry = localStorage.getItem("admin_expiry");
    if (!token || !expiry || Date.now() > Number(expiry)) { router.push("/admin"); return; }
    loadArticles();
  }, [router]);

  const loadArticles = () => {
    fetch("/api/articles").then(r => r.json()).then(data => { setArticles(data); setLoading(false); });
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Yakin ingin menghapus artikel ini?")) return;
    await fetch(`/api/articles/${slug}`, { method: "DELETE" });
    loadArticles();
  };

  const handleToggleStatus = async (slug: string, currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    await fetch(`/api/articles/${slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: newStatus }) });
    loadArticles();
  };

  const filtered = filter === "all" ? articles : articles.filter(a => a.status === filter);

  if (loading) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)" }}><p style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>LOADING...</p></div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "24px" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>KELOLA ARTIKEL</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>{articles.length} artikel</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="/admin/dashboard" style={{ padding: "10px 20px", border: "1px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>← DASHBOARD</a>
            <a href="/admin/articles/new" style={{ padding: "10px 20px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontSize: "0.9rem", fontFamily: "var(--font-heading)" }}>+ BARU</a>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
          {["all", "published", "draft"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "8px 20px", fontSize: "0.85rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", cursor: "pointer", border: "1px solid var(--color-border)",
              backgroundColor: filter === f ? "var(--color-text-primary)" : "transparent",
              color: filter === f ? "var(--color-bg-primary)" : "var(--color-text-secondary)",
            }}>{f.toUpperCase()}</button>
          ))}
        </div>

        {/* Article List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {filtered.map(a => (
            <div key={a.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ fontSize: "1rem", marginBottom: "4px", fontFamily: "var(--font-heading)" }}>{a.title}</h4>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem" }}>{a.author} • {a.category} • {a.date}</p>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ padding: "4px 10px", fontSize: "0.75rem", fontWeight: "bold", fontFamily: "var(--font-heading)", backgroundColor: a.status === "published" ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)", color: a.status === "published" ? "#22c55e" : "#f59e0b", border: `1px solid ${a.status === "published" ? "#22c55e" : "#f59e0b"}` }}>{a.status.toUpperCase()}</span>
                <button onClick={() => handleToggleStatus(a.slug, a.status)} style={{ padding: "6px 12px", fontSize: "0.8rem", cursor: "pointer", border: "1px solid var(--color-border)", backgroundColor: "transparent", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)" }}>{a.status === "published" ? "UNPUBLISH" : "PUBLISH"}</button>
                <a href={`/admin/articles/edit/${a.slug}`} style={{ padding: "6px 12px", fontSize: "0.8rem", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}>EDIT</a>
                <button onClick={() => handleDelete(a.slug)} style={{ padding: "6px 12px", fontSize: "0.8rem", cursor: "pointer", border: "1px solid #ef4444", backgroundColor: "transparent", color: "#ef4444", fontFamily: "var(--font-heading)" }}>HAPUS</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
