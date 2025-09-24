/** @type {import('next').NextConfig} */
const nextConfig = {
  // Menambahkan nama repositori Anda sebagai basePath dan assetPrefix
  basePath: '/warung-ielts-website',
  assetPrefix: '/warung-ielts-website/',
  
  // Mengaktifkan static export
  output: 'export',
  
  // (Opsional) Menonaktifkan optimisasi gambar bawaan Next.js 
  // yang tidak didukung di GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
