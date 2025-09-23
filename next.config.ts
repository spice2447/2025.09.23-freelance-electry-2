const nextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  basePath: "",
  assetPrefix: "/",

  // 👇 переименуем директорию для GitHub Pages
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};
export default nextConfig;
