import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Gigs | Sukabumi Eundeur Indonesia",
  description: "Jadwal event, gig, dan pertunjukan dari pergerakan Sukabumi Eundeur.",
};

const upcomingEvents = [
  {
    id: 1,
    name: "SUKABUMI EUNDEUR \"SOUND REVIVAL\"",
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
    <div className="container" style={{ padding: "60px 24px" }}>
      <header style={{ marginBottom: "80px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "16px" }}>JADWAL GIG</h1>
        <div style={{ width: "80px", height: "4px", backgroundColor: "var(--color-text-primary)", margin: "0 auto" }}></div>
      </header>

      <section style={{ marginBottom: "100px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "32px", borderBottom: "2px solid var(--color-border)", paddingBottom: "16px" }}>🔥 UPCOMING EVENTS</h2>
        <div style={{ display: "grid", gap: "32px" }}>
          {upcomingEvents.map(event => (
            <div key={event.id} style={{ border: "2px solid var(--color-text-primary)", padding: "40px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px" }}>
                <div>
                  <h3 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{event.name}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", color: "var(--color-bg-secondary)", fontFamily: "var(--font-heading)", fontSize: "1.2rem", letterSpacing: "1px" }}>
                    <span>🗓️ {event.date}</span>
                    <span>⏰ {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <p style={{ marginTop: "24px", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "600px", color: "var(--color-bg-secondary)" }}>
                    {event.description}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "inline-block", padding: "8px 16px", border: "2px solid var(--color-bg-primary)", fontWeight: "bold", letterSpacing: "2px", marginBottom: "24px" }}>
                    {event.status}
                  </div>
                  <br />
                  <a href="/ticket" className="btn" style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", borderColor: "var(--color-bg-primary)" }}>
                    INFO TIKET
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "2rem", marginBottom: "32px", borderBottom: "2px solid var(--color-border)", paddingBottom: "16px", color: "var(--color-text-secondary)" }}>PAST EVENTS</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
          {pastEvents.map(event => (
            <div key={event.id} style={{ padding: "24px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", color: "var(--color-text-secondary)" }}>{event.name}</h3>
              <p style={{ fontFamily: "var(--font-heading)", color: "var(--color-text-secondary)" }}>{event.date}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <a href="/biography" style={{ fontWeight: "bold", borderBottom: "2px solid var(--color-text-primary)", paddingBottom: "4px" }}>LIHAT SEJARAH LENGKAP &rarr;</a>
        </div>
      </section>
    </div>
  );
}
