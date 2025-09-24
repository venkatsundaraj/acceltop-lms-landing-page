import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      {
        protocol: "https",
        hostname: "ska5e2m64t.ufs.sh",
        pathname: "/f/**", // Matches everything under /f/
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
