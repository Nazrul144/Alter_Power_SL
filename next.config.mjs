/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['i.ibb.co', 'lh3.googleusercontent.com', 'i.postimg.cc','http://127.0.0.1:8000', 'https://alter-power.co.za/api', '31.97.114.215'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alter-power.co.za',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '31.97.114.215',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '31.97.114.215',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/images/**',
      },
      {
        protocol: 'http',
        hostname: 'i.ibb.co',
        port: '**',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'lh3.googleusercontent.com',
        port: '**',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },

  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },

  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 0,     // Minimum chunk size in bytes (0 Byte)
      maxSize: 10000000,    // Try to keep chunks below 10 MB
    };
    return config;
  },

};

export default nextConfig;
