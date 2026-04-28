import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Biography & History | Sukabumi Eundeur Indonesia",
  description: "Jejak sejarah dan pergerakan Sukabumi Eundeur dari masa ke masa.",
};

const eventsHistory = [
  { title: "SUKABUMI EUNDEUR I", date: "05 November 2000", location: "GOR Merdeka Kota Sukabumi", desc: "Langkah pertama. Ratusan metalhead memadati GOR Merdeka, menjadi saksi lahirnya pergerakan bawah tanah paling masif di Sukabumi." },
  { title: "SUKABUMI EUNDEUR II", date: "11 Maret 2001", location: "GOR Merdeka Kota Sukabumi", desc: "Volume kedua yang semakin brutal. Komunitas lokal mulai menunjukkan taringnya dengan karya-karya orisinil yang menolak tunduk." },
  { title: "SUKABUMI EUNDEUR V", date: "03 Oktober 2004", location: "GOR Merdeka Kota Sukabumi", desc: "Mencapai titik didih. Ribuan tiket terjual habis. Sukabumi Eundeur resmi menjadi barometer gigs metal di Jawa Barat." },
  { title: "SUKABUMI EUNDEUR \"REST IN PEACE\"", date: "07 Maret 2010", location: "GOR Merdeka Kota Sukabumi", desc: "Satu dekade distorsi. Sebuah edisi memorial yang dikenang sebagai salah satu moshpit paling liar dalam sejarah kota." },
  { title: "SUKABUMI EUNDEUR \"ARISE OF MONSTER\"", date: "09 November 2014", location: "Lap. Yon Armed 13 Sukabumi", desc: "Era baru di venue *outdoor* raksasa. Menghadirkan *lineup* monster yang menggetarkan bumi Sukabumi dari pagi hingga malam." },
  { title: "SUKABUMI EUNDEUR \"REROUTE TO ROOTS\"", date: "21 September 2024", location: "Stadion Surya Kencana Kota Sukabumi", desc: "Kembali ke akar. Merayakan lebih dari dua dekade kebersamaan, idealisme, dan kemerdekaan berekspresi tanpa henti." },
];

export default function BiographyPage() {
  return (
    <>
      {/* Hero Banner Raksasa */}
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

      {/* Timeline Section */}
      <div className="container" style={{ padding: "80px 24px" }}>
        
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
          
          {/* Garis Vertikal Timeline */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "4px", height: "100%", backgroundColor: "var(--color-text-primary)", zIndex: 1, display: "none" }} className="timeline-line"></div>

          {eventsHistory.map((event, index) => (
            <div key={index} className="timeline-item card-hover" style={{ 
              display: "flex", 
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "80px",
              gap: "40px",
              position: "relative",
              zIndex: 2
            }}>
              
              {/* Konten Teks */}
              <div style={{ flex: "1", padding: "32px", border: "2px solid var(--color-text-primary)", backgroundColor: index % 2 === 0 ? "var(--color-bg-primary)" : "var(--color-bg-secondary)" }}>
                <span style={{ display: "inline-block", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "4px 12px", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "16px" }}>
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

              {/* Elemen Visual (Kosong untuk memberi ruang bagi zigzag layout, di mobile dihilangkan) */}
              <div className="timeline-spacer" style={{ flex: "1" }}>
                {/* Di desktop, ini membiarkan konten berselang-seling kiri-kanan */}
                <h3 style={{ fontSize: "6rem", color: "transparent", WebkitTextStroke: "2px var(--color-border)", textAlign: index % 2 === 0 ? "right" : "left", opacity: 0.5 }}>
                  {event.date.split(" ")[2]}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}
