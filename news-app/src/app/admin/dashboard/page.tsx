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
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "80px 16px 40px" }}>
      <div className="container" style={{ maxWidth: "1000px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid var(--color-border)", paddingBottom: "12px", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", lineHeight: "1" }}>DASHBOARD</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", marginTop: "4px", letterSpacing: "1px" }}>EUNDEUR NEWS</p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Link href="/" className="btn" style={{ padding: "6px 12px", fontSize: "0.75rem", backgroundColor: "transparent", color: "var(--color-text-primary)", border: "1px solid var(--color-border)" }}>← NEWS</Link>
            <button onClick={handleLogout} className="btn" style={{ padding: "6px 12px", backgroundColor: "transparent", border: "1px solid #ef4444", color: "#ef4444", fontSize: "0.75rem" }}>LOGOUT</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "12px", marginBottom: "24px" }}>
          <div className="product-card" style={{ padding: "16px 8px", textAlign: "center", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "6px" }}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", fontFamily: "var(--font-heading)", lineHeight: "1", color: "var(--color-text-primary)" }}>{articles.length}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.65rem", letterSpacing: "1px", marginTop: "8px", fontFamily: "var(--font-heading)" }}>TOTAL ARTIKEL</p>
          </div>
          <div className="product-card" style={{ padding: "16px 8px", textAlign: "center", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "6px" }}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", fontFamily: "var(--font-heading)", lineHeight: "1", color: "#22c55e" }}>{published}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.65rem", letterSpacing: "1px", marginTop: "8px", fontFamily: "var(--font-heading)" }}>PUBLISHED</p>
          </div>
          <div className="product-card" style={{ padding: "16px 8px", textAlign: "center", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", borderRadius: "6px" }}>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", fontFamily: "var(--font-heading)", lineHeight: "1", color: "#f59e0b" }}>{drafts}</p>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.65rem", letterSpacing: "1px", marginTop: "8px", fontFamily: "var(--font-heading)" }}>DRAFT</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "12px", marginBottom: "32px" }}>
          <Link href="/admin/articles/new" className="product-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px 8px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", textAlign: "center", textDecoration: "none", borderRadius: "6px" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "1px", fontWeight: "bold" }}>BUAT BARU</span>
          </Link>
          <Link href="/admin/articles" className="product-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px 8px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", textAlign: "center", textDecoration: "none", color: "var(--color-text-primary)", borderRadius: "6px" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "1px", fontWeight: "bold" }}>KELOLA</span>
          </Link>
          <Link href="/admin/media" className="product-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px 8px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)", textAlign: "center", textDecoration: "none", color: "var(--color-text-primary)", borderRadius: "6px" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "1px", fontWeight: "bold" }}>MEDIA</span>
          </Link>
        </div>

        {/* Recent Articles */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "8px", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
            <h2 style={{ fontSize: "1rem", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>ARTIKEL TERBARU</h2>
            <Link href="/admin/articles" className="hover-opacity" style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", letterSpacing: "1px" }}>LIHAT SEMUA →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {articles.slice(0, 5).map(a => (
              <Link href={`/admin/articles/edit/${a.slug}`} key={a.id} className="product-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", textDecoration: "none", color: "inherit", gap: "8px", flexWrap: "wrap", borderRadius: "6px" }}>
                <div style={{ flex: 1, minWidth: "150px" }}>
                  <h4 style={{ fontSize: "0.85rem", marginBottom: "4px", fontFamily: "var(--font-heading)", letterSpacing: "1px", lineHeight: "1.3" }}>{a.title}</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.7rem", display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.65rem", border: "1px solid var(--color-border)", padding: "2px 4px", borderRadius: "4px" }}>{a.category.replace('-', ' ')}</span>
                    <span>•</span>
                    <span>{a.date}</span>
                  </p>
                </div>
                <span style={{ padding: "4px 8px", fontSize: "0.65rem", fontWeight: "bold", fontFamily: "var(--font-heading)", letterSpacing: "1px", backgroundColor: a.status === "published" ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)", color: a.status === "published" ? "#22c55e" : "#f59e0b", border: `1px solid ${a.status === "published" ? "rgba(34,197,94,0.3)" : "rgba(245,158,11,0.3)"}`, borderRadius: "4px" }}>{a.status.toUpperCase()}</span>
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
