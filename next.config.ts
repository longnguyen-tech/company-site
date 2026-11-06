import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out
  // that can be uploaded to any static host (Hostinger, cPanel, S3, ...).
  output: "export",
  images: {
    // The image optimizer needs a Node server, so serve the images as-is.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
