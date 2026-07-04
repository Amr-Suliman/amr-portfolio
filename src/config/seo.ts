import type { Metadata } from "next";
import { siteConfig } from "./site";

export const seo: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | Amr Suleiman",
  },

  description: siteConfig.description,

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};