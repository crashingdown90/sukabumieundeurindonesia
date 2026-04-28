"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Basic frontend auth check
    const token = localStorage.getItem("shop_admin_token");
    const expiry = localStorage.getItem("shop_admin_expiry");
    
    if (!token || !expiry || Date.now() > Number(expiry)) {
      router.push("/admin");
      return;
    }

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data produk", err);
        setLoading(false);
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("shop_admin_token");
    localStorage.removeItem("shop_admin_expiry");
    router.push("/admin");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "100px 24px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "4px solid var(--color-border)", paddingBottom: "24px", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>SHOP DASHBOARD</h1>
          <div style={{ display: "flex", gap: "16px" }}>
            <button onClick={handleLogout} style={{ padding: "10px 20px", border: "2px solid var(--color-text-secondary)", backgroundColor: "transparent", color: "var(--color-text-secondary)", cursor: "pointer", fontWeight: "bold" }}>LOGOUT</button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
          <h2 style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>DAFTAR MERCHANDISE</h2>
          <a href="/admin/products/new" className="btn" style={{ backgroundColor: "#22c55e", color: "#fff", border: "none", fontWeight: "bold" }}>+ TAMBAH PRODUK</a>
        </div>

        {loading ? (
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}>MEMUAT DATA...</p>
        ) : products.length === 0 ? (
          <div style={{ border: "2px solid var(--color-border)", padding: "40px", textAlign: "center" }}>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "16px" }}>Belum ada produk merchandise di database.</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "2px solid var(--color-border)", textAlign: "left" }}>
              <thead style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>
                <tr>
                  <th style={{ padding: "16px", border: "2px solid var(--color-border)" }}>PRODUK</th>
                  <th style={{ padding: "16px", border: "2px solid var(--color-border)" }}>KATEGORI</th>
                  <th style={{ padding: "16px", border: "2px solid var(--color-border)" }}>HARGA</th>
                  <th style={{ padding: "16px", border: "2px solid var(--color-border)" }}>STOK</th>
                  <th style={{ padding: "16px", border: "2px solid var(--color-border)" }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} style={{ borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-primary)" }}>
                    <td style={{ padding: "16px", border: "1px solid var(--color-border)" }}>
                      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{product.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)" }}>{product.slug}</div>
                    </td>
                    <td style={{ padding: "16px", border: "1px solid var(--color-border)" }}>{product.category}</td>
                    <td style={{ padding: "16px", border: "1px solid var(--color-border)" }}>Rp {product.price.toLocaleString("id-ID")}</td>
                    <td style={{ padding: "16px", border: "1px solid var(--color-border)" }}>{product.stock}</td>
                    <td style={{ padding: "16px", border: "1px solid var(--color-border)" }}>
                      <span style={{ 
                        padding: "4px 12px", 
                        fontSize: "0.8rem", 
                        fontWeight: "bold",
                        backgroundColor: product.status === "active" ? "#22c55e" : product.status === "upcoming" ? "#eab308" : "#ef4444",
                        color: product.status === "upcoming" ? "#000" : "#fff"
                      }}>
                        {product.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}
