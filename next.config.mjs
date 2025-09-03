/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.pravatar.cc", // for profile placeholders
      "randomuser.me", // optional, random faces
      "source.unsplash.com", // optional, unsplash random
    ],
  },
};

export default nextConfig;
