import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biography & History | Sukabumi Eundeur Indonesia",
  description: "Jejak sejarah dan pergerakan Sukabumi Eundeur dari masa ke masa.",
};

const eventsHistory = [
  { title: "SUKABUMI EUNDEUR I", date: "05 November 2000", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR II", date: "11 Maret 2001", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR III", date: "12 Mei 2002", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR IV", date: "06 Juli 2003", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR V", date: "03 Oktober 2004", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR VI", date: "03 Juli 2005", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR VII", date: "19 Maret 2006", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR VIII", date: "09 Maret 2008", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR IX", date: "04 Oktober 2009", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"REST IN PEACE\"", date: "07 Maret 2010", location: "GOR Merdeka Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"ARISE OF MONSTER\"", date: "09 November 2014", location: "Lap. Yon Armed 13 Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"TOTAL AGGRESSION\"", date: "07 Juni 2015", location: "Stadion Surya Kencana Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"DARK CARNIVAL\"", date: "30 Juli 2017", location: "Lap. Manunggal Kodim 0607 Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"GRASPING THE WORLD\"", date: "27 Oktober 2018", location: "Stadion Surya Kencana Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"BEYOND THE WORLD\"", date: "17 September 2023", location: "Stadion Surya Kencana Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"REROUTE TO ROOTS\"", date: "21 September 2024", location: "Stadion Surya Kencana Kota Sukabumi" },
  { title: "SUKABUMI EUNDEUR \"SOUND REVIVAL\"", date: "18 Oktober 2025", location: "Kota Sukabumi" },
];

export default function BiographyPage() {
  return (
    <div className="container" style={{ padding: "60px 24px" }}>
      <header style={{ marginBottom: "60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "16px" }}>BIOGRAPHY</h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Jejak distorsi dan pergerakan event Sukabumi Eundeur dari tahun ke tahun. Sebuah rekam jejak yang membuktikan eksistensi dan konsistensi pergerakan akar rumput.
        </p>
        <div style={{ width: "80px", height: "4px", backgroundColor: "var(--color-text-primary)", margin: "24px auto 0 auto" }}></div>
      </header>

      <div style={{ maxWidth: "900px", margin: "0 auto", border: "2px solid var(--color-text-primary)" }}>
        {eventsHistory.map((event, index) => (
          <div key={index} style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr",
            padding: "24px", 
            borderBottom: index === eventsHistory.length - 1 ? "none" : "2px solid var(--color-text-primary)",
            backgroundColor: index % 2 === 0 ? "var(--color-bg-primary)" : "var(--color-bg-secondary)"
          }}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "12px", letterSpacing: "1px" }}>{event.title}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", color: "var(--color-text-secondary)", fontSize: "1.1rem", fontFamily: "var(--font-heading)" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--color-text-primary)" }}>&#9654;</span> {event.date}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--color-text-primary)" }}>&#9654;</span> {event.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
