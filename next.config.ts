
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

images: {
  formats: ["image/avif", "image/webp"],
  minimumCacheTTL: 60 * 60 * 24 * 30,
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "www.maximatalents.com",
    },
  ],
},

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
