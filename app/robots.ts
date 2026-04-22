import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://peterlukedigital.com/sitemap.xml",
    host: "https://peterlukedigital.com",
  };
}
