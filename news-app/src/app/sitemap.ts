import { MetadataRoute } from 'next';
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
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
    const filePath = path.join(process.cwd(), "src/data/articles.json");
    if (fs.existsSync(filePath)) {
      const rawData = fs.readFileSync(filePath, "utf-8");
      const articles = JSON.parse(rawData);
      
      const articleRoutes = articles
        .filter((a: any) => a.status === "published")
        .map((a: any) => ({
          url: `${baseUrl}/artikel/${a.slug}`,
          lastModified: new Date(a.date),
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
