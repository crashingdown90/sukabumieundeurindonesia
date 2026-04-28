import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Gigs | Sukabumi Eundeur Indonesia",
  description: "Jadwal event, gig, dan pertunjukan dari pergerakan Sukabumi Eundeur.",
};

const upcomingEvents = [
  {
    id: 1,
    name: "SUKABUMI FESTIVAL 2026",
    date: "18 OKTOBER 2025",
    time: "15:00 - Selesai",
    location: "KOTA SUKABUMI (TBA)",
    status: "COMING SOON",
    description: "Perayaan kembalinya distorsi murni. Siapkan energi kalian untuk moshpit terbesar tahun depan."
  }
];

const pastEvents = [
  {
    id: 2,
    name: "REROUTE TO ROOTS",
    date: "21 SEPTEMBER 2024",
    location: "Stadion Surya Kencana"
  },
  {
    id: 3,
    name: "BEYOND THE WORLD",
    date: "17 SEPTEMBER 2023",
    location: "Stadion Surya Kencana"
  }
];

export default function EventsPage() {
  return (
    <div className="container" style={{ padding: "100px 24px" }}>
      
      {/* Header */}
      <header style={{ marginBottom: "100px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", marginBottom: "16px", textShadow: "0 10px 30px rgba(0,0,0,0.5)", fontWeight: "bold" }}>JADWAL GIG</h1>
        <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, transparent, white, transparent)", margin: "0 auto", borderRadius: "2px" }}></div>
      </header>

      {/* Upcoming Events */}
      <section style={{ marginBottom: "120px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>&#9654;</span> UPCOMING EVENTS
        </h2>
        <div style={{ display: "grid", gap: "40px" }}>
          {upcomingEvents.map(event => (
            <div key={event.id} className="card-hover" style={{ 
              borderRadius: "24px", 
              border: "1px solid rgba(255,255,255,0.2)", 
              padding: "48px", 
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)", 
              backgroundColor: "#18181b", 
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
            }}>
              {/* Subtle Glow Background */}
              <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "300px", height: "300px", background: "rgba(255,255,255,0.03)", filter: "blur(60px)", borderRadius: "50%", zIndex: 1 }}></div>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "32px", position: "relative", zIndex: 2 }}>
                <div style={{ flex: "1 1 500px" }}>
                  <h3 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "24px", lineHeight: "1.1" }}>{event.name}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", fontSize: "1.1rem", letterSpacing: "1px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ opacity: 0.5 }}>🗓️</span> {event.date}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ opacity: 0.5 }}>⏰</span> {event.time}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ opacity: 0.5 }}>📍</span> {event.location}</span>
                  </div>
                  <p style={{ marginTop: "32px", fontSize: "1.15rem", lineHeight: "1.8", maxWidth: "600px", color: "var(--color-text-secondary)" }}>
                    {event.description}
                  </p>
                </div>
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "24px" }}>
                  <div style={{ display: "inline-block", padding: "8px 20px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "30px", fontWeight: "bold", letterSpacing: "2px", fontSize: "0.9rem", backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(5px)" }}>
                    {event.status}
                  </div>
                  <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn hover-opacity" style={{ padding: "16px 40px", fontSize: "1.1rem", backgroundColor: "white", color: "black", borderColor: "white", borderRadius: "30px", fontWeight: "bold", letterSpacing: "1px" }}>
                    INFO TIKET
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px", color: "white", display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>&#9654;</span> PAST EVENTS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px" }}>
          {pastEvents.map(event => (
            <div key={event.id} className="card-hover" style={{ 
              padding: "32px", 
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)", 
              backgroundColor: "rgba(20,20,20,0.6)",
              backdropFilter: "blur(12px)"
            }}>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "16px", color: "white" }}>{event.name}</h3>
              <p style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)", letterSpacing: "1px", fontSize: "0.95rem" }}>{event.date}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <a href="/biography" className="hover-opacity" style={{ fontWeight: "bold", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "8px", textDecoration: "none", color: "var(--color-text-secondary)", letterSpacing: "1px" }}>LIHAT SEJARAH LENGKAP &rarr;</a>
        </div>
      </section>
    </div>
  );
}
