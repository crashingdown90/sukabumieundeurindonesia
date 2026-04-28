import { MetadataRoute } from 'next';
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://news.sukabumieundeurindonesia.com";

  // Base routes
  const routes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/pedoman-media-siber"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Read articles for dynamic routes
  try {
    const { data: articles, error } = await supabase
      .from("articles")
      .select("slug, created_at")
      .eq("status", "published");

    if (!error && articles) {
      const articleRoutes = articles.map((a: any) => ({
        url: `${baseUrl}/artikel/${a.slug}`,
        lastModified: new Date(a.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }));
        
      return [...routes, ...articleRoutes];
    }
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }

  return routes;
}
