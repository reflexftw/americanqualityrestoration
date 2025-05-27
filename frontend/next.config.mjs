/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.urdesignmag.com",
      },
    ],
  },
};

export default nextConfig;
