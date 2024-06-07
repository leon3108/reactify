/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dailymix-images.scdn.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'newjams-images.scdn.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'concerts.spotifycdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 't.scdn.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'charts-images.scdn.co',
        port: '',
        pathname: '**',
      },
    ],
  }
};

export default nextConfig;
