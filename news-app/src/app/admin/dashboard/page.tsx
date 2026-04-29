"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      if (Array.isArray(data)) {
        setArticles(data);
      } else {
        setArticles([]);
        console.error("Failed to load articles:", data.error);
      }
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
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "clamp(80px, 15vw, 120px) clamp(16px, 4vw, 24px) 40px" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px", marginBottom: "clamp(24px, 5vw, 32px)", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", fontFamily: "var(--font-heading)", letterSpacing: "2px", lineHeight: "1" }}>DASHBOARD</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(0.8rem, 2vw, 0.9rem)", marginTop: "8px", letterSpacing: "1px" }}>PANEL REDAKSI — SUKABUMI EUNDEUR NEWS</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/" className="btn" style={{ padding: "8px 16px", fontSize: "0.85rem", backgroundColor: "transparent", color: "var(--color-text-primary)", border: "1px solid var(--color-border)" }}>← NEWS</Link>
            <button onClick={handleLogout} className="btn" style={{ padding: "8px 16px", backgroundColor: "transparent", border: "1px solid #ef4444", color: "#ef4444", fontSize: "0.85rem" }}>LOGOUT</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "clamp(12px, 3vw, 16px)", marginBottom: "clamp(32px, 6vw, 40px)" }}>
          <div className="product-card" style={{ padding: "clamp(16px, 4vw, 24px)", textAlign: "center", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "8px" }}>
            <p style={{ fontSize: "clamp(1.8rem, 6vw, 2.5rem)", fontWeight: "bold", fontFamily: "var(--font-heading)", lineHeight: "1", color: "var(--color-text-primary)" }}>{articles.length}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", letterSpacing: "1px", marginTop: "8px", fontFamily: "var(--font-heading)" }}>TOTAL ARTIKEL</p>
          </div>
          <div className="product-card" style={{ padding: "clamp(16px, 4vw, 24px)", textAlign: "center", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "8px" }}>
            <p style={{ fontSize: "clamp(1.8rem, 6vw, 2.5rem)", fontWeight: "bold", fontFamily: "var(--font-heading)", lineHeight: "1", color: "#22c55e" }}>{published}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", letterSpacing: "1px", marginTop: "8px", fontFamily: "var(--font-heading)" }}>PUBLISHED</p>
          </div>
          <div className="product-card" style={{ padding: "clamp(16px, 4vw, 24px)", textAlign: "center", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "8px" }}>
            <p style={{ fontSize: "clamp(1.8rem, 6vw, 2.5rem)", fontWeight: "bold", fontFamily: "var(--font-heading)", lineHeight: "1", color: "#f59e0b" }}>{drafts}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", letterSpacing: "1px", marginTop: "8px", fontFamily: "var(--font-heading)" }}>DRAFT</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "clamp(12px, 3vw, 16px)", marginBottom: "clamp(32px, 6vw, 40px)" }}>
          <Link href="/admin/articles/new" className="product-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(20px, 5vw, 32px)", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", textAlign: "center", textDecoration: "none", borderRadius: "8px" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 3vw, 1.2rem)", letterSpacing: "1px", fontWeight: "bold" }}>BUAT ARTIKEL BARU</span>
          </Link>
          <Link href="/admin/articles" className="product-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(20px, 5vw, 32px)", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", textAlign: "center", textDecoration: "none", color: "var(--color-text-primary)", borderRadius: "8px" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 3vw, 1.2rem)", letterSpacing: "1px", fontWeight: "bold" }}>KELOLA ARTIKEL</span>
          </Link>
          <Link href="/admin/media" className="product-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(20px, 5vw, 32px)", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", textAlign: "center", textDecoration: "none", color: "var(--color-text-primary)", borderRadius: "8px" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem, 3vw, 1.2rem)", letterSpacing: "1px", fontWeight: "bold" }}>GALERI MEDIA</span>
          </Link>
        </div>

        {/* Recent Articles */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "12px", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
            <h2 style={{ fontSize: "clamp(1.2rem, 4vw, 1.4rem)", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>ARTIKEL TERBARU</h2>
            <Link href="/admin/articles" className="hover-opacity" style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", letterSpacing: "1px" }}>LIHAT SEMUA →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {articles.slice(0, 5).map(a => (
              <Link href={`/admin/articles/edit/${a.slug}`} key={a.id} className="product-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", textDecoration: "none", color: "inherit", gap: "12px", flexWrap: "wrap", borderRadius: "8px" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h4 style={{ fontSize: "clamp(0.95rem, 3vw, 1.05rem)", marginBottom: "6px", fontFamily: "var(--font-heading)", letterSpacing: "1px", lineHeight: "1.3" }}>{a.title}</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.75rem", border: "1px solid var(--color-border)", padding: "2px 6px", borderRadius: "4px" }}>{a.category.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{a.date}</span>
                  </p>
                </div>
                <span style={{ padding: "4px 12px", fontSize: "0.75rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", backgroundColor: a.status === "published" ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)", color: a.status === "published" ? "#22c55e" : "#f59e0b", border: `1px solid ${a.status === "published" ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)"}`, borderRadius: "20px" }}>{a.status.toUpperCase()}</span>
              </Link>
            ))}
            {articles.length === 0 && (
              <div style={{ padding: "32px", textAlign: "center", border: "1px dashed var(--color-border)", borderRadius: "8px", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Belum ada artikel. Mulai menulis sekarang!
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
