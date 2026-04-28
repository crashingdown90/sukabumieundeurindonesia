import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/checkout/"], // Prevent crawling checkout sessions
    },
    sitemap: "https://ticket.sukabumieundeurindonesia.com/sitemap.xml",
  };
}
