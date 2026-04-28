import { supabase } from "@/lib/supabase";

// Fetch articles from Supabase
async function getArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  
  return data.map(a => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    category: a.category,
    author: a.author,
    date: new Date(a.created_at).toISOString().split("T")[0],
    image: a.image || "",
    metaDescription: a.meta_description || "",
    content: a.content,
  }));
}

export default async function NewsHome() {
  const publishedArticles = await getArticles();
  
  // The first article is the Headline/Top Story
  const headline = publishedArticles.length > 0 ? publishedArticles[0] : null;
  // The rest are grid articles
  const recentArticles = publishedArticles.slice(1);

  return (
    <>
      {/* Ticker / Breaking News */}
      <div className="marquee-container" style={{ display: "flex", alignItems: "center", padding: 0, marginTop: "88px" }}>
        <div style={{ backgroundColor: "var(--color-bg-primary)", color: "var(--color-text-primary)", padding: "12px 24px", fontWeight: "bold", zIndex: 10, position: "relative", borderRight: "1px solid var(--color-border)" }}>
          BREAKING
        </div>
        <div style={{ overflow: "hidden", flex: 1, padding: "12px 0" }}>
          <div className="marquee-content" style={{ paddingLeft: "100%" }}>
            SUKABUMI EUNDEUR FESTIVAL 2026 SEGERA DIUMUMKAN! PERSIAPKAN DIRI KALIAN UNTUK DISTORSI TERBESAR DALAM SEJARAH PERGERAKAN BAWAH TANAH SUKABUMI.
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "40px 24px" }}>
        
        {/* Editorial Header */}
        <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "40px", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(4rem, 8vw, 8rem)", lineHeight: "0.9", letterSpacing: "-2px" }}>THE HEADLINE</h1>
          <p style={{ fontSize: "1.2rem", fontWeight: "500", marginTop: "16px", letterSpacing: "1px", color: "var(--color-text-secondary)" }}>EDISI: V.01 / KABAR BAWAH TANAH</p>
        </div>

        {/* Top Story - Dynamic */}
        {headline && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginBottom: "80px" }}>
            <div style={{ borderRight: "1px solid var(--color-border)", paddingRight: "40px" }}>
              <h2 style={{ fontSize: "3.5rem", lineHeight: "1", marginBottom: "24px" }}>{headline.title}</h2>
              <div style={{ display: "flex", gap: "16px", fontSize: "0.9rem", fontWeight: "bold", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "8px 0", marginBottom: "24px", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
                <span>Oleh: {headline.author}</span>
                <span>•</span>
                <span>{headline.date}</span>
                <span>•</span>
                <span>{headline.category.replace(/-/g, ' ')}</span>
              </div>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                {headline.metaDescription || headline.content.substring(0, 200) + "..."}
              </p>
              <a href={`/artikel/${headline.slug}`} className="btn btn-primary" style={{ borderRadius: "0" }}>BACA SELENGKAPNYA</a>
            </div>

            <div style={{ 
              minHeight: "400px", 
              backgroundImage: `url('${headline.image && headline.image !== "" ? headline.image : "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop"}')`, 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              filter: "grayscale(100%) contrast(130%) brightness(0.7)",
              border: "1px solid var(--color-border)"
            }}>
            </div>
          </div>
        )}

        {/* Grid Articles - Dynamic */}
        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "40px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "32px" }}>BERITA TERKINI</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px" }}>
            
            {recentArticles.length > 0 ? recentArticles.map((article: any) => (
              <a key={article.id} href={`/artikel/${article.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
                <div style={{ padding: "0" }}>
                  <div style={{ 
                    height: "200px", 
                    backgroundImage: `url('${article.image && article.image !== "" ? article.image : "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"}')`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    filter: "grayscale(100%) contrast(120%) brightness(0.8)" 
                  }}></div>
                  <div style={{ padding: "24px" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)", textTransform: "uppercase" }}>
                      {article.category.replace(/-/g, ' ')}
                    </span>
                    <h4 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: "1.2" }}>{article.title}</h4>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                      {article.metaDescription || article.content.substring(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </a>
            )) : (
              <p style={{ color: "var(--color-text-secondary)" }}>Belum ada berita terkini.</p>
            )}

          </div>
        </div>

      </div>
    </>
  );
}
