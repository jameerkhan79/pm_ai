import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow native module better-sqlite3 to be bundled for server handlers.
  experimental: {
    serverComponentsExternalPackages: ["better-sqlite3"],
  },
};

export default nextConfig;
