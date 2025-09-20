import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NODE_ENV === 'production' ? '/portflio' : '';
  
  return {
    name: 'Yash Carpenter - Backend Developer',
    short_name: 'Yash Carpenter',
    description: 'Crafting robust, scalable backend solutions that power exceptional digital experiences.',
    start_url: `${basePath}/`,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: `${basePath}/favicon.ico`,
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
