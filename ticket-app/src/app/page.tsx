export default function TicketHome() {
  return (
    <>
      <section style={{ 
        width: "100%", 
        height: "clamp(400px, 60vh, 700px)", 
        position: "relative",
        borderBottom: "4px solid var(--color-text-primary)",
        backgroundColor: "var(--color-bg-primary)",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: "url('https://images.unsplash.com/photo-1540039155732-d68a2bf0628a?q=80&w=2000&auto=format&fit=crop')",
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
            AMANKAN TIKET GIGS/EVENT SUKABUMI EUNDEUR DI SINI
          </p>
        </div>
      </section>

      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid var(--color-border)", paddingBottom: "16px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem" }}>UPCOMING EVENTS</h2>
        </div>

        {/* Event List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Ticket Card 1 */}
          <div style={{ display: "flex", flexWrap: "wrap", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-primary)" }}>
            <div style={{ flex: "1 1 300px", minHeight: "250px", backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%)", borderRight: "2px solid var(--color-text-primary)" }}></div>
            <div style={{ flex: "2 1 400px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "0.9rem", fontWeight: "bold", color: "var(--color-bg-primary)" }}>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>12 AGUSTUS 2024</span>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>GOR MERDEKA</span>
              </div>
              <h3 style={{ fontSize: "2.5rem", marginBottom: "8px", lineHeight: "1.1" }}>SUKABUMI EUNDEUR FESTIVAL 2024</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                Featuring: Burgerkill, DeadSquad, Rosemary, Jasad, and more local heroes.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Rp 75.000</span>
                <a href="/ticket/1" className="btn btn-primary" style={{ padding: "12px 32px" }}>BELI TIKET</a>
              </div>
            </div>
          </div>

          {/* Ticket Card 2 */}
          <div style={{ display: "flex", flexWrap: "wrap", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-secondary)" }}>
            <div style={{ flex: "1 1 300px", minHeight: "250px", backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(120%)", borderRight: "2px solid var(--color-text-primary)" }}></div>
            <div style={{ flex: "2 1 400px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "0.9rem", fontWeight: "bold", color: "var(--color-text-primary)", border: "2px solid var(--color-text-primary)", width: "fit-content" }}>
                <span style={{ padding: "4px 12px", borderRight: "2px solid var(--color-text-primary)" }}>25 NOVEMBER 2024</span>
                <span style={{ padding: "4px 12px" }}>SECRET VENUE</span>
              </div>
              <h3 style={{ fontSize: "2.5rem", marginBottom: "8px", lineHeight: "1.1" }}>REROUTE TO ROOTS Vol. 3</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                Intimate underground gig with 100% pure hardcore energy.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Rp 45.000</span>
                <button className="btn" style={{ padding: "12px 32px", opacity: 0.5, cursor: "not-allowed" }} disabled>SOLD OUT</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
