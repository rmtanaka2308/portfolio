/** @type {import('next').NextConfig} */
const repo = 'portfolio';                // <-- name of the GitHub repo
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  // URLs in prod become  /portfolio/…   instead of  /
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  trailingSlash: true,       // lets each route resolve to /index.html
  images: { unoptimized: true } // required for <Image> when using export
};

export default nextConfig;
