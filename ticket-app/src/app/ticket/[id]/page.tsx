"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function TicketDetailPage() {
  const params = useParams();
  const ticketId = params.id as string;
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const foundEvent = data.find(e => e.slug === ticketId || e.id === ticketId);
          setEvent(foundEvent);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [ticketId]);

  if (loading) {
    return (
      <div style={{ padding: "100px 24px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>MEMUAT DATA EVENT...</h2>
      </div>
    );
  }

  if (!event) {
    return (
      <div style={{ padding: "100px 24px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", color: "red" }}>EVENT TIDAK DITEMUKAN</h2>
        <a href="/" style={{ display: "inline-block", marginTop: "24px", padding: "12px 32px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", fontWeight: "bold", textDecoration: "none" }}>KEMBALI KE HOME</a>
      </div>
    );
  }

  const isAvailable = event.status === "active" && event.stock > 0;

  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container" style={{ padding: "40px 24px" }}>
          <a href="/" style={{ fontSize: "0.9rem", fontFamily: "var(--font-heading)", letterSpacing: "1px", color: "var(--color-text-secondary)", textDecoration: "none" }}>← KEMBALI KE DAFTAR EVENT</a>
        </div>
      </div>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          
          {/* Left Column: Image & Details */}
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ width: "100%", height: "400px", backgroundImage: `url('${event.poster_url || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000"}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%)", border: "1px solid var(--color-border)", marginBottom: "40px" }}></div>
            
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px", textTransform: "uppercase" }}>{event.name}</h2>
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px", fontSize: "0.8rem", fontWeight: "bold", color: "var(--color-bg-primary)", fontFamily: "var(--font-heading)", flexWrap: "wrap" }}>
              <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px", textTransform: "uppercase" }}>{new Date(event.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px", textTransform: "uppercase" }}>{event.location}</span>
            </div>

            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "24px", whiteSpace: "pre-wrap" }}>
              {event.description}
            </p>

            <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "24px", marginBottom: "40px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>STATUS TIKET:</h3>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                {isAvailable ? "🟢 TERSEDIA" : event.status === "upcoming" ? "⏳ COMING SOON" : "🔴 SOLD OUT"} 
                <span style={{ color: "var(--color-border)" }}>|</span> SISA TIKET: {event.stock}
              </p>
            </div>
          </div>

          {/* Right Column: Checkout Box */}
          <div style={{ flex: "1 1 400px" }}>
            <div style={{ border: "1px solid var(--color-border)", padding: "32px", backgroundColor: "var(--color-bg-secondary)", position: "sticky", top: "120px" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "24px", borderBottom: "1px solid var(--color-border)", paddingBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>PEMBELIAN TIKET</h2>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed var(--color-border)", paddingBottom: "16px", marginBottom: "16px" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "4px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>TIKET REGULER</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>Akses ke seluruh area festival.</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.3rem", fontWeight: "bold", display: "block", fontFamily: "var(--font-heading)" }}>Rp {event.price.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {isAvailable ? (
                <a href={`/checkout/${ticketId}`} style={{ display: "block", width: "100%", padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "none", backgroundColor: "#22c55e", color: "#fff", fontWeight: "bold", textAlign: "center", textDecoration: "none", marginTop: "32px" }}>
                  BELI SEKARANG
                </a>
              ) : (
                <button disabled style={{ display: "block", width: "100%", padding: "16px", fontSize: "1.1rem", fontFamily: "var(--font-heading)", letterSpacing: "2px", border: "1px solid var(--color-border)", backgroundColor: "transparent", color: "var(--color-text-secondary)", fontWeight: "bold", textAlign: "center", marginTop: "32px", cursor: "not-allowed" }}>
                  {event.status === "upcoming" ? "BELUM TERSEDIA" : "SOLD OUT"}
                </button>
              )}
              
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", textAlign: "center", marginTop: "16px", lineHeight: "1.4" }}>
                Dengan membeli tiket, Anda menyetujui Syarat & Ketentuan.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
