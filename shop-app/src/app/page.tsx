"use client";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image_url: string;
  status: string;
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["ALL", "T-SHIRT", "HOODIE", "OUTERWEAR", "ACCESSORIES"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
          
          // Extract unique categories from db
          const uniqueCats = Array.from(new Set(data.map(p => p.category.toUpperCase())));
          const mergedCats = ["ALL", ...Array.from(new Set([...["T-SHIRT", "HOODIE", "OUTERWEAR", "ACCESSORIES"], ...uniqueCats]))];
          setCategories(mergedCats);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = activeCategory === "ALL" 
    ? products 
    : products.filter(p => p.category.toUpperCase() === activeCategory);

  return (
    <>
      {/* Hero Lookbook Banner */}
      <section style={{ 
        width: "100%", 
        height: "clamp(400px, 60vh, 700px)", 
        position: "relative",
        borderBottom: "4px solid var(--color-border)",
        backgroundColor: "var(--color-bg-primary)",
        overflow: "hidden"
      }}>
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
            2026 COLLECTION
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
        
        {/* Featured Artists Section */}
        <section style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid var(--color-border)", paddingBottom: "16px", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "2rem" }}>ARTISTS</h2>
            <a href="/" style={{ fontSize: "0.9rem", fontWeight: "bold", textDecoration: "underline" }}>View All Artists</a>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {/* Mock Artists / Events */}
            {["SUKABUMI EUNDEUR", "REROUTE TO ROOTS", "TOTAL AGGRESSION", "SOUND REVIVAL"].map((artist) => (
              <a href={`#`} key={artist} style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                height: "120px", 
                backgroundColor: "var(--color-bg-primary)", 
                border: "4px solid var(--color-text-primary)",
                boxShadow: "8px 8px 0 var(--color-text-primary)",
                textDecoration: "none",
                color: "var(--color-text-primary)",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-4px, -4px)";
                e.currentTarget.style.boxShadow = "12px 12px 0 var(--color-text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "8px 8px 0 var(--color-text-primary)";
              }}
              >
                <h3 style={{ fontSize: "1.2rem", textAlign: "center", padding: "16px" }}>{artist}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Store Header & Category Filter */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "24px", lineHeight: "1.1" }}>
            NEW <span style={{ color: "var(--color-text-secondary)" }}>ARRIVALS</span>
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
          {loading ? (
             <p style={{ fontSize: "1.2rem", textAlign: "center", padding: "40px", fontFamily: "var(--font-heading)", gridColumn: "1 / -1" }}>MEMUAT KOLEKSI...</p>
          ) : filteredProducts.length === 0 ? (
             <p style={{ fontSize: "1.2rem", textAlign: "center", padding: "40px", color: "var(--color-text-secondary)", gridColumn: "1 / -1" }}>BELUM ADA MERCHANDISE DI KATEGORI INI.</p>
          ) : (
            filteredProducts.map((product) => (
              <a href={`/product/${product.slug}`} key={product.id} className="product-card" style={{ textDecoration: "none", color: "inherit" }}>
                
                {/* Image Container with Grayscale Filter */}
                <div className="product-img" style={{ position: "relative", backgroundImage: `url('${product.image_url || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000"}')` }}>
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
                </div>

                {/* Product Info */}
                <div className="product-content">
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", fontWeight: "bold", marginBottom: "8px", letterSpacing: "1px" }}>{product.category.toUpperCase()}</p>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", lineHeight: "1.2" }}>{product.name}</h3>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "24px", color: "var(--color-text-primary)" }}>Rp {product.price.toLocaleString("id-ID")}</p>
                  
                  <div 
                    className="btn btn-primary" 
                    style={{ marginTop: "auto", width: "100%", opacity: product.status === "SOLD OUT" || product.stock === 0 ? 0.5 : 1, textAlign: "center" }}
                  >
                    LIHAT DETAIL
                  </div>
                </div>

              </a>
            ))
          )}
        </section>
      </div>
    </>
  );
}
