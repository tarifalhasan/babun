// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phenomenal-benefit-8b1f696d69.strapiapp.com",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;
