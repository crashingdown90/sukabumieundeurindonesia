import Image from "next/image";

const products = [
  {
    id: 1,
    name: "SUKABUMI EUNDEUR OFFICIAL T-SHIRT 2024",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  },
  {
    id: 2,
    name: "SOUND REVIVAL HOODIE (BLACK)",
    price: "Rp 350.000",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    status: "PRE-ORDER"
  },
  {
    id: 3,
    name: "TOTAL AGGRESSION LONGSLEEVE",
    price: "Rp 210.000",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    status: "SOLD OUT"
  },
  {
    id: 4,
    name: "REST IN PEACE TOTEBAG",
    price: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1597818784365-5d9c228a47ff?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  },
  {
    id: 5,
    name: "OFFICIAL LOGO CAP",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  },
  {
    id: 6,
    name: "DISTORTION LANYARD",
    price: "Rp 45.000",
    image: "https://images.unsplash.com/photo-1610443423719-7d08baee1da4?q=80&w=1000&auto=format&fit=crop",
    status: "READY STOCK"
  }
];

export default function Shop() {
  return (
    <div className="container" style={{ padding: "80px 24px" }}>
      {/* Store Header */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", marginBottom: "24px", lineHeight: "1.1" }}>
          OFFICIAL <span style={{ color: "var(--color-text-secondary)" }}>MERCHANDISE</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          Kenakan identitasmu. 100% keuntungan digunakan untuk mendanai pergerakan dan event Sukabumi Eundeur.
        </p>
      </section>

      {/* Product Catalog Grid */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "40px", marginBottom: "100px" }}>
        {products.map((product) => (
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
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px", lineHeight: "1.2" }}>{product.name}</h3>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "24px", color: "var(--color-text-secondary)" }}>{product.price}</p>
              
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
  );
}
