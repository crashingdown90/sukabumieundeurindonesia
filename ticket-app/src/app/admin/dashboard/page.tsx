"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface EventItem {
  id: string;
  name: string;
  slug: string;
  date: string;
  status: string;
  stock: number;
}

export default function TicketDashboard() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    const expiry = localStorage.getItem("admin_expiry");
    if (!token || !expiry || Date.now() > Number(expiry)) {
      router.push("/admin");
      return;
    }

    fetch("/api/events")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_expiry");
    router.push("/admin");
  };

  if (loading) return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-bg-primary)" }}><p style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)" }}>LOADING DASHBOARD...</p></div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg-primary)", padding: "120px 24px 80px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", marginBottom: "8px" }}>TICKET DASHBOARD</h1>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem" }}>Kelola Acara dan Laporan Penjualan Tiket</p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={handleLogout} style={{ padding: "10px 20px", border: "1px solid var(--color-border)", backgroundColor: "transparent", color: "var(--color-text-primary)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", cursor: "pointer" }}>LOGOUT</button>
            <a href="/admin/events/new" style={{ padding: "10px 20px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontSize: "0.9rem", fontFamily: "var(--font-heading)", fontWeight: "bold" }}>+ BUAT ACARA BARU</a>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          <div style={{ padding: "24px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "1px", marginBottom: "8px" }}>TOTAL ACARA</p>
            <p style={{ fontSize: "3rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>{events.length}</p>
          </div>
          <div style={{ padding: "24px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "1px", marginBottom: "8px" }}>TIKET TERJUAL (ALL TIME)</p>
            <p style={{ fontSize: "3rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>0</p>
          </div>
          <div style={{ padding: "24px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "1px", marginBottom: "8px" }}>PENDAPATAN TIKET</p>
            <p style={{ fontSize: "3rem", fontWeight: "bold", fontFamily: "var(--font-heading)" }}>Rp 0</p>
          </div>
        </div>

        {/* Events Table / List */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontFamily: "var(--font-heading)", marginBottom: "24px", borderBottom: "1px solid var(--color-border)", paddingBottom: "12px" }}>DAFTAR ACARA</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {events.length === 0 ? (
              <p style={{ color: "var(--color-text-secondary)" }}>Belum ada acara yang dibuat.</p>
            ) : (
              events.map(event => (
                <div key={event.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", backgroundColor: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", gap: "16px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <h4 style={{ fontSize: "1.2rem", marginBottom: "4px", fontFamily: "var(--font-heading)" }}>{event.name}</h4>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>{new Date(event.date).toLocaleDateString("id-ID")} • Kuota Sisa: {event.stock}</p>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ padding: "6px 12px", fontSize: "0.8rem", fontWeight: "bold", fontFamily: "var(--font-heading)", backgroundColor: event.status === "active" ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)", color: event.status === "active" ? "#22c55e" : "#f59e0b", border: `1px solid ${event.status === "active" ? "#22c55e" : "#f59e0b"}` }}>
                      {event.status.toUpperCase()}
                    </span>
                    <a href={`/admin/events/edit/${event.slug}`} style={{ padding: "8px 16px", fontSize: "0.9rem", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}>EDIT</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
