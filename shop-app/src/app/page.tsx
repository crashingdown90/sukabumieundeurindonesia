"use client";
import { useState } from "react";

const products = [
  {
    id: 1,
    category: "T-SHIRT",
    name: "SUKABUMI EUNDEUR OFFICIAL T-SHIRT 2024",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  },
  {
    id: 2,
    category: "HOODIE",
    name: "SOUND REVIVAL HOODIE (BLACK)",
    price: "Rp 350.000",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    status: "PRE-ORDER"
  },
  {
    id: 3,
    category: "OUTERWEAR",
    name: "TOTAL AGGRESSION LONGSLEEVE",
    price: "Rp 210.000",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    status: "SOLD OUT"
  },
  {
    id: 4,
    category: "ACCESSORIES",
    name: "REST IN PEACE TOTEBAG",
    price: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1597818784365-5d9c228a47ff?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  },
  {
    id: 5,
    category: "ACCESSORIES",
    name: "OFFICIAL LOGO CAP",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  },
  {
    id: 6,
    category: "ACCESSORIES",
    name: "DISTORTION LANYARD",
    price: "Rp 45.000",
    image: "https://images.unsplash.com/photo-1610443423719-7d08baee1da4?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  }
];

const categories = ["ALL", "T-SHIRT", "HOODIE", "OUTERWEAR", "ACCESSORIES"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Lookbook Banner */}
      <section style={{ 
        width: "100%", 
        height: "clamp(400px, 60vh, 700px)", 
        position: "relative",
        borderBottom: "4px solid var(--color-text-primary)",
        backgroundColor: "var(--color-bg-primary)",
        overflow: "hidden"
      }}>
        {/* Placeholder untuk foto Lookbook, saya pakai foto konser abstrak sementara */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: "url('https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(120%)",
          opacity: 0.8
        }} />
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)"
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
            2024 COLLECTION
          </h1>
          <p style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", fontWeight: "bold", letterSpacing: "2px", textShadow: "2px 2px 0 #000" }}>
            WEAR YOUR DISTORTION
          </p>
          <button onClick={() => window.scrollTo({ top: document.getElementById('catalog')?.offsetTop || 0, behavior: 'smooth' })} className="btn" style={{ marginTop: "32px", backgroundColor: "white", color: "black", borderColor: "white" }}>
            SHOP NOW
          </button>
        </div>
      </section>

      <div id="catalog" className="container" style={{ padding: "80px 24px" }}>
        {/* Store Header & Category Filter */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            OFFICIAL <span style={{ color: "var(--color-text-secondary)" }}>CATALOG</span>
          </h2>
          
          {/* Tabs Filter */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "12px", 
            flexWrap: "wrap",
            marginTop: "40px" 
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 24px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  border: "2px solid var(--color-text-primary)",
                  backgroundColor: activeCategory === cat ? "var(--color-text-primary)" : "transparent",
                  color: activeCategory === cat ? "var(--color-bg-primary)" : "var(--color-text-primary)",
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "40px", marginBottom: "100px" }}>
          {filteredProducts.map((product) => (
            <a href={`/product/${product.id}`} key={product.id} className="product-card" style={{ border: "2px solid var(--color-text-primary)", display: "flex", flexDirection: "column", backgroundColor: "var(--color-bg-primary)", textDecoration: "none", color: "inherit" }}>
              
              {/* Image Container with Grayscale Filter */}
              <div style={{ position: "relative", width: "100%", height: "350px", borderBottom: "2px solid var(--color-text-primary)", overflow: "hidden", backgroundColor: "#e4e4e7" }}>
                {product.status === "SOLD OUT" && (
                  <div style={{ position: "absolute", top: "20px", right: "-40px", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "8px 40px", transform: "rotate(45deg)", zIndex: 10, fontWeight: "bold", letterSpacing: "1px", fontSize: "0.9rem" }}>
                    SOLD OUT
                  </div>
                )}
                {product.status === "PRE-ORDER" && (
                  <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", padding: "8px 16px", border: "2px solid var(--color-text-primary)", zIndex: 10, fontWeight: "bold", fontSize: "0.8rem" }}>
                    PRE-ORDER
                  </div>
                )}
                <div style={{ width: "100%", height: "100%", backgroundImage: `url('${product.image}')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%) contrast(110%)", mixBlendMode: "multiply" }} />
              </div>

              {/* Product Info */}
              <div style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: "bold", marginBottom: "8px", letterSpacing: "1px" }}>{product.category}</p>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", lineHeight: "1.2" }}>{product.name}</h3>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "24px", color: "var(--color-text-primary)" }}>{product.price}</p>
                
                <div 
                  className="btn btn-primary" 
                  style={{ marginTop: "auto", width: "100%", opacity: product.status === "SOLD OUT" ? 0.5 : 1, textAlign: "center" }}
                >
                  LIHAT DETAIL
                </div>
              </div>

            </a>
          ))}
        </section>
      </div>
    </>
  );
}
