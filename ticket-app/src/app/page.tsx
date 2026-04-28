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
          
          {/* Coming Soon Ticket Card */}
          <div className="ticket-card" style={{ opacity: 0.8 }}>
            <div className="ticket-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop')", filter: "grayscale(100%) contrast(150%) brightness(0.5)" }}></div>
            <div className="ticket-content">
              <div style={{ display: "flex", gap: "16px", marginBottom: "16px", fontSize: "0.9rem", fontWeight: "bold", color: "var(--color-bg-primary)", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>TBA 2026</span>
                <span style={{ backgroundColor: "var(--color-text-primary)", padding: "4px 12px" }}>SUKABUMI</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "8px", lineHeight: "1.1" }}>SUKABUMI EUNDEUR FESTIVAL 2026</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                Persiapkan diri kalian untuk distorsi terbesar dalam sejarah pergerakan bawah tanah Sukabumi.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold", whiteSpace: "nowrap" }}>Rp --</span>
                <button className="btn" style={{ padding: "12px 32px", width: "fit-content", border: "4px solid var(--color-text-primary)", opacity: 0.5, cursor: "not-allowed" }} disabled>COMING SOON</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
