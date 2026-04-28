"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const rawSlug = params.slug as string;
  const categoryName = rawSlug.replace(/-/g, " ").toUpperCase();

  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter events based on category (simple keyword matching since we don't have a strict category column)
          let filtered = data;
          if (rawSlug.includes("gig")) {
            filtered = data.filter(e => e.name.toLowerCase().includes("gig") || e.description.toLowerCase().includes("gig"));
          } else if (rawSlug.includes("festival")) {
            filtered = data.filter(e => e.name.toLowerCase().includes("festival") || e.description.toLowerCase().includes("festival"));
          } else if (rawSlug.includes("workshop")) {
            filtered = data.filter(e => e.name.toLowerCase().includes("workshop") || e.description.toLowerCase().includes("workshop"));
          } else if (rawSlug.includes("concert")) {
            filtered = data.filter(e => e.name.toLowerCase().includes("concert") || e.description.toLowerCase().includes("concert"));
          }
          
          setEvents(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [rawSlug]);

  return (
    <>
      <div style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "16px", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>{categoryName}</h1>
        <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", letterSpacing: "2px" }}>MENAMPILKAN SEMUA EVENT DI KATEGORI INI</p>
      </div>

      <div className="container" style={{ padding: "80px 24px", minHeight: "50vh" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {loading ? (
            <p style={{ fontSize: "1.2rem", textAlign: "center", padding: "40px", fontFamily: "var(--font-heading)" }}>MEMUAT DATA...</p>
          ) : events.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "var(--color-text-secondary)" }}>
              <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>BELUM ADA EVENT UNTUK KATEGORI INI.</p>
              <a href="/" style={{ color: "var(--color-text-primary)", textDecoration: "underline", fontWeight: "bold" }}>LIHAT SEMUA EVENT</a>
            </div>
          ) : (
            events.map((event) => {
              const eventDate = new Date(event.date);
              const formattedDate = eventDate.toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
              const isAvailable = event.status === "active" && event.stock > 0;

              return (
                <div key={event.id} className="ticket-card" style={{ opacity: event.status === "upcoming" ? 0.8 : 1 }}>
                  <div className="ticket-img" style={{ backgroundImage: `url('${event.poster_url || "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop"}')`, filter: "grayscale(100%) contrast(150%) brightness(0.5)" }}></div>
                  <div className="ticket-content">
                    <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "0.9rem", fontWeight: "bold", color: "var(--color-bg-primary)", flexWrap: "wrap" }}>
                      <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px", textTransform: "uppercase" }}>{formattedDate}</span>
                      <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px", textTransform: "uppercase" }}>{event.location}</span>
                    </div>
                    <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "8px", lineHeight: "1.1", textTransform: "uppercase" }}>{event.name}</h3>
                    <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                      {event.description}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "1.8rem", fontWeight: "bold", whiteSpace: "nowrap" }}>Rp {event.price.toLocaleString("id-ID")}</span>
                      {isAvailable ? (
                        <a href={`/ticket/${event.slug}`} className="btn" style={{ padding: "12px 32px", width: "fit-content", backgroundColor: "#22c55e", color: "#fff", border: "4px solid #22c55e" }}>BELI TIKET</a>
                      ) : (
                        <button className="btn" style={{ padding: "12px 32px", width: "fit-content", border: "4px solid var(--color-text-primary)", opacity: 0.5, cursor: "not-allowed" }} disabled>
                          {event.status === "upcoming" ? "COMING SOON" : "SOLD OUT"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}

        </div>
      </div>
    </>
  );
}
