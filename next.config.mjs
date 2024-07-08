import withPlaiceholder from "@plaiceholder/next"

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn2.thecatapi.com',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

export default withPlaiceholder(nextConfig);
