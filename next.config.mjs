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
          {
            protocol: 'https',
            hostname: 'fakeimg.pl',
          },
        ],
      },
      async redirects() {
        return [
          {
            source: "/care-and-tips",
            destination: "/care-and-tips/articles",
            permanent: true,
          },
        ];
      },
};

export default withPlaiceholder(nextConfig);
