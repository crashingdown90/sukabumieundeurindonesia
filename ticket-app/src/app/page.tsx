"use client";
import { useEffect, useState } from "react";

interface EventItem {
  id: string;
  name: string;
  slug: string;
  date: string;
  location: string;
  price: number;
  stock: number;
  description: string;
  poster_url: string;
  status: string;
}

export default function TicketHome() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section style={{ 
        width: "100%", 
        height: "clamp(400px, 60vh, 700px)", 
        position: "relative",
        borderBottom: "4px solid var(--color-border)",
        backgroundColor: "var(--color-bg-primary)",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: "url('/nano-banana.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(120%)",
          opacity: 0.8
        }} />
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)"
        }} />

        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          width: "90%"
        }}>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "16px", textShadow: "4px 4px 0 #000", lineHeight: "1" }}>
            OFFICIAL TICKETING
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: "bold", letterSpacing: "2px", textShadow: "2px 2px 0 #000" }}>
            PLATFORM RESMI PEMBELIAN TIKET EVENT SUKABUMI EUNDEUR
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid var(--color-border)", paddingBottom: "16px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem" }}>UPCOMING EVENTS</h2>
        </div>

        {/* Event List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {loading ? (
            <p style={{ fontSize: "1.2rem", textAlign: "center", padding: "40px", fontFamily: "var(--font-heading)" }}>MEMUAT DATA...</p>
          ) : events.length === 0 ? (
            <p style={{ fontSize: "1.2rem", textAlign: "center", padding: "40px", color: "var(--color-text-secondary)" }}>BELUM ADA EVENT YANG TERSEDIA.</p>
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
                      <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>{formattedDate}</span>
                      <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>{event.location.toUpperCase()}</span>
                    </div>
                    <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "8px", lineHeight: "1.1" }}>{event.name}</h3>
                    <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                      {event.description}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "1.8rem", fontWeight: "bold", whiteSpace: "nowrap" }}>Rp {event.price.toLocaleString("id-ID")}</span>
                      {isAvailable ? (
                        <a href={`/event/${event.slug}`} className="btn" style={{ padding: "12px 32px", width: "fit-content", backgroundColor: "#22c55e", color: "#fff", border: "4px solid #22c55e" }}>BELI TIKET</a>
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
