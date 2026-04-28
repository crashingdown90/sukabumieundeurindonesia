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
}

export default function AdminDashboard() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const expiry = localStorage.getItem("admin_expiry");
    if (!token || !expiry || Date.now() > Number(expiry)) {
      router.push("/admin");
      return;
    }
    fetch("/api/articles").then(r => r.json()).then(data => {
      setArticles(data);
      setLoading(false);
    });
  }, [router]);

  const published = articles.filter(a => a.status === "published").length;
  const drafts = articles.filter(a => a.status === "draft").length;

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_expiry");
    router.push("/admin");
  };

  if (loading) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)" }}><p style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>LOADING...</p></div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "24px" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>DASHBOARD</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>Panel Redaksi — Sukabumi Eundeur News</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/" style={{ padding: "10px 20px", border: "1px solid var(--color-border)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>← NEWS</a>
            <button onClick={handleLogout} style={{ padding: "10px 20px", backgroundColor: "transparent", border: "1px solid #ef4444", color: "#ef4444", fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", cursor: "pointer" }}>LOGOUT</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          <div style={{ padding: "32px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <p style={{ fontSize: "3.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>{articles.length}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", letterSpacing: "2px", marginTop: "8px" }}>TOTAL ARTIKEL</p>
          </div>
          <div style={{ padding: "32px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <p style={{ fontSize: "3.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)", color: "#22c55e" }}>{published}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", letterSpacing: "2px", marginTop: "8px" }}>PUBLISHED</p>
          </div>
          <div style={{ padding: "32px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <p style={{ fontSize: "3.5rem", fontWeight: "bold", fontFamily: "var(--font-heading)", color: "#f59e0b" }}>{drafts}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", letterSpacing: "2px", marginTop: "8px" }}>DRAFT</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "48px", flexWrap: "wrap" }}>
          <a href="/admin/articles/new" style={{ flex: "1 1 200px", padding: "24px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", textAlign: "center", fontFamily: "var(--font-heading)", fontSize: "1.2rem", letterSpacing: "2px" }}>+ BUAT ARTIKEL BARU</a>
          <a href="/admin/articles" style={{ flex: "1 1 200px", padding: "24px", border: "1px solid var(--color-border)", textAlign: "center", fontFamily: "var(--font-heading)", fontSize: "1.2rem", letterSpacing: "2px", color: "var(--color-text-primary)" }}>KELOLA ARTIKEL</a>
        </div>

        {/* Recent Articles */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", marginBottom: "24px", letterSpacing: "2px" }}>ARTIKEL TERBARU</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {articles.slice(0, 5).map(a => (
              <a href={`/admin/articles/edit/${a.slug}`} key={a.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", textDecoration: "none", color: "inherit", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "4px", fontFamily: "var(--font-heading)" }}>{a.title}</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem" }}>{a.category} • {a.date}</p>
                </div>
                <span style={{ padding: "4px 12px", fontSize: "0.8rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", backgroundColor: a.status === "published" ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)", color: a.status === "published" ? "#22c55e" : "#f59e0b", border: `1px solid ${a.status === "published" ? "#22c55e" : "#f59e0b"}` }}>{a.status.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
