import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Add more hostnames if you use other image sources
      // {
      //   protocol: "https",
      //   hostname: "your-cdn-domain.com",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
    // Optional: Add domains for simpler configuration (deprecated but still works)
    // domains: ["images.unsplash.com"],
  },
};

export default nextConfig;