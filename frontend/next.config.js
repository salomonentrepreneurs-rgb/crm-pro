// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'crm-pro.vercel.app'],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'CRM Pro',
    NEXT_PUBLIC_PRIMARY_COLOR: '#6366f1',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
};
module.exports = nextConfig;
