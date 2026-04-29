import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

export const revalidate = 60; // Revalidate every 60 seconds

async function getCategoryArticles(slug: string) {
  // Convert slug to match DB category format (e.g. skena-lokal)
  const categoryStr = slug.toLowerCase();
  
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .eq("category", categoryStr)
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

type Props = {
  params: { slug: string }
};

// SEO Metadata for Category
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const categoryName = params.slug.replace(/-/g, " ").toUpperCase();
  return {
    title: `Berita ${categoryName} - Sukabumi Eundeur News`,
    description: `Kumpulan berita, artikel, dan ulasan terbaru seputar ${categoryName} di ekosistem bawah tanah Sukabumi Eundeur.`,
    openGraph: {
      title: `Berita ${categoryName} | Sukabumi Eundeur`,
      description: `Kumpulan berita, artikel, dan ulasan terbaru seputar ${categoryName}.`,
    }
  }
}

export default async function CategoryPage({ params }: Props) {
  const articles = await getCategoryArticles(params.slug);
  const categoryName = params.slug.replace(/-/g, " ").toUpperCase();

  if (articles.length === 0) {
    return (
      <div className="container" style={{ padding: "160px 24px 80px", textAlign: "center", minHeight: "80vh" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "24px" }}>KATEGORI: {categoryName}</h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.2rem" }}>
          Belum ada artikel yang dipublikasikan di kategori ini.
        </p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: "32px", display: "inline-block" }}>
          KEMBALI KE BERANDA
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "140px 24px 80px", minHeight: "80vh" }}>
      
      <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "24px", marginBottom: "40px" }}>
        <p style={{ color: "var(--color-primary)", fontWeight: "bold", letterSpacing: "2px", marginBottom: "8px" }}>INDEKS KATEGORI</p>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: "1", textTransform: "uppercase" }}>{categoryName}</h1>
        <p style={{ color: "var(--color-text-secondary)", marginTop: "16px", fontSize: "1.1rem" }}>
          Menampilkan {articles.length} artikel dari rubrik {categoryName}.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px" }}>
        {articles.map((article) => (
          <Link key={article.id} href={`/artikel/${article.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
            <div style={{ padding: "0" }}>
              <div style={{ 
                height: "220px", 
                backgroundImage: `url('${article.image && article.image !== "" ? article.image : "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"}')`, 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                filter: "grayscale(100%) contrast(120%) brightness(0.8)" 
              }}></div>
              <div style={{ padding: "24px" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: "bold", padding: "4px 8px", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>
                  {article.date}
                </span>
                <h4 style={{ fontSize: "1.5rem", margin: "16px 0 12px 0", lineHeight: "1.3" }}>{article.title}</h4>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {article.metaDescription || article.content.substring(0, 100) + "..."}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
