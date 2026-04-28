import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Biography & History | Sukabumi Eundeur Indonesia",
  description: "Jejak sejarah dan pergerakan Sukabumi Eundeur dari masa ke masa.",
};

const eventsHistory = [
  { 
    title: "SUKABUMI EUNDEUR I", 
    date: "05 November 2000", 
    location: "GOR Merdeka Kota Sukabumi", 
    desc: "Langkah pertama. Ratusan metalhead memadati GOR Merdeka, menjadi saksi lahirnya pergerakan bawah tanah paling masif di Sukabumi.",
    img: "https://images.unsplash.com/photo-1540039155732-d68a2bf0628a?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "SUKABUMI EUNDEUR V", 
    date: "03 Oktober 2004", 
    location: "GOR Merdeka Kota Sukabumi", 
    desc: "Mencapai titik didih. Ribuan tiket terjual habis. Sukabumi Eundeur resmi menjadi barometer gigs metal di Jawa Barat.",
    img: "https://images.unsplash.com/photo-1470229722913-7c090be5f564?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "SUKABUMI EUNDEUR \"ARISE OF MONSTER\"", 
    date: "09 November 2014", 
    location: "Lap. Yon Armed 13 Sukabumi", 
    desc: "Era baru di venue outdoor raksasa. Menghadirkan lineup monster yang menggetarkan bumi Sukabumi dari pagi hingga malam.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "SUKABUMI EUNDEUR \"REROUTE TO ROOTS\"", 
    date: "21 September 2024", 
    location: "Stadion Surya Kencana Kota Sukabumi", 
    desc: "Kembali ke akar. Merayakan lebih dari dua dekade kebersamaan, idealisme, dan kemerdekaan berekspresi tanpa henti.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop"
  },
];

const hallOfFame = [
  "BURGERKILL", "DEADSQUAD", "JASAD", "SERINGAI", "SIKSAKUBUR", 
  "DEATH VOMIT", "NOXA", "BESIDE", "FORGOTTEN", "REVENGE THE FATE",
  "DOWN FOR LIFE", "KOIL", "ROTOR", "HELLCRUST", "BETRAYER"
];

export default function BiographyPage() {
  return (
    <>
      {/* 1. Hero Banner Raksasa */}
      <section style={{ 
        width: "100vw", 
        marginLeft: "calc(-50vw + 50%)",
        height: "70vh", 
        minHeight: "500px",
        position: "relative",
        backgroundColor: "var(--color-bg-primary)",
        display: "flex",
        alignItems: "flex-end",
        padding: "40px 24px",
        overflow: "hidden"
      }}>
        <Image 
          src="/biography-hero.png" 
          alt="Vintage Underground Gig" 
          fill 
          style={{ objectFit: "cover", filter: "grayscale(80%) contrast(110%) brightness(0.8)" }} 
          priority 
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0) 100%)" }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 10, color: "white", width: "100%", paddingBottom: "20px" }}>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: "1.1", marginBottom: "16px", letterSpacing: "-1px", textShadow: "0 10px 30px rgba(0,0,0,0.8)", fontWeight: "bold" }}>
            20 TAHUN DISTORSI
          </h1>
          <p style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: "500", maxWidth: "800px", color: "rgba(255,255,255,0.8)", textShadow: "0 5px 15px rgba(0,0,0,0.5)" }}>
            Jejak sejarah, darah, dan keringat Sukabumi Eundeur. Dari gig kecil di sudut kota, menjadi raksasa skena bawah tanah.
          </p>
        </div>
      </section>

      {/* 2. The Founders / The Collective Section */}
      <section className="container" style={{ padding: "100px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center", backgroundColor: "rgba(20,20,20,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "60px" }}>
          <div>
            <h2 style={{ fontSize: "3.5rem", marginBottom: "24px", lineHeight: "1", color: "white", textShadow: "0 4px 20px rgba(255,255,255,0.1)" }}>THE COLLECTIVE</h2>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, white, transparent)", marginBottom: "32px", borderRadius: "2px" }}></div>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Sukabumi Eundeur bukanlah sekadar event organizer. Ini adalah sebuah kolektif, sebuah pergerakan yang lahir dari idealisme sekumpulan pemuda lokal yang menolak menyerah pada keterbatasan di awal tahun 2000-an.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
              Berawal dari aksi kolektif hingga kini menjadi entitas yang lebih terstruktur, semangat pergerakan mandiri (independen) dan solidaritas skena tetap menjadi nyala api utama untuk musik keras Sukabumi.
            </p>
          </div>
          <div style={{ position: "relative", height: "450px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.6)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }}></div>
            <Image 
              src="/POL_5913.jpg" 
              alt="Sukabumi Eundeur Collective Founders" 
              fill 
              style={{ objectFit: "cover", filter: "grayscale(60%) contrast(110%)" }} 
            />
          </div>
        </div>
      </section>

      {/* 3. Hall of Fame (Band Legendaris) */}
      <section style={{ backgroundColor: "#0a0a0a", color: "white", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        {/* Subtle background glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80vw", height: "80vw", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)", zIndex: 0, pointerEvents: "none" }}></div>
        
        <div className="container" style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "16px", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>HALL OF FAME</h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.2rem" }}>Monster-monster yang pernah menghancurkan panggung kami.</p>
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "1000px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {hallOfFame.map((band, idx) => (
            <span key={idx} className="hover-opacity" style={{ 
              border: "1px solid rgba(255,255,255,0.15)", 
              backgroundColor: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(5px)",
              padding: "14px 28px", 
              fontSize: "1.1rem", 
              fontWeight: "600",
              fontFamily: "var(--font-heading)",
              borderRadius: "30px",
              letterSpacing: "1px",
              cursor: "default"
            }}>
              {band}
            </span>
          ))}
        </div>
      </section>

      {/* 4. After-Movie Video Integration */}
      <section className="container" style={{ padding: "100px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3.5rem", marginBottom: "16px", color: "white" }}>AFTER-MOVIE ARCHIVE</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.2rem", marginBottom: "60px" }}>Rasakan energi distorsi dan lautan moshpit dari edisi-edisi sebelumnya.</p>
        
        <div style={{ maxWidth: "900px", margin: "0 auto", borderRadius: "24px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "16/9", backgroundColor: "#050505", position: "relative" }}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/IV-Fu7mW4lE?si=AXj9lWdd0mevc0JV" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </section>

      {/* 5. Timeline History (with Visual Documentation) */}
      <section className="container" style={{ padding: "40px 24px 100px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2 style={{ fontSize: "3.5rem", color: "white" }}>THE TIMELINE</h2>
          <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, transparent, white, transparent)", margin: "24px auto", borderRadius: "2px" }}></div>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
          {eventsHistory.map((event, index) => (
            <div key={index} className="timeline-item card-hover" style={{ 
              display: "flex", 
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "60px",
              gap: "40px",
              position: "relative",
              zIndex: 2
            }}>
              
              {/* Konten Teks */}
              <div style={{ flex: "1", padding: "40px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(20,20,20,0.6)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ display: "inline-block", backgroundColor: "white", color: "black", padding: "6px 12px", borderRadius: "20px", fontWeight: "bold", fontSize: "0.85rem", marginBottom: "20px", width: "fit-content", letterSpacing: "1px" }}>
                  {event.date}
                </span>
                <h2 style={{ fontSize: "2rem", marginBottom: "16px", lineHeight: "1.2", color: "white" }}>{event.title}</h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", marginBottom: "20px", color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                  <span style={{ color: "white" }}>&#9654;</span> {event.location}
                </div>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
                  {event.desc}
                </p>
              </div>

              {/* Teks Tahun Transparan / Kosong */}
              <div className="timeline-spacer" style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}>
                <h3 style={{ fontSize: "6rem", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.1)", opacity: 0.8, userSelect: "none" }}>
                  {event.date.split(" ")[2]}
                </h3>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. Call To Action Pamungkas */}
      <section style={{ background: "linear-gradient(to bottom, #050505 0%, #111111 100%)", color: "white", padding: "120px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
        {/* Glow behind CTA */}
        <div style={{ position: "absolute", bottom: "-100px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", background: "rgba(255,255,255,0.03)", filter: "blur(100px)", borderRadius: "50%", zIndex: 0, pointerEvents: "none" }}></div>
        
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: "1.1", marginBottom: "32px", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>BE PART OF THE NEXT CHAPTER!</h2>
          <p style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", marginBottom: "48px", lineHeight: "1.6" }}>
            Sejarah masih terus ditulis. Jangan hanya menjadi penonton. Jadilah bagian dari pergerakan ini.
          </p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn hover-opacity" style={{ padding: "16px 40px", fontSize: "1.1rem", backgroundColor: "white", color: "black", borderColor: "white", borderRadius: "30px", fontWeight: "bold", letterSpacing: "1px" }}>
              BELI TIKET EVENT
            </a>
            <a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn hover-opacity" style={{ padding: "16px 40px", fontSize: "1.1rem", color: "white", borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", borderRadius: "30px", fontWeight: "bold", letterSpacing: "1px" }}>
              DUKUNG VIA MERCH
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
