"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/POL_5993.jpg",
    title: "SUKABUMI EUNDEUR",
    subtitle: "EPISENTRUM DISTORSI INDEPENDEN",
  },
  {
    id: 2,
    image: "/DSC01521.jpg",
    title: "REROUTE TO ROOTS",
    subtitle: "KEMBALI KE AKAR PERGERAKAN",
  },
  {
    id: 3,
    image: "/DSC01871.jpg",
    title: "TOTAL AGGRESSION",
    subtitle: "SOLIDARITAS DALAM SATU FREKUENSI",
  },
  {
    id: 4,
    image: "/DSC02021.jpg",
    title: "SOUND REVIVAL",
    subtitle: "MENOLAK TUNDUK, MENOLAK MATI",
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Ganti slide setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "70vh", minHeight: "500px", overflow: "hidden", backgroundColor: "var(--color-bg-primary)", border: "2px solid var(--color-text-primary)" }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          {/* Background Image with Black & White Filter and Dark Overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)", // Memaksa gambar apapun menjadi Hitam Putih
          }} />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay hitam agar teks terbaca
          }} />

          {/* Text Content */}
          <div style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            padding: "24px",
            color: "white", // Selalu putih karena overlay gelap
          }}>
            <h1 style={{ fontSize: "5rem", marginBottom: "16px", lineHeight: "1.1", textShadow: "4px 4px 0 #000" }}>
              {slide.title}
            </h1>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px", textShadow: "2px 2px 0 #000" }}>
              {slide.subtitle}
            </p>
            
            <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
              <a href="/events" className="btn" style={{ backgroundColor: "white", color: "black", borderColor: "white" }}>Lihat Jadwal Gig</a>
              <a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "transparent", color: "white", borderColor: "white" }}>Merchandise Resmi</a>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "12px",
        zIndex: 3,
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "40px",
              height: "6px",
              backgroundColor: index === currentSlide ? "white" : "rgba(255, 255, 255, 0.3)",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
