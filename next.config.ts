import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.nivaancare.com",
      },
      {
        protocol: "https",
        hostname: "backend.nivaancare.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nivaancare.com" }],
        destination: "https://nivaancare.com/:path*",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "https://nivaancare.com/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
