"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 6000); // Ganti slide setiap 6 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", marginLeft: "calc(-50vw + 50%)", height: "80vh", minHeight: "600px", overflow: "hidden", backgroundColor: "var(--color-bg-primary)" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          {/* Background Image with Cinematic Grading */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(80%) contrast(110%) brightness(0.8)",
          }} />
          
          {/* Premium Gradient Overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,1) 100%)",
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
            color: "white",
          }}>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: "16px", lineHeight: "1.1", textShadow: "0 10px 30px rgba(0,0,0,0.5)", fontWeight: "bold" }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{ fontSize: "clamp(1rem, 4vw, 1.5rem)", letterSpacing: "4px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginTop: "40px" }}
            >
              <a href="/events" className="btn" style={{ backgroundColor: "white", color: "black", borderColor: "white", borderRadius: "30px", padding: "14px 32px", fontSize: "0.95rem", letterSpacing: "2px" }}>LIHAT JADWAL GIG</a>
              <a href="https://shop.sukabumieundeurindonesia.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "white", borderColor: "rgba(255,255,255,0.3)", borderRadius: "30px", padding: "14px 32px", fontSize: "0.95rem", letterSpacing: "2px" }}>MERCHANDISE RESMI</a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div style={{
        position: "absolute",
        bottom: "40px",
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
              width: index === currentSlide ? "32px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: index === currentSlide ? "white" : "rgba(255, 255, 255, 0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
