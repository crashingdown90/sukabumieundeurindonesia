import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "axrjqxwhxltsqhqjotpp.supabase.co",
      },
    ],
  },
};

export default nextConfig;
