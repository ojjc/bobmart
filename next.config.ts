import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "global-static.popmart.com"
      }
    ]
  }
};

export default nextConfig;
