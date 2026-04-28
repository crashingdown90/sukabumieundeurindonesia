import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// This runs on the server
async function getArticle(slug: string) {
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !article) return null;

  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    category: article.category,
    author: article.author,
    date: new Date(article.created_at).toISOString().split("T")[0],
    image: article.image || "",
    metaDescription: article.meta_description || "",
    content: article.content,
    status: article.status,
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);
  
  if (!article) return { title: "Artikel Tidak Ditemukan | Sukabumi Eundeur News" };

  return {
    title: `${article.title} | Sukabumi Eundeur News`,
    description: article.metaDescription || article.content.substring(0, 150) + "...",
    openGraph: {
      title: article.title,
      description: article.metaDescription || article.content.substring(0, 150) + "...",
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);

  if (!article) {
    notFound();
  }



  return (
    <>
      {/* Hero Image Section */}
      <div style={{ position: "relative", width: "100%", height: "60vh", minHeight: "400px", maxHeight: "600px", backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        {article.image && (
          <Image 
            src={article.image.startsWith('http') ? article.image : (article.image || '/logo-sukabumi.png')}
            alt={article.title}
            fill
            style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.6)" }}
            priority
          />
        )}
        <div className="container" style={{ position: "absolute", bottom: 0, left: 0, right: 0, paddingBottom: "40px", zIndex: 10 }}>
          <span style={{ display: "inline-block", backgroundColor: "var(--color-text-primary)", color: "var(--color-bg-primary)", padding: "4px 12px", fontFamily: "var(--font-heading)", letterSpacing: "1px", marginBottom: "16px", fontSize: "0.9rem" }}>
            {article.category.replace(/-/g, ' ').toUpperCase()}
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", lineHeight: "1.1", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "1px", color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            {article.title}
          </h1>
        </div>
      </div>

      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", padding: "40px 24px" }}>
        
        {/* Main Content */}
        <div style={{ flex: "1 1 700px" }}>
          
          {/* Metadata Bar */}
          <div style={{ display: "flex", gap: "24px", paddingBottom: "24px", marginBottom: "32px", borderBottom: "1px solid var(--color-border)", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "1px", fontSize: "0.95rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--color-text-primary)" }}>DITULIS OLEH:</span>
              <strong>{article.author}</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--color-text-primary)" }}>DIPUBLIKASIKAN:</span>
              <strong>{article.date}</strong>
            </div>
          </div>

          {/* Article Body */}
          <article 
            className="article-content"
            style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--color-text-primary)" }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags & Share */}
          <div style={{ marginTop: "60px", paddingTop: "32px", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <span style={{ fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>TAGS:</span>
              <span style={{ border: "1px solid var(--color-border)", padding: "2px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>{article.category.replace(/-/g, ' ').toUpperCase()}</span>
              <span style={{ border: "1px solid var(--color-border)", padding: "2px 12px", borderRadius: "20px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>SUKABUMI</span>
            </div>
            
            <div style={{ display: "flex", gap: "16px" }}>
              <button style={{ backgroundColor: "transparent", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", padding: "8px 16px", cursor: "pointer", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>SHARE FB</button>
              <button style={{ backgroundColor: "transparent", border: "1px solid var(--color-border)", color: "var(--color-text-primary)", padding: "8px 16px", cursor: "pointer", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>SHARE X</button>
            </div>
          </div>
        </div>

        {/* Sidebar (Related / Ads Placeholder) */}
        <div style={{ flex: "1 1 300px" }}>
          
          {/* AdSense Placeholder */}
          <div style={{ width: "100%", height: "250px", backgroundColor: "var(--color-bg-secondary)", border: "1px dashed var(--color-text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
            <span style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "2px" }}>ADVERTISEMENT</span>
          </div>

          <h3 style={{ fontSize: "1.5rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "12px", marginBottom: "24px", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>BACA JUGA</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }} className="hover-opacity">
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ width: "100px", height: "100px", backgroundColor: "var(--color-bg-secondary)", backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop')", backgroundSize: "cover", filter: "grayscale(100%)" }}></div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>REVIEW ALBUM</span>
                  <h4 style={{ fontSize: "1rem", lineHeight: "1.3", marginTop: "4px" }}>Membedah Album Terbaru &apos;Total Aggression&apos;</h4>
                </div>
              </div>
            </Link>
            
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }} className="hover-opacity">
              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ width: "100px", height: "100px", backgroundColor: "var(--color-bg-secondary)", backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a1a2a5f014e3?q=80&w=200&auto=format&fit=crop')", backgroundSize: "cover", filter: "grayscale(100%)" }}></div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-heading)", letterSpacing: "1px" }}>INTERVIEW</span>
                  <h4 style={{ fontSize: "1rem", lineHeight: "1.3", marginTop: "4px" }}>Eksklusif: Di Balik Dapur Rekaman Burgerkill</h4>
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </>
  );
}
