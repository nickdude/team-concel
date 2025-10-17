/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // recommended for Hostinger
    images: { unoptimized: true }
};
export default nextConfig;