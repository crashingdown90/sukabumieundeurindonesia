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
    desc: "Era baru di venue *outdoor* raksasa. Menghadirkan *lineup* monster yang menggetarkan bumi Sukabumi dari pagi hingga malam.",
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
        width: "100%", 
        height: "70vh", 
        minHeight: "500px",
        position: "relative",
        borderBottom: "4px solid var(--color-text-primary)",
        backgroundColor: "var(--color-bg-primary)",
        display: "flex",
        alignItems: "flex-end",
        padding: "40px 24px"
      }}>
        <Image 
          src="/biography-hero.png" 
          alt="Vintage Underground Gig" 
          fill 
          style={{ objectFit: "cover", filter: "grayscale(100%) contrast(140%)", opacity: 0.6 }} 
          priority 
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)" }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 10, color: "var(--color-bg-primary)", width: "100%" }}>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: "1", marginBottom: "16px", letterSpacing: "-2px", textShadow: "4px 4px 0 #000" }}>
            20 TAHUN DISTORSI
          </h1>
          <p style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: "500", maxWidth: "800px", textShadow: "2px 2px 0 #000" }}>
            Jejak sejarah, darah, dan keringat Sukabumi Eundeur. Dari gig kecil di sudut kota, menjadi raksasa skena bawah tanah.
          </p>
        </div>
      </section>

      {/* 2. The Founders / The Collective Section */}
      <section className="container" style={{ padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center", backgroundColor: "var(--color-bg-secondary)", border: "2px solid var(--color-text-primary)", padding: "40px" }}>
          <div>
            <h2 style={{ fontSize: "3rem", marginBottom: "24px", lineHeight: "1" }}>THE COLLECTIVE</h2>
            <div style={{ width: "60px", height: "4px", backgroundColor: "var(--color-text-primary)", marginBottom: "24px" }}></div>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Sukabumi Eundeur bukanlah sekadar *event organizer*. Ini adalah sebuah kolektif, sebuah *movement* yang lahir dari idealisme sekumpulan pemuda lokal yang menolak menyerah pada keterbatasan di awal tahun 2000-an.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
              Berawal dari patungan uang jajan hingga kini menjadi entitas korporasi, semangat DIY (Do It Yourself) dan solidaritas skena tetap menjadi nyala api utama yang dijaga oleh para pendiri dan tim inti hingga hari ini.
            </p>
          </div>
          <div style={{ position: "relative", height: "400px", border: "4px solid var(--color-text-primary)" }}>
            <Image 
              src="/founders.png" 
              alt="Sukabumi Eundeur Collective Founders" 
              fill 
              style={{ objectFit: "cover", filter: "grayscale(100%) contrast(120%)" }} 
            />
          </div>
        </div>
      </section>

      {/* 3. Hall of Fame (Band Legendaris) */}
      <section style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "80px 0", overflow: "hidden" }}>
        <div className="container" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem" }}>HALL OF FAME</h2>
          <p style={{ color: "var(--color-border)" }}>Monster-monster yang pernah menghancurkan panggung kami.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
          {hallOfFame.map((band, idx) => (
            <span key={idx} style={{ 
              border: "2px solid var(--color-bg-primary)", 
              padding: "12px 24px", 
              fontSize: "1.2rem", 
              fontWeight: "bold",
              fontFamily: "var(--font-heading)"
            }}>
              {band}
            </span>
          ))}
        </div>
      </section>

      {/* 4. After-Movie Video Integration */}
      <section className="container" style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3rem", marginBottom: "16px" }}>AFTER-MOVIE ARCHIVE</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", marginBottom: "40px" }}>Rasakan energi distorsi dan lautan *moshpit* dari edisi-edisi sebelumnya.</p>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", border: "4px solid var(--color-text-primary)", aspectRatio: "16/9", backgroundColor: "#000", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Placeholder YouTube Embed */}
          <div style={{ color: "#fff", textAlign: "center" }}>
            <div style={{ fontSize: "4rem", marginBottom: "16px" }}>▶</div>
            <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", letterSpacing: "1px" }}>PLAY DOCUMENTARY</p>
          </div>
        </div>
      </section>

      {/* 5. Timeline History (with Visual Documentation) */}
      <section className="container" style={{ padding: "0 24px 80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "3rem" }}>THE TIMELINE</h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "var(--color-text-primary)", margin: "16px auto" }}></div>
        </div>

        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
          {/* Garis Vertikal Timeline */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "4px", height: "100%", backgroundColor: "var(--color-text-primary)", zIndex: 1, display: "none" }} className="timeline-line"></div>

          {eventsHistory.map((event, index) => (
            <div key={index} className="timeline-item card-hover" style={{ 
              display: "flex", 
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              justifyContent: "space-between",
              alignItems: "stretch",
              marginBottom: "80px",
              gap: "40px",
              position: "relative",
              zIndex: 2
            }}>
              
              {/* Konten Teks */}
              <div style={{ flex: "1", padding: "32px", border: "2px solid var(--color-text-primary)", backgroundColor: "var(--color-bg-primary)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ display: "inline-block", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "4px 12px", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "16px", width: "fit-content" }}>
                  {event.date}
                </span>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "16px", lineHeight: "1.1" }}>{event.title}</h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", marginBottom: "24px", color: "var(--color-text-secondary)" }}>
                  <span style={{ color: "var(--color-text-primary)" }}>&#9654;</span> {event.location}
                </div>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--color-text-secondary)" }}>
                  {event.desc}
                </p>
              </div>

              {/* Injeksi Visual Dokumentasi Era */}
              <div style={{ flex: "1", minHeight: "300px", position: "relative", border: "4px solid var(--color-text-primary)" }}>
                <Image 
                  src={event.img} 
                  alt={event.title} 
                  fill 
                  style={{ objectFit: "cover", filter: "grayscale(100%) contrast(120%)" }} 
                />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. Call To Action Pamungkas */}
      <section style={{ backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "100px 24px", textAlign: "center", borderTop: "4px solid var(--color-bg-primary)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: "1", marginBottom: "24px" }}>BE PART OF THE NEXT CHAPTER!</h2>
          <p style={{ fontSize: "1.2rem", color: "var(--color-border)", marginBottom: "40px" }}>
            Sejarah masih terus ditulis. Jangan hanya menjadi penonton. Jadilah bagian dari pergerakan ini.
          </p>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://ticket.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "16px 32px", fontSize: "1.2rem", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", borderColor: "var(--color-bg-primary)" }}>
              🎟️ BELI TIKET EVENT
            </a>
            <a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "16px 32px", fontSize: "1.2rem", color: "var(--color-bg-primary)", borderColor: "var(--color-bg-primary)", backgroundColor: "transparent" }}>
              👕 DUKUNG VIA MERCH
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
